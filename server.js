const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('commanddb');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});""

app.post('/api/commanddb', (req, res) => {
    const newCommand = req.body;

    db.push(newCommand);
    res.json(newCommand);
});

app.get('/api/issues', (req, res) => {
    const command = {};
    if (req.query.status) command.status = req.query.status;
  
    db.collection('keywords').find(command).then(issues => {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, records: issues })
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
  });