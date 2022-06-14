express = require("express");
app = express();

// ENVIRONMENT VARS
  require("dotenv").config();

// DB CONNECTION
  const MongoClient = require("mongodb").MongoClient;

  let db,
      dbConnectionStr = process.env.DB_STRING,
      dbName = "hoursTracker";

  MongoClient.connect(dbConnectionStr)
      .then( client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName);
      }); // END THEN


// LOCAL PORT TO RUN ON
  PORT = 54000;

// CORS HANDLER
  const cors = require("cors");
  app.use( cors() );

// SET VIEW ENGINE
  app.set("view engine", "ejs");

// SERVE STATIC FILES AT WILL
  app.use(express.static("public"));

// ACCEPT URL ENCODING METHODS?
  app.use(express.urlencoded({extended: true}));

// ENABLES EXPRESS TO PARSE JSON INSTEAD OF NEEDING BODYPARSER MODULE
  app.use(express.json());

// ==================================================
//          SERVER HANDLERS (CRUD)
// ==================================================

app.get("/", (req, res)  => {
  const contents = db.collection("locations").find().toArray()
    .then(data => {
      let nameList = data.map(ele => ele.name);
      console.log(nameList);
      res.render("index.ejs", {info: nameList});
    });

}); // END GET

app.post("/api", (req, res)  => {

}); // END GET

app.put("updateEntry", (req, res)  => {

}); // END GET

app.delete("/removeEntry", (req, res)  => {

}); // END GET

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
}); // END LISTEN

// app.get("/", ( req, res) ) {

// }; // END GET