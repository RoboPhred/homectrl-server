import { ToJSON, DeepImmutable } from "../../../types";

import { InteractionAffoardance } from "../../affoardance";
import { DataSchema } from "../../data-schema";

import { ThingEventRecord } from "./ThingEventRecord";

/**
 * Describes a ThingEvent.
 *
 * Thing events provide the schema for events that can be raised by a {@link Thing}.
 * Thing events also provide the array of records, containing the data for each raised event
 * in chronological order.
 */
export interface ThingEvent extends InteractionAffoardance {
  /**
   * The schema of the data this event contains when raised.
   */
  readonly data: DeepImmutable<DataSchema> | undefined;

  /**
   * An array of records of raised events, in chronological order.
   */
  readonly records: readonly ThingEventRecord[];

  /**
   * Gets a JSON representation of this event.
   */
  toJSON(): ToJSON<ThingEvent>;
}
