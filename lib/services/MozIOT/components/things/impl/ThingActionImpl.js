"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThingActionImpl {
    constructor(_def, _source) {
        this._def = _def;
        this._source = _source;
    }
    get id() {
        return this._def.id;
    }
    get label() {
        return this._def.label;
    }
    get description() {
        return this._def.description;
    }
    get requests() {
        const invocations = this._source
            .getThingInvocations(this._def.thingId)
            .filter(x => x.actionId === this._def.id);
        const requests = invocations.map(x => this._invocationToRequest(x));
        return Object.freeze(requests);
    }
    invoke(input) {
        const invocation = this._source.invokeAction(this._def.thingId, this._def.id, input);
        return this._invocationToRequest(invocation);
    }
    _invocationToRequest(invocation) {
        const source = this._source;
        const request = {
            id: invocation.id,
            timeRequested: invocation.timeRequested,
            status: "pending",
            cancel() {
                if (request.status === "cancelled") {
                    return false;
                }
                request.status = "cancelled";
                return source.cancelInvocation(invocation.id);
            }
        };
        return request;
    }
}
exports.ThingActionImpl = ThingActionImpl;
//# sourceMappingURL=ThingActionImpl.js.map