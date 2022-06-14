// source: protos/agent.proto
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

goog.provide('proto.protos.ListManifestsResponse');
goog.provide('proto.protos.ListManifestsResponse.Manifest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.protos.ListManifestsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protos.ListManifestsResponse.repeatedFields_, null);
};
goog.inherits(proto.protos.ListManifestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ListManifestsResponse.displayName = 'proto.protos.ListManifestsResponse';
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
proto.protos.ListManifestsResponse.Manifest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protos.ListManifestsResponse.Manifest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protos.ListManifestsResponse.Manifest.displayName = 'proto.protos.ListManifestsResponse.Manifest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protos.ListManifestsResponse.repeatedFields_ = [1];



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
proto.protos.ListManifestsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ListManifestsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ListManifestsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ListManifestsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    manifestsList: jspb.Message.toObjectList(msg.getManifestsList(),
    proto.protos.ListManifestsResponse.Manifest.toObject, includeInstance)
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
 * @return {!proto.protos.ListManifestsResponse}
 */
proto.protos.ListManifestsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ListManifestsResponse;
  return proto.protos.ListManifestsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ListManifestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ListManifestsResponse}
 */
proto.protos.ListManifestsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protos.ListManifestsResponse.Manifest;
      reader.readMessage(value,proto.protos.ListManifestsResponse.Manifest.deserializeBinaryFromReader);
      msg.addManifests(value);
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
proto.protos.ListManifestsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ListManifestsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ListManifestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ListManifestsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getManifestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protos.ListManifestsResponse.Manifest.serializeBinaryToWriter
    );
  }
};





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
proto.protos.ListManifestsResponse.Manifest.prototype.toObject = function(opt_includeInstance) {
  return proto.protos.ListManifestsResponse.Manifest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protos.ListManifestsResponse.Manifest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ListManifestsResponse.Manifest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    organizationName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    datasetName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    datasetId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.protos.ListManifestsResponse.Manifest}
 */
proto.protos.ListManifestsResponse.Manifest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protos.ListManifestsResponse.Manifest;
  return proto.protos.ListManifestsResponse.Manifest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protos.ListManifestsResponse.Manifest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protos.ListManifestsResponse.Manifest}
 */
proto.protos.ListManifestsResponse.Manifest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.protos.ListManifestsResponse.Manifest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protos.ListManifestsResponse.Manifest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protos.ListManifestsResponse.Manifest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protos.ListManifestsResponse.Manifest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrganizationName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDatasetName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_name = 2;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string organization_name = 4;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getOrganizationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setOrganizationName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string organization_id = 5;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string dataset_name = 6;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setDatasetName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string dataset_id = 7;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string status = 8;
 * @return {string}
 */
proto.protos.ListManifestsResponse.Manifest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.protos.ListManifestsResponse.Manifest} returns this
 */
proto.protos.ListManifestsResponse.Manifest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Manifest manifests = 1;
 * @return {!Array<!proto.protos.ListManifestsResponse.Manifest>}
 */
proto.protos.ListManifestsResponse.prototype.getManifestsList = function() {
  return /** @type{!Array<!proto.protos.ListManifestsResponse.Manifest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protos.ListManifestsResponse.Manifest, 1));
};


/**
 * @param {!Array<!proto.protos.ListManifestsResponse.Manifest>} value
 * @return {!proto.protos.ListManifestsResponse} returns this
*/
proto.protos.ListManifestsResponse.prototype.setManifestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protos.ListManifestsResponse.Manifest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protos.ListManifestsResponse.Manifest}
 */
proto.protos.ListManifestsResponse.prototype.addManifests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protos.ListManifestsResponse.Manifest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protos.ListManifestsResponse} returns this
 */
proto.protos.ListManifestsResponse.prototype.clearManifestsList = function() {
  return this.setManifestsList([]);
};


