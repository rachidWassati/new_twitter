const { Model, DataTypes } = require('sequelize');
const BaseModel = require('./BaseModel');

class PostgresModel extends BaseModel {
  constructor(database) {
    super(database);

    this.PostgresDataModel = database.define('PostgresData', {
      // Define the fields for the PostgresData model
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      }
    });
  }

  getAll() {
    return this.PostgresDataModel.findAll();
  }
}

module.exports = PostgresModel;
