var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var cheerio = require("cheerio");


// Require all models
var db = require("./models/Article.js");
// require(`./routes/http-routes.js`)(app);

var PORT = 3000;

// Initialize Express
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/ArticleScrapper",{
  useMongoClient: true
});


app.get("/test", function(req, res) {
  console.log(`getting route /test`);

  db.find({}, function (err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  })
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
