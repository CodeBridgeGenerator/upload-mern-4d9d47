module.exports = function (app) {
  const modelName = "login_history";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      loginTime: { type: Date, default: Date.now },
      device: { type: String },
      ip: { type: String },
      browser: { type: String },
      userAgent: { type: String },
      logoutTime: { type: Date },
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
