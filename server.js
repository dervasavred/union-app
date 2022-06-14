const res = require("express/lib/response");

express = require("express");
app = express();

const MongoClient = require("mongodb").MongoClient;

PORT = 54000;

// ==================================================
//          SERVER HANDLERS
// ==================================================

app.get("/", ( req, res) ) {
  res.sendFile(ROOT_DIR + "index.html");
}; // END GET

app.get("/api", ( req, res) ) {

}; // END GET

app.get("/", ( req, res) ) {

}; // END GET