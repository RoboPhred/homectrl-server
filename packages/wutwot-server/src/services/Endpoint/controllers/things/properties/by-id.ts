import { injectable, inject } from "microinject";
import createError from "http-errors";
import HttpStatusCodes from "http-status-codes";
import { has } from "lodash";
import { WutWot, SchemaValidationError } from "@wutwot/core";

import { controller, get, put, param, body } from "../../../infrastructure";
import { getThingOrThrow, getPropertyOrThrow } from "../../../controller-utils";

@injectable()
@controller("/things/:thingId/properties/:propertyId")
export class PropertiesById {
  constructor(@inject(WutWot) private _wutwot: WutWot) {}

  @get()
  getProperties(
    @param("thingId") thingId: string,
    @param("propertyId") propertyId: string,
  ) {
    const thing = getThingOrThrow(this._wutwot, thingId);
    const property = getPropertyOrThrow(thing, propertyId);
    return {
      [propertyId]: property.value,
    };
  }

  @put()
  putPropertyValue(
    @param("thingId") thingId: string,
    @param("propertyId") propertyId: string,
    @body() body: any,
  ) {
    const thing = getThingOrThrow(this._wutwot, thingId);
    const property = getPropertyOrThrow(thing, propertyId);
    if (!has(body, propertyId)) {
      throw createError(
        HttpStatusCodes.BAD_REQUEST,
        "The request body must contain an object mapping the property name to its intended value.",
      );
    }
    const value = body[propertyId];

    try {
      property.setValue(value);
    } catch (e) {
      if (e instanceof SchemaValidationError) {
        throw createError(HttpStatusCodes.BAD_REQUEST, e.message);
      }
      throw e;
    }

    return {
      [propertyId]: value,
    };
  }
}
