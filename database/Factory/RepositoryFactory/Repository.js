const env = require(`../environment/${process.env.NODE_ENV}`)

class Repository {

    async getAll() {}
    async getById(id) {}
    async create(data) {}
    async update(id, data) {}
    async delete(id) {}
}

class MongodbRepository extends Repository {
    
}

class PostgresqlRepository extends Repository {

}


class RepositoryFactory {
    static createRepository(databaseType) {
        switch (databaseType) {
            case 'mongodb':
                return new MongodbRepository();
            
            case 'postgresql':
                return new PostgresqlRepository();
        
            default:
                throw new Error(`Unsupported database type: ${databaseType}`);
        }
    }
}