import { injectable, inject } from "microinject";
import { WutWot } from "@wutwot/core";
import { sortBy, flatMap, values } from "lodash";

import { controller, get, param } from "../../../infrastructure";
import { Restifier } from "../../../Restifier";
import { getThingOrThrow } from "../../../controller-utils";

@injectable()
@controller("/things/:thingId/events")
export class ThingEventsRoot {
  constructor(
    @inject(WutWot) private _wutwot: WutWot,
    @inject(Restifier) private _restifier: Restifier,
  ) {}

  @get()
  getThingEvents(@param("thingId") thingId: string) {
    const thing = getThingOrThrow(this._wutwot, thingId);
    let records = flatMap(
      Array.from(thing.events.values()),
      (event) => event.records,
    );
    records = sortBy(records, (record) => record.timestamp);
    return records.map((record) => this._restifier.eventRecordToRest(record));
  }
}
