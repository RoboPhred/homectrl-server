import { ContainerModule } from "microinject";
import { MozIot } from "homectrl-moziot";

import { MozIotPlugin } from "./identifiers";

export default new ContainerModule(bind => {
  bind(MozIot)
    .toDynamicValue(context => {
      const plugins = context.getAll(MozIotPlugin);
      return new MozIot(plugins);
    })
    .inSingletonScope();
});