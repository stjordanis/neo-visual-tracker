/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var artifact_pb = require('./artifact_pb.js');
goog.object.extend(proto, artifact_pb);
goog.exportSymbol('proto.taxonomy.ttfprinter.ArtifactToPrint', null, global);
goog.exportSymbol('proto.taxonomy.ttfprinter.PrintResult', null, global);
goog.exportSymbol('proto.taxonomy.ttfprinter.PrintTTFOptions', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxonomy.ttfprinter.ArtifactToPrint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxonomy.ttfprinter.ArtifactToPrint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.taxonomy.ttfprinter.ArtifactToPrint.displayName = 'proto.taxonomy.ttfprinter.ArtifactToPrint';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.toObject = function(opt_includeInstance) {
  return proto.taxonomy.ttfprinter.ArtifactToPrint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxonomy.ttfprinter.ArtifactToPrint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    draft: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxonomy.ttfprinter.ArtifactToPrint}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxonomy.ttfprinter.ArtifactToPrint;
  return proto.taxonomy.ttfprinter.ArtifactToPrint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxonomy.ttfprinter.ArtifactToPrint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxonomy.ttfprinter.ArtifactToPrint}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.taxonomy.model.artifact.ArtifactType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDraft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxonomy.ttfprinter.ArtifactToPrint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxonomy.ttfprinter.ArtifactToPrint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDraft();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional taxonomy.model.artifact.ArtifactType type = 1;
 * @return {!proto.taxonomy.model.artifact.ArtifactType}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.getType = function() {
  return /** @type {!proto.taxonomy.model.artifact.ArtifactType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.taxonomy.model.artifact.ArtifactType} value */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool draft = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.getDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.taxonomy.ttfprinter.ArtifactToPrint.prototype.setDraft = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxonomy.ttfprinter.PrintTTFOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxonomy.ttfprinter.PrintTTFOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.taxonomy.ttfprinter.PrintTTFOptions.displayName = 'proto.taxonomy.ttfprinter.PrintTTFOptions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.taxonomy.ttfprinter.PrintTTFOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxonomy.ttfprinter.PrintTTFOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    book: jspb.Message.getFieldWithDefault(msg, 1, false),
    draft: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxonomy.ttfprinter.PrintTTFOptions}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxonomy.ttfprinter.PrintTTFOptions;
  return proto.taxonomy.ttfprinter.PrintTTFOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxonomy.ttfprinter.PrintTTFOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxonomy.ttfprinter.PrintTTFOptions}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBook(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDraft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxonomy.ttfprinter.PrintTTFOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxonomy.ttfprinter.PrintTTFOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBook();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDraft();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool book = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.getBook = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.setBook = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool draft = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.getDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.taxonomy.ttfprinter.PrintTTFOptions.prototype.setDraft = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.taxonomy.ttfprinter.PrintResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.taxonomy.ttfprinter.PrintResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.taxonomy.ttfprinter.PrintResult.displayName = 'proto.taxonomy.ttfprinter.PrintResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.taxonomy.ttfprinter.PrintResult.prototype.toObject = function(opt_includeInstance) {
  return proto.taxonomy.ttfprinter.PrintResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.taxonomy.ttfprinter.PrintResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.PrintResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    openXmlDocument: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.taxonomy.ttfprinter.PrintResult}
 */
proto.taxonomy.ttfprinter.PrintResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.taxonomy.ttfprinter.PrintResult;
  return proto.taxonomy.ttfprinter.PrintResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.taxonomy.ttfprinter.PrintResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.taxonomy.ttfprinter.PrintResult}
 */
proto.taxonomy.ttfprinter.PrintResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenXmlDocument(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.taxonomy.ttfprinter.PrintResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.taxonomy.ttfprinter.PrintResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.taxonomy.ttfprinter.PrintResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.taxonomy.ttfprinter.PrintResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenXmlDocument();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string open_xml_document = 1;
 * @return {string}
 */
proto.taxonomy.ttfprinter.PrintResult.prototype.getOpenXmlDocument = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.taxonomy.ttfprinter.PrintResult.prototype.setOpenXmlDocument = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.taxonomy.ttfprinter);
