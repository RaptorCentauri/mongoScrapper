module.exports = function (app){
  app.get("/", function(req, res) {
    console.log(`getting route /`);

    db.Article.create(result)
      .then(function(dbArticle) {
        // View the added result in the console
        console.log(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        return res.json(err);
    });
  });
}
