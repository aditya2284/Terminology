// source: terminology/src/protos/valueset.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var terminology_src_protos_code_pb = require('../../../terminology/src/protos/code_pb.js');
goog.object.extend(proto, terminology_src_protos_code_pb);
goog.exportSymbol('proto.valuesets.AllValueSetinfoProvide', null, global);
goog.exportSymbol('proto.valuesets.ValueSetToCodes', null, global);
goog.exportSymbol('proto.valuesets.ValueSetURIVersionProvide', null, global);
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
proto.valuesets.ValueSetURIVersionProvide = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.valuesets.ValueSetURIVersionProvide, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.valuesets.ValueSetURIVersionProvide.displayName = 'proto.valuesets.ValueSetURIVersionProvide';
}
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
proto.valuesets.AllValueSetinfoProvide = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.valuesets.AllValueSetinfoProvide.repeatedFields_, null);
};
goog.inherits(proto.valuesets.AllValueSetinfoProvide, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.valuesets.AllValueSetinfoProvide.displayName = 'proto.valuesets.AllValueSetinfoProvide';
}
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
proto.valuesets.ValueSetToCodes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.valuesets.ValueSetToCodes.repeatedFields_, null);
};
goog.inherits(proto.valuesets.ValueSetToCodes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.valuesets.ValueSetToCodes.displayName = 'proto.valuesets.ValueSetToCodes';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.valuesets.ValueSetURIVersionProvide.prototype.toObject = function(opt_includeInstance) {
  return proto.valuesets.ValueSetURIVersionProvide.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.valuesets.ValueSetURIVersionProvide} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.ValueSetURIVersionProvide.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueseturi: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionnumber: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.valuesets.ValueSetURIVersionProvide}
 */
proto.valuesets.ValueSetURIVersionProvide.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.valuesets.ValueSetURIVersionProvide;
  return proto.valuesets.ValueSetURIVersionProvide.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.valuesets.ValueSetURIVersionProvide} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.valuesets.ValueSetURIVersionProvide}
 */
proto.valuesets.ValueSetURIVersionProvide.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueseturi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionnumber(value);
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
proto.valuesets.ValueSetURIVersionProvide.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.valuesets.ValueSetURIVersionProvide.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.valuesets.ValueSetURIVersionProvide} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.ValueSetURIVersionProvide.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueseturi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionnumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string valuesetURI = 1;
 * @return {string}
 */
proto.valuesets.ValueSetURIVersionProvide.prototype.getValueseturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.ValueSetURIVersionProvide} returns this
 */
proto.valuesets.ValueSetURIVersionProvide.prototype.setValueseturi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string versionNumber = 2;
 * @return {string}
 */
proto.valuesets.ValueSetURIVersionProvide.prototype.getVersionnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.ValueSetURIVersionProvide} returns this
 */
proto.valuesets.ValueSetURIVersionProvide.prototype.setVersionnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.valuesets.AllValueSetinfoProvide.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.toObject = function(opt_includeInstance) {
  return proto.valuesets.AllValueSetinfoProvide.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.valuesets.AllValueSetinfoProvide} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.AllValueSetinfoProvide.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueseturi: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionnumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    codesList: jspb.Message.toObjectList(msg.getCodesList(),
    terminology_src_protos_code_pb.InfoProvide.toObject, includeInstance)
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
 * @return {!proto.valuesets.AllValueSetinfoProvide}
 */
proto.valuesets.AllValueSetinfoProvide.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.valuesets.AllValueSetinfoProvide;
  return proto.valuesets.AllValueSetinfoProvide.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.valuesets.AllValueSetinfoProvide} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.valuesets.AllValueSetinfoProvide}
 */
proto.valuesets.AllValueSetinfoProvide.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueseturi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionnumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new terminology_src_protos_code_pb.InfoProvide;
      reader.readMessage(value,terminology_src_protos_code_pb.InfoProvide.deserializeBinaryFromReader);
      msg.addCodes(value);
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
proto.valuesets.AllValueSetinfoProvide.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.valuesets.AllValueSetinfoProvide.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.valuesets.AllValueSetinfoProvide} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.AllValueSetinfoProvide.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueseturi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionnumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      terminology_src_protos_code_pb.InfoProvide.serializeBinaryToWriter
    );
  }
};


