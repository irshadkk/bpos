const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const products = [];
const categories = [];
app.get('/api/get/products', (req, res) => {
    var category = req.query.category; // $_GET["id"]
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("bpos");
        var query = {}
        if (category) {
            query = { cat: category };
        }

        dbo.collection("products").find(query).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });

});
app.get('/api/get/categories', (req, res) => {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("bpos");
        dbo.collection("categories").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });

});
app.post('/api/post', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));