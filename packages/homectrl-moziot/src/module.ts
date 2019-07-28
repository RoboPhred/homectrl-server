import { composeModules } from "microinject";

import actionRequestModule from "./action-requests/module";
import actionModule from "./actions/module";
import pluginModule from "./plugin-management/module";
import propertiesModule from "./properties/module";
import propertyValuesModule from "./property-values/module";
import thingTypesModule from "./thing-types/module";
import thingModule from "./things/module";

const mozIotModule = composeModules(
  actionRequestModule,
  actionModule,
  pluginModule,
  propertiesModule,
  propertyValuesModule,
  thingTypesModule,
  thingModule
);
export default mozIotModule;
