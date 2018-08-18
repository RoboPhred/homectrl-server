import { Identifier } from "microinject";

import createSymbol from "../../create-symbol";

import { ThingContext } from "../../contracts/ThingSource";

import {
  ThingActionContext,
  ThingActionRequestDef,
  ThingActionRequestContext
} from "../../contracts";

export const ActionAggregator: Identifier<ActionAggregator> = createSymbol(
  "ActionAggregator"
);
export interface ActionAggregator {
  /**
   * Determines what actions are supported on the given thing.
   * @param thingContext The context of the thing to fetch actions for.
   */
  getThingActions(
    thingContext: ThingContext
  ): ReadonlyArray<ThingActionContext>;

  /**
   * Gets an array of invocations pending for the given thing.
   * @param thingContext The context of the thing to fetch invocations for.
   */
  getThingActionRequests(
    thingContext: ThingContext
  ): ReadonlyArray<ThingActionRequestContext>;

  /**
   *
   * @param actionCOntext The context the action to invoke.
   * @param input The action input.
   */
  requestAction(
    actionContext: ThingActionContext,
    input: any
  ): ThingActionRequestContext;

  /**
   * Cancels a running action.
   * @param requestContext The context of the request to cancel.
   */
  cancelRequest(requestContext: ThingActionRequestContext): boolean;
}
