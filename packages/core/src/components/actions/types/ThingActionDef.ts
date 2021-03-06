import { JSONSchema6 } from "json-schema";
import { Observable } from "rxjs";
import { TypedDataSchema } from "@wutwot/td";

import { DeepImmutableObject, makeReadOnlyDeep } from "../../../immutable";

import { makeValidator, makeValidateOrThrow } from "../../json-schema";
import { ThingActionRequestUpdate } from "../../action-requests";
import { InteractionDef, interactionDefSchema } from "../../interactions";

/**
 * Defines the information required to create a {@link ThingAction}
 */
export interface ThingActionDef extends InteractionDef {
  /**
   * JSON Schema describing the input this action takes.
   */
  readonly input?: DeepImmutableObject<TypedDataSchema>;

  /**
   * JSON Schema describing the output this action returns.
   */
  readonly output?: DeepImmutableObject<TypedDataSchema>;

  /**
   * A callback to handle the invocation of this action.
   * @param thingId The ID of the thing this request is being invoked for.
   * @param actionId The ID of the action this request is being invoked for.
   * @param input The input provided with the request invocation.
   * @returns An rxjs observable describing the state transitions of the request's lifecycle.
   */
  onActionInvocationRequested(
    thingId: string,
    actionId: string,
    input: any,
  ): Observable<ThingActionRequestUpdate>;
}

/**
 * JSON Schema describing a {@link ThingActionDef}
 */
export const actionDefSchema = makeReadOnlyDeep<JSONSchema6>({
  type: "object",
  properties: {
    input: {
      type: "object",
      // TODO: This should reference dataSchemaSchema
    },
    output: {
      type: "object",
      // TODO: This should reference dataSchemaSchema
    },
  },
  required: ["pluginLocalId"],
});

/**
 * A validator function for a {@link ThingActionDef} that returns
 * details about the validation.
 */
export const validateActionDef = makeValidator(
  interactionDefSchema,
  actionDefSchema,
);

/**
 * A validator function for a {@link ThingActionDef} that throws an error
 * if the validation fails.
 */
export const validateActionDefOrThrow = makeValidateOrThrow(validateActionDef);
