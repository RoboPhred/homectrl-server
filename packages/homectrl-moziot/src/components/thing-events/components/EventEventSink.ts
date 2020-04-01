import { Identifier } from "microinject";

import createSymbol from "../../../create-symbol";

import { ThingEvent } from "../types";

export const EventEventSink: Identifier<EventEventSink> = createSymbol(
  "EventEventSink"
);
export interface EventEventSink {
  onEventAdded(thingId: string, eventId: string, event: ThingEvent): void;
  onEventRemoved(thingId: string, eventId: string): void;
}
