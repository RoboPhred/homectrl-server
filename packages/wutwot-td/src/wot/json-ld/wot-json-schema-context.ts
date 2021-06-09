// https://github.com/w3c/wot-thing-description/pull/1169
// https://github.com/w3c/wot-thing-description/blob/da6956a5e92af5ec4769ef4b748d075241d5555b/context/json-schema-context.jsonld
export default {
  td: "https://www.w3.org/2019/wot/td#",
  jsonschema: "https://www.w3.org/2019/wot/json-schema#",
  wotsec: "https://www.w3.org/2019/wot/security#",
  hctl: "https://www.w3.org/2019/wot/hypermedia#",
  dct: "http://purl.org/dc/terms/",
  schema: "http://schema.org/",
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  // Added missing xsd prefix
  xsd: "http://www.w3.org/2001/XMLSchema#",
  "@vocab": "https://www.w3.org/2019/wot/json-schema#",
  DataSchema: {
    "@id": "jsonschema:DataSchema",
  },
  readOnly: {
    "@id": "jsonschema:readOnly",
    "@type": "xsd:boolean",
  },
  writeOnly: {
    "@id": "jsonschema:writeOnly",
    "@type": "xsd:boolean",
  },
  exclusiveMaximum: {
    "@id": "jsonschema:exclusiveMaximum",
  },
  exclusiveMinimum: {
    "@id": "jsonschema:exclusiveMinimum",
  },
  maximum: {
    "@id": "jsonschema:maximum",
  },
  minimum: {
    "@id": "jsonschema:minimum",
  },
  maxItems: {
    "@id": "jsonschema:maxItems",
    "@type": "xsd:unsignedInt",
  },
  minItems: {
    "@id": "jsonschema:minItems",
    "@type": "xsd:unsignedInt",
  },
  contentEncoding: {
    "@id": "jsonschema:contentEncoding",
    "@type": "xsd:unsignedInt",
  },
  minLength: {
    "@id": "jsonschema:minLength",
    "@type": "xsd:unsignedInt",
  },
  maxLength: {
    "@id": "jsonschema:maxLength",
    "@type": "xsd:unsignedInt",
  },
  contentMediaType: {
    "@id": "jsonschema:contentMediaType",
    "@type": "xsd:string",
  },
  items: {
    "@id": "jsonschema:items",
    "@type": "@id",
  },
  required: {
    "@id": "jsonschema:required",
    "@type": "xsd:string",
    "@container": "@set",
  },
  enum: {
    "@id": "jsonschema:enum",
    "@container": "@set",
  },
  const: {
    "@id": "jsonschema:const",
  },
  multipleOf: {
    "@id": "jsonschema:multipleOf",
  },
  format: {
    "@id": "jsonschema:format",
  },
  oneOf: {
    "@id": "jsonschema:oneOf",
    "@container": "@set",
  },
  allOf: {
    "@id": "jsonschema:allOf",
    "@container": "@set",
  },
  anyOf: {
    "@id": "jsonschema:anyOf",
    "@container": "@set",
  },
  type: {
    "@id": "rdf:type",
    "@type": "@vocab",
  },
  title: {
    "@id": "dct:title",
  },
  titles: {
    "@id": "dct:title",
    "@container": "@language",
  },
  description: {
    "@id": "dct:description",
  },
  descriptions: {
    "@id": "dct:description",
    "@container": "@language",
  },
  object: "jsonschema:ObjectSchema",
  array: "jsonschema:ArraySchema",
  boolean: "jsonschema:BooleanSchema",
  string: "jsonschema:StringSchema",
  number: "jsonschema:NumberSchema",
  integer: "jsonschema:IntegerSchema",
  null: "jsonschema:NullSchema",
  propertyName: "jsonschema:propertyName",
  properties: {
    "@id": "jsonschema:properties",
    "@container": "@index",
    "@index": "propertyName",
  },
  unit: {
    "@id": "schema:unitCode",
    "@type": "@vocab",
  },
};
