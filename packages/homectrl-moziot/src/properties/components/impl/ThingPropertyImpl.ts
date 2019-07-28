import { ThingProperty, ThingPropertyDef } from "../../types";

export class ThingPropertyImpl implements ThingProperty {
  private _lastValue: any;

  constructor(
    private _def: ThingPropertyDef,
    private _id: string,
    private _thingId: string,
    private _owner: object
  ) {
    this._def = { ..._def };
    this._lastValue = this._def.initialValue;
    this._def.values.subscribe({
      next: (value: any) => (this._lastValue = value)
    });
  }

  get ownerPlugin(): object {
    return this._owner;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._def.title;
  }

  get semanticType(): string | undefined {
    return this._def.semanticType;
  }

  get description(): string {
    return this._def.description;
  }

  get type(): "string" | "number" | "object" | "null" | "array" | "integer" {
    return this._def.type;
  }

  get unit(): string | undefined {
    return this._def.unit;
  }

  get enum(): string[] | undefined {
    return this._def.enum;
  }

  get minimum(): number | undefined {
    return this._def.minimum;
  }

  get maximum(): number | undefined {
    return this._def.maximum;
  }

  get multipleOf(): number | undefined {
    return this._def.multipleOf;
  }

  get readOnly(): boolean {
    return this._def.readOnly || false;
  }

  get value(): any {
    return this._lastValue;
  }

  setValue(value: any): void {
    this._def.onValueChangeRequested(this._thingId, this._id, value);
  }
}
