const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGODB_URL = "mongodbf://admin:admin@localhost:27017";

let mongo_db;

const mongoDbConfig = (callback) => {
    MongoClient.connect(MONGODB_URL)
        .then( client => {
            callback();
            mongo_db = client.db("zksamail-db");
        }).catch( (err) => {
        console.log("Error in connections", err);
    });
}

const getDB = () => {
    if(!mongo_db) {
        throw new Error("Database not initialized");
    }
    return mongo_db;
}

exports.mongoDbConfig = mongoDbConfig;
exports.getDB = getDB;

