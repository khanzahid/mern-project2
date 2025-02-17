const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGODB_URL = "mongodb+srv://db@merndb.varfo.mongodb.net/?retryWrites=true&w=majority&appName=Sdb";

let mongo_db;

const mongoDbConfig = (callback) => {
    MongoClient.connect(MONGODB_URL)
        .then( client => {
            callback();
            mongo_db = client.db("sample_mflix");
        }).catch( (err) => {
        console.log("Error in connection", err);
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

