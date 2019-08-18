import { MozIotPluginContext, Thing } from "homectrl-moziot";
import { Observable, Observer } from "rxjs";

import {
  ZWave,
  ZWaveValue,
  ZWaveEventSource,
  ZWaveValueChangedEvent,
  areValuesSame,
  ZWaveValueRemovedEvent
} from "../../../ZWave";

export class BinarySwitchPropertyMonitorImpl {
  constructor(
    zWaveValue: ZWaveValue,
    thing: Thing,
    zwave: ZWave,
    zwaveEvents: ZWaveEventSource,
    plugin: MozIotPluginContext
  ) {
    plugin.addCapability(thing.id, {
      capabilityType: "type",
      type: "OnOffSwitch"
    });

    // this._zwave.enablePolling(value);
    let isRemoved = false;
    const values = Observable.create((o: Observer<boolean>) => {
      function handleChange({ value: changedValue }: ZWaveValueChangedEvent) {
        if (!areValuesSame(zWaveValue, changedValue)) {
          return;
        }
        o.next(Boolean(changedValue.value));
      }
      function handleRemove({
        nodeId,
        commandClass,
        index
      }: ZWaveValueRemovedEvent) {
        if (
          zWaveValue.node_id !== nodeId ||
          zWaveValue.class_id !== commandClass ||
          zWaveValue.index !== index
        ) {
          return;
        }
        unsub();
      }
      const unsub = () => {
        o.complete();
        zwaveEvents.removeListener("value.changed", handleChange);
        zwaveEvents.removeListener("value.removed", handleRemove);
        isRemoved = true;
        // TODO: remove property and OnOffSwitch type
      };
      zwaveEvents.on("value.changed", handleChange);
      zwaveEvents.on("value.removed", handleRemove);
    });

    plugin.addCapability(thing.id, {
      capabilityType: "property",
      title: zWaveValue.label || "Switch",
      description: zWaveValue.label,
      semanticType: "OnOffProperty",
      type: "boolean",
      initialValue: Boolean(zWaveValue.value),
      values,
      onValueChangeRequested: (
        thingId: string,
        propertyId: string,
        value: boolean
      ) => {
        if (isRemoved) {
          return;
        }
        zwave.setValue(zWaveValue, Boolean(value));
      }
    });
  }
}
