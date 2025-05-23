module.exports = function (app) {
  const modelName = "audits";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      serviceName: { type: String, required: true },
      action: { type: String, required: true },
      details: { type: Schema.Types.Mixed },
      createdBy: { type: String, required: true },
      method: { type: String, required: true },
      updatedBy: { type: String },
    },
    {
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
