import { Identifier } from "microinject";
export declare const IdMapper: Identifier<IdMapper>;
export interface IdMapper {
    createId(name: string): string;
    retireId(id: string): boolean;
    [Symbol.iterator](): IterableIterator<string>;
    has(id: string): boolean;
}
