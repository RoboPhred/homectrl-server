"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const v4_1 = __importDefault(require("uuid/v4"));
const testActionDef = Object.freeze({
    id: "thing-test-action",
    label: "Do That Thing",
    description: "A test action",
    input: { type: "null" }
});
class TestAdapterImpl extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.id = "test-adapter";
        this._defs = [];
        this._invocations = [];
    }
    get things() {
        return Object.freeze([...this._defs]);
    }
    get invocations() {
        return Object.freeze([...this._invocations]);
    }
    getActions(thingId) {
        if (!this._defs.find(x => x.id === thingId)) {
            return [];
        }
        return Object.freeze([testActionDef]);
    }
    invokeAction(thingId, actionId, input) {
        const invocation = Object.freeze({
            id: v4_1.default(),
            thingId,
            actionId,
            timeRequested: new Date().toISOString()
        });
        console.log("Test action starting on", thingId, "=>", invocation);
        const startE = Object.freeze({
            thingId,
            action: testActionDef,
            invocation
        });
        this.emit("action.start", startE);
        setTimeout(() => {
            console.log("Test action ending on", thingId, "=>", invocation);
            const endE = Object.freeze(Object.assign({}, startE, { canceled: false }));
            const index = this._invocations.indexOf(invocation);
            if (index > -1) {
                this._invocations.splice(index, 1);
                this.emit("action.end", endE);
            }
        }, 10 * 1000);
        return invocation;
    }
    cancelAction() {
        return false;
    }
    addTestThing(def) {
        if (!def) {
            def = {};
        }
        const id = def.id ||
            `test-device-${Math.random()
                .toString()
                .substr(2)}`;
        const defaultName = def.defaultName || `Named: ${id}`;
        const finalDef = {
            id,
            type: "test-thing",
            description: "A test thing",
            defaultName
        };
        Object.freeze(finalDef);
        this._defs.push(finalDef);
        this.emit("thing.add", { thing: finalDef });
    }
    removeTestThing(id) {
        if (this._defs.length === 0) {
            return;
        }
        if (id == null) {
            id = this._defs[0].id;
        }
        const index = this._defs.findIndex(x => x.id === id);
        if (index === -1) {
            return;
        }
        const def = this._defs[index];
        this._defs.splice(index, 1);
        this.emit("thing.remove", { thing: def });
    }
}
exports.TestAdapterImpl = TestAdapterImpl;
//# sourceMappingURL=TestAdapterImpl.js.map