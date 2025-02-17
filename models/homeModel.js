// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const {getDB} = require("../utils/dbConfig");
module.exports = class HomeModel {
  constructor(title, img_url, price, id) {
    this.title = title;
    this.img_url = img_url;
    this.price = price;
    this.id = id;
  }

  // insert to db mysql
  save() {
    const db = getDB();
    return db.collection("products").insertOne(this);
  }

  // from db
  static fetchAll() {
    const db = getDB();
    return db
      .collection("products")
      .find()
      .toArray();
  }

  static homeFindById() {

  }
};
