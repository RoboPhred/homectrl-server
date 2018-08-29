import { Identifier } from "microinject";
import { ThingActionContext } from "../contracts";
export declare const ActionRegistry: Identifier<ActionRegistry>;
export interface ActionRegistry {
    readonly actions: ReadonlyArray<ThingActionContext>;
    get(thingId: string, actionId: string): ThingActionContext | undefined;
    on(event: "action.add", handler: (e: ActionAddedEventArgs) => void): this;
    on(event: "action.remove", handler: (e: ActionRemovedEventArgs) => void): this;
}
export interface ActionAddedEventArgs {
    thingId: string;
    actionId: string;
    action: ThingActionContext;
}
export interface ActionRemovedEventArgs {
    thingId: string;
    actionId: string;
}