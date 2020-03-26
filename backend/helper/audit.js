const mongoose = require("mongoose");

class MongooseAudit {
  constructor(modelName, model) {
    const schema = mongoose.Schema(model);
    this.schema = mongoose.model(modelName, schema);
  }

  updateOneAudit(condition, obj) {
    obj.user_created = 1;
    obj.date_created = '2018-29-02';
    return this.schema.updateOne(condition, obj)
  }

  saveAudit(schemaMod) {
    schemaMod.user_created = 1;
    schemaMod.date_created = '2018-29-02';
    return schemaMod.save()
  }
}

module.exports = MongooseAudit;