/**
 * optional string valuesetURI = 1;
 * @return {string}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.getValueseturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
 */
proto.valuesets.AllValueSetinfoProvide.prototype.setValueseturi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string versionNumber = 2;
 * @return {string}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.getVersionnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
 */
proto.valuesets.AllValueSetinfoProvide.prototype.setVersionnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
 */
proto.valuesets.AllValueSetinfoProvide.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
 */
proto.valuesets.AllValueSetinfoProvide.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated codes.InfoProvide codes = 5;
 * @return {!Array<!proto.codes.InfoProvide>}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.getCodesList = function() {
  return /** @type{!Array<!proto.codes.InfoProvide>} */ (
    jspb.Message.getRepeatedWrapperField(this, terminology_src_protos_code_pb.InfoProvide, 5));
};


/**
 * @param {!Array<!proto.codes.InfoProvide>} value
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
*/
proto.valuesets.AllValueSetinfoProvide.prototype.setCodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.codes.InfoProvide=} opt_value
 * @param {number=} opt_index
 * @return {!proto.codes.InfoProvide}
 */
proto.valuesets.AllValueSetinfoProvide.prototype.addCodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.codes.InfoProvide, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.valuesets.AllValueSetinfoProvide} returns this
 */
proto.valuesets.AllValueSetinfoProvide.prototype.clearCodesList = function() {
  return this.setCodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.valuesets.ValueSetToCodes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.valuesets.ValueSetToCodes.prototype.toObject = function(opt_includeInstance) {
  return proto.valuesets.ValueSetToCodes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.valuesets.ValueSetToCodes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.ValueSetToCodes.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueseturi: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionnumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    codesList: jspb.Message.toObjectList(msg.getCodesList(),
    terminology_src_protos_code_pb.InfoProvide.toObject, includeInstance)
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
 * @return {!proto.valuesets.ValueSetToCodes}
 */
proto.valuesets.ValueSetToCodes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.valuesets.ValueSetToCodes;
  return proto.valuesets.ValueSetToCodes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.valuesets.ValueSetToCodes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.valuesets.ValueSetToCodes}
 */
proto.valuesets.ValueSetToCodes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValueseturi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionnumber(value);
      break;
    case 3:
      var value = new terminology_src_protos_code_pb.InfoProvide;
      reader.readMessage(value,terminology_src_protos_code_pb.InfoProvide.deserializeBinaryFromReader);
      msg.addCodes(value);
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
proto.valuesets.ValueSetToCodes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.valuesets.ValueSetToCodes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.valuesets.ValueSetToCodes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.valuesets.ValueSetToCodes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueseturi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionnumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      terminology_src_protos_code_pb.InfoProvide.serializeBinaryToWriter
    );
  }
};


/**
 * optional string valuesetURI = 1;
 * @return {string}
 */
proto.valuesets.ValueSetToCodes.prototype.getValueseturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.ValueSetToCodes} returns this
 */
proto.valuesets.ValueSetToCodes.prototype.setValueseturi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string versionNumber = 2;
 * @return {string}
 */
proto.valuesets.ValueSetToCodes.prototype.getVersionnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.valuesets.ValueSetToCodes} returns this
 */
proto.valuesets.ValueSetToCodes.prototype.setVersionnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated codes.InfoProvide codes = 3;
 * @return {!Array<!proto.codes.InfoProvide>}
 */
proto.valuesets.ValueSetToCodes.prototype.getCodesList = function() {
  return /** @type{!Array<!proto.codes.InfoProvide>} */ (
    jspb.Message.getRepeatedWrapperField(this, terminology_src_protos_code_pb.InfoProvide, 3));
};


/**
 * @param {!Array<!proto.codes.InfoProvide>} value
 * @return {!proto.valuesets.ValueSetToCodes} returns this
*/
proto.valuesets.ValueSetToCodes.prototype.setCodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.codes.InfoProvide=} opt_value
 * @param {number=} opt_index
 * @return {!proto.codes.InfoProvide}
 */
proto.valuesets.ValueSetToCodes.prototype.addCodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.codes.InfoProvide, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.valuesets.ValueSetToCodes} returns this
 */
proto.valuesets.ValueSetToCodes.prototype.clearCodesList = function() {
  return this.setCodesList([]);
};


goog.object.extend(exports, proto.valuesets);
