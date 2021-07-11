// Source: https://github.com/w3c/wot-thing-description/blob/main/context/td-context-1.1.jsonld @ 8dda72f
export default {
  td: "https://www.w3.org/2019/wot/td#",
  jsonschema: "https://www.w3.org/2019/wot/json-schema#",
  wotsec: "https://www.w3.org/2019/wot/security#",
  hctl: "https://www.w3.org/2019/wot/hypermedia#",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  xsd: "http://www.w3.org/2001/XMLSchema#",
  dct: "http://purl.org/dc/terms/",
  htv: "http://www.w3.org/2011/http#",
  tm: "https://www.w3.org/2019/wot/tm#",
  "@vocab": "https://www.w3.org/2019/wot/td#",
  license: {
    "@id": "http://purl.org/dc/terms/license",
  },
  id: "@id",
  properties: {
    "@id": "td:hasPropertyAffordance",
    "@type": "@id",
    "@container": "@index",
    "@index": "name",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "name",
        "@context": {
          properties: {
            "@id": "jsonschema:properties",
            "@container": "@index",
            "@index": "propertyName",
          },
        },
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  actions: {
    "@id": "td:hasActionAffordance",
    "@type": "@id",
    "@container": "@index",
    "@index": "name",
  },
  events: {
    "@id": "td:hasEventAffordance",
    "@type": "@id",
    "@container": "@index",
    "@index": "name",
  },
  security: {
    "@id": "td:hasSecurityConfiguration",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/security#",
      in: {
        "@id": "wotsec:in",
      },
      name: {
        "@id": "wotsec:name",
      },
      authorization: {
        "@id": "wotsec:authorization",
        "@type": "@id",
      },
      token: {
        "@id": "wotsec:token",
        "@type": "@id",
      },
      refresh: {
        "@id": "wotsec:refresh",
        "@type": "@id",
      },
      proxy: {
        "@id": "wotsec:proxy",
        "@type": "@id",
      },
      scopes: {
        "@id": "wotsec:scopes",
      },
      flow: {
        "@id": "wotsec:flow",
      },
      qop: {
        "@id": "wotsec:qop",
      },
      alg: {
        "@id": "wotsec:alg",
      },
      format: {
        "@id": "wotsec:format",
      },
      identity: {
        "@id": "wotsec:identity",
      },
      allOf: {
        "@id": "wotsec:allOf",
      },
      oneOf: {
        "@id": "wotsec:oneOf",
      },
      scheme: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      description: {
        "@id": "dct:description",
      },
      descriptions: {
        "@id": "dct:description",
        "@container": "@language",
      },
      nosec: "wotsec:NoSecurityScheme",
      combo: "wotsec:ComboSecurityScheme",
      basic: "wotsec:BasicSecurityScheme",
      digest: "wotsec:DigestSecurityScheme",
      apikey: "wotsec:APIKeySecurityScheme",
      bearer: "wotsec:BearerSecurityScheme",
      cert: "wotsec:CertSecurityScheme",
      psk: "wotsec:PSKSecurityScheme",
      public: "wotsec:PublicSecurityScheme",
      pop: "wotsec:PoPSecurityScheme",
      oauth2: "wotsec:OAuth2SecurityScheme",
      uriVariables: "td:uriVariables",
    },
  },
  schema: {
    "@id": "hctl:hasAdditionalOutputSchema",
    "@type": "@id",
  },
  securityDefinitions: {
    "@id": "td:securityDefinitions",
    "@type": "@id",
    "@container": "@index",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/security#",
      in: {
        "@id": "wotsec:in",
      },
      name: {
        "@id": "wotsec:name",
      },
      authorization: {
        "@id": "wotsec:authorization",
        "@type": "@id",
      },
      token: {
        "@id": "wotsec:token",
        "@type": "@id",
      },
      refresh: {
        "@id": "wotsec:refresh",
        "@type": "@id",
      },
      proxy: {
        "@id": "wotsec:proxy",
        "@type": "@id",
      },
      scopes: {
        "@id": "wotsec:scopes",
      },
      flow: {
        "@id": "wotsec:flow",
      },
      qop: {
        "@id": "wotsec:qop",
      },
      alg: {
        "@id": "wotsec:alg",
      },
      format: {
        "@id": "wotsec:format",
      },
      identity: {
        "@id": "wotsec:identity",
      },
      allOf: {
        "@id": "wotsec:allOf",
      },
      oneOf: {
        "@id": "wotsec:oneOf",
      },
      scheme: {
        "@id": "rdf:type",
        "@type": "@vocab",
      },
      description: {
        "@id": "dct:description",
      },
      descriptions: {
        "@id": "dct:description",
        "@container": "@language",
      },
      nosec: "wotsec:NoSecurityScheme",
      combo: "wotsec:ComboSecurityScheme",
      basic: "wotsec:BasicSecurityScheme",
      digest: "wotsec:DigestSecurityScheme",
      apikey: "wotsec:APIKeySecurityScheme",
      bearer: "wotsec:BearerSecurityScheme",
      cert: "wotsec:CertSecurityScheme",
      psk: "wotsec:PSKSecurityScheme",
      public: "wotsec:PublicSecurityScheme",
      pop: "wotsec:PoPSecurityScheme",
      oauth2: "wotsec:OAuth2SecurityScheme",
      uriVariables: "td:uriVariables",
    },
  },
  schemaDefinitions: {
    "@id": "td:schemaDefinitions",
    "@type": "@id",
    "@container": "@index",
  },
  Thing: {
    "@id": "td:Thing",
  },
  EventAffordance: {
    "@id": "td:EventAffordance",
  },
  name: {
    "@id": "td:name",
  },
  profile: {
    "@id": "td:followsProfile",
  },
  created: {
    "@id": "dct:created",
    "@type": "xsd:dateTime",
  },
  modified: {
    "@id": "dct:modified",
    "@type": "xsd:dateTime",
  },
  observable: {
    "@id": "td:isObservable",
  },
  VersionInfo: {
    "@id": "td:VersionInfo",
  },
  PropertyAffordance: {
    "@id": "td:PropertyAffordance",
  },
  forms: {
    "@id": "td:hasForm",
    "@type": "@id",
    "@container": "@set",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      rdfs: "http://www.w3.org/2000/01/rdf-schema#",
      xsd: "http://www.w3.org/2001/XMLSchema#",
      "@vocab": "https://www.w3.org/2019/wot/hypermedia#",
      Link: {
        "@id": "hctl:Link",
      },
      Form: {
        "@id": "hctl:Form",
      },
      scopes: {
        "@id": "wotsec:scopes",
      },
      security: {
        "@id": "td:hasSecurityConfiguration",
        "@type": "@id",
      },
      op: {
        "@id": "hctl:hasOperationType",
        "@type": "@vocab",
      },
      readproperty: "td:readProperty",
      writeproperty: "td:writeProperty",
      observeproperty: "td:observeProperty",
      observeallproperties: "td:observeAllProperties",
      unobserveproperty: "td:unobserveProperty",
      unobserveallproperties: "td:unobserveAllProperties",
      invokeaction: "td:invokeAction",
      subscribeevent: "td:subscribeEvent",
      unsubscribeevent: "td:unsubscribeEvent",
      readallproperties: "td:readAllProperties",
      writeallproperties: "td:writeAllProperties",
      readmultipleproperties: "td:readMultipleProperties",
      writemultipleproperties: "td:writeMultipleProperties",
      subprotocol: {
        "@id": "hctl:forSubProtocol",
      },
      contentType: {
        "@id": "hctl:forContentType",
      },
      contentCoding: {
        "@id": "hctl:forContentCoding",
      },
      anchor: {
        "@id": "hctl:hasAnchor",
        "@type": "@id",
      },
      sizes: {
        "@id": "hctl:hasSizes",
        "@type": "@id",
      },
      href: {
        "@id": "hctl:hasTarget",
        "@type": "@id",
      },
      rel: {
        "@id": "hctl:hasRelationType",
        "@type": "@vocab",
      },
      type: {
        "@id": "hctl:hintsAtMediaType",
      },
      response: {
        "@id": "hctl:returns",
      },
      additionalResponses: {
        "@id": "hctl:additionalReturns",
      },
      schema: {
        "@id": "hctl:hasAdditionalOutputSchema",
        "@type": "@id",
      },
      success: {
        "@id": "hctl:isSuccess",
      },
    },
  },
  version: {
    "@id": "td:versionInfo",
    "@type": "@id",
  },
  links: {
    "@id": "td:hasLink",
    "@type": "@id",
    "@container": "@set",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      rdfs: "http://www.w3.org/2000/01/rdf-schema#",
      xsd: "http://www.w3.org/2001/XMLSchema#",
      "@vocab": "https://www.w3.org/2019/wot/hypermedia#",
      Link: {
        "@id": "hctl:Link",
      },
      Form: {
        "@id": "hctl:Form",
      },
      scopes: {
        "@id": "wotsec:scopes",
      },
      security: {
        "@id": "td:hasSecurityConfiguration",
        "@type": "@id",
      },
      op: {
        "@id": "hctl:hasOperationType",
        "@type": "@vocab",
      },
      readproperty: "td:readProperty",
      writeproperty: "td:writeProperty",
      observeproperty: "td:observeProperty",
      observeallproperties: "td:observeAllProperties",
      unobserveproperty: "td:unobserveProperty",
      unobserveallproperties: "td:unobserveAllProperties",
      invokeaction: "td:invokeAction",
      subscribeevent: "td:subscribeEvent",
      unsubscribeevent: "td:unsubscribeEvent",
      readallproperties: "td:readAllProperties",
      writeallproperties: "td:writeAllProperties",
      readmultipleproperties: "td:readMultipleProperties",
      writemultipleproperties: "td:writeMultipleProperties",
      subprotocol: {
        "@id": "hctl:forSubProtocol",
      },
      contentType: {
        "@id": "hctl:forContentType",
      },
      contentCoding: {
        "@id": "hctl:forContentCoding",
      },
      anchor: {
        "@id": "hctl:hasAnchor",
        "@type": "@id",
      },
      sizes: {
        "@id": "hctl:hasSizes",
        "@type": "@id",
      },
      href: {
        "@id": "hctl:hasTarget",
        "@type": "@id",
      },
      rel: {
        "@id": "hctl:hasRelationType",
        "@type": "@vocab",
      },
      type: {
        "@id": "hctl:hintsAtMediaType",
      },
      response: {
        "@id": "hctl:returns",
      },
      additionalResponses: {
        "@id": "hctl:additionalReturns",
      },
      schema: {
        "@id": "hctl:hasAdditionalOutputSchema",
        "@type": "@id",
      },
      success: {
        "@id": "hctl:isSuccess",
      },
    },
  },
  uriVariables: {
    "@id": "td:hasUriTemplateSchema",
    "@type": "@id",
    "@container": "@index",
    "@index": "name",
  },
  safe: {
    "@id": "td:isSafe",
  },
  idempotent: {
    "@id": "td:isIdempotent",
  },
  instance: {
    "@id": "td:instance",
  },
  model: {
    "@id": "td:model",
  },
  InteractionAffordance: {
    "@id": "td:InteractionAffordance",
  },
  ActionAffordance: {
    "@id": "td:ActionAffordance",
  },
  input: {
    "@id": "td:hasInputSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "propertyName",
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  output: {
    "@id": "td:hasOutputSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "propertyName",
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  subscription: {
    "@id": "td:hasSubscriptionSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "propertyName",
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  data: {
    "@id": "td:hasNotificationSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "propertyName",
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  cancellation: {
    "@id": "td:hasCancellationSchema",
    "@type": "@id",
    "@context": {
      td: "https://www.w3.org/2019/wot/td#",
      jsonschema: "https://www.w3.org/2019/wot/json-schema#",
      wotsec: "https://www.w3.org/2019/wot/security#",
      hctl: "https://www.w3.org/2019/wot/hypermedia#",
      dct: "http://purl.org/dc/terms/",
      schema: "http://schema.org/",
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      "@vocab": "https://www.w3.org/2019/wot/json-schema#",
      DataSchema: {
        "@id": "jsonschema:DataSchema",
      },
      readOnly: {
        "@id": "jsonschema:readOnly",
      },
      writeOnly: {
        "@id": "jsonschema:writeOnly",
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
      },
      minItems: {
        "@id": "jsonschema:minItems",
      },
      contentEncoding: {
        "@id": "jsonschema:contentEncoding",
      },
      minLength: {
        "@id": "jsonschema:minLength",
      },
      maxLength: {
        "@id": "jsonschema:maxLength",
      },
      pattern: {
        "@id": "jsonschema:pattern",
      },
      contentMediaType: {
        "@id": "jsonschema:contentMediaType",
      },
      items: {
        "@id": "jsonschema:items",
        "@type": "@id",
      },
      required: {
        "@id": "jsonschema:required",
        "@container": "@set",
      },
      enum: {
        "@id": "jsonschema:enum",
        "@container": "@set",
      },
      const: {
        "@id": "jsonschema:const",
      },
      default: {
        "@id": "jsonschema:default",
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
      properties: {
        "@id": "jsonschema:properties",
        "@container": "@index",
        "@index": "propertyName",
      },
      propertyName: {
        "@id": "jsonschema:propertyName",
      },
      unit: {
        "@id": "schema:unitCode",
        "@type": "@vocab",
      },
    },
  },
  description: {
    "@id": "dct:description",
  },
  descriptions: {
    "@id": "dct:description",
    "@container": "@language",
  },
  title: {
    "@id": "dct:title",
  },
  titles: {
    "@id": "dct:title",
    "@container": "@language",
  },
  support: {
    "@id": "td:supportContact",
  },
  base: {
    "@id": "td:baseURI",
  },
  "@version": 1.1,
};