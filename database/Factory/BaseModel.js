class BaseModel {
    constructor(database) {
      this.database = database;
    }
  
    getAll() {
      return this.database.findAll();
    }
}

module.exports = BaseModel;
  