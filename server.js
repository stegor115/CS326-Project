const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('commanddb');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});

app.get('/api', (req, res) => {
  let output;
  MongoClient.connect('mongodb://localhost', function(err, db){
    if(err) throw err;
    var database = db.db('commanddb');
    database.collection("commands").findOne({}, function(err,result){
      if (err) throw err;
      console.log(result.keyword);
      output = result.keyword;
      res.json({help: output});
      db.close();
    });
  });
  
});

app.post('/api', (req, res) => {
    res.json(req);
});
