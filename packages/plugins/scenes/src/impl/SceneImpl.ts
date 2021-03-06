import {
  EventEventSource,
  ThingEventRaisedEventArgs,
  ThingEvent,
  ThingEventRecord,
  WutWot,
} from "@wutwot/core";
import { injectable, provides, inject, injectParam } from "microinject";
import { isEqual, cloneDeep } from "lodash";

import { SceneParams, Scene, ScenePersistenceManager } from "../components";
import { SceneTrigger, ScenePropertySetting, PersistedScene } from "../types";

@injectable()
@provides(Scene)
export class SceneImpl implements Scene {
  // TODO: Currently capturing entire payload data and comparing.
  //  Some data might change per-invocation, we need to have a more
  //  robust trigger, possibly by a well-known event.
  private _triggers: SceneTrigger[] = [];
  private _propertySettings: ScenePropertySetting[] = [];

  constructor(
    @injectParam(SceneParams.SceneId)
    private _sceneId: string,
    @injectParam(SceneParams.SceneName)
    private _sceneName: string,
    @injectParam(SceneParams.ScenePersistedData, { optional: true })
    persistedData: PersistedScene | null,
    @inject(EventEventSource)
    private _eventEventSource: EventEventSource,
    @inject(WutWot)
    private _wutwot: WutWot,
    @inject(ScenePersistenceManager)
    private _persistence: ScenePersistenceManager,
  ) {
    if (persistedData) {
      this._sceneName = persistedData.sceneName;
      this._triggers = cloneDeep(persistedData.triggers);
      this._propertySettings = cloneDeep(persistedData.propertySettings);
    } else {
      this._persist();
    }

    this._eventEventSource.on("event.raise", this._onEventRaised.bind(this));
  }

  get sceneId(): string {
    return this._sceneId;
  }

  get sceneName(): string {
    return this._sceneName;
  }

  set sceneName(value: string) {
    this._sceneName = value;
    this._persist();
  }

  trigger(): void {
    for (const propSetting of this._propertySettings) {
      const { thingId, propertyId, value } = propSetting;

      const thing = this._wutwot.things.get(thingId);
      if (!thing) {
        continue;
      }

      const prop = thing.properties.get(propertyId);
      if (!prop) {
        continue;
      }

      prop.setValue(value);
    }
  }

  learnTrigger(): Promise<void> {
    return new Promise((accept) => {
      this._eventEventSource.once("event.raise", ({ event, record }) => {
        this._triggers.push(makeSceneTrigger(event, record));
        this._persist();
        accept();
      });
    });
  }

  addSceneProperty(setting: ScenePropertySetting) {
    const { thingId, propertyId } = setting;
    for (const existing of this._propertySettings) {
      const {
        thingId: existingThingId,
        propertyId: existingPropertyId,
      } = existing;
      if (thingId === existingThingId && propertyId === existingPropertyId) {
        existing.value = setting.value;
        this._persist();
        return;
      }
    }

    this._propertySettings.push(setting);
    this._persist();
  }

  private _toPersistedScene(): PersistedScene {
    return {
      sceneId: this._sceneId,
      sceneName: this._sceneName,
      triggers: cloneDeep(this._triggers),
      propertySettings: cloneDeep(this._propertySettings),
    };
  }

  private _persist() {
    this._persistence.setPersistedScene(this._toPersistedScene());
  }

  private _onEventRaised(e: ThingEventRaisedEventArgs) {
    const { event, record } = e;
    const trigger = makeSceneTrigger(event, record);
    if (this._triggers.some((sceneTrigger) => isEqual(sceneTrigger, trigger))) {
      this.trigger();
    }
  }
}

function makeSceneTrigger(event: ThingEvent, record: ThingEventRecord) {
  return {
    thingId: event.thingId,
    eventId: event.id,
    data: record.data,
  };
}
