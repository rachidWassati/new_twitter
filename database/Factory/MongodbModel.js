const { Schema, model } = require('mongoose');

class MongoModel extends BaseModel {
  constructor(database) {
    super(database);

    this.MongoDataModel = model('MongoData', new Schema({
      // Define the fields for the MongoData model
      name: String,
      description: String
    }));
  }

  getAll() {
    return this.MongoDataModel.find();
  }
}

module.exports = MongoModel;
