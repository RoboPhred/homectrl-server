import { PluginServices, WutWotPlugin } from "@wutwot/core";
import { ServiceLocator, RegistryModule, BindFunction } from "microinject";

import servicesModule from "./module";
import {
  ScenePluginThingManager,
  SceneFactory,
  ScenePersistenceManager,
  SceneRepository,
  ScenePluginDataPersistence,
} from "./components";

export class ScenesPlugin implements WutWotPlugin {
  get id(): string {
    return "scenes";
  }

  onRegisterServices(
    bind: BindFunction,
    { thingManager, dataPersistence }: PluginServices,
  ): RegistryModule {
    bind(ScenePluginThingManager).toConstantValue(thingManager);
    bind(ScenePluginDataPersistence).toConstantValue(dataPersistence);
    return servicesModule;
  }

  onPluginInitialize(serviceLocator: ServiceLocator) {
    const repository = serviceLocator.get(SceneRepository);
    const factory = serviceLocator.get(SceneFactory);
    const persistence = serviceLocator.get(ScenePersistenceManager);

    for (const persistedScene of persistence.getPersistedScenes()) {
      const scene = factory.restoreScene(persistedScene);
      repository.addScene(scene);
    }
  }
}
