const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pagesHosting:AUreD9BtHZY0aWT4@cluster0.tqgec.mongodb.net/webmaster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'webmaster';
const express = require('express');
const app = express();
const path = require('path');
let indexFile = path.join(__dirname, "../public/index.html");
// serve files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

console.log('Server-side code running');

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("we are connected!");
  // perform actions on the collection object
  // start the express web server listening on 8080
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
  
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(indexFile);
});

// add a document to the DB collection recording the click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});

// get the click data from the database
app.get('/clicks', (req, res) => {
  db.collection('clicks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

// function getstock(db, mgclient, item, field){
//   const col = db.collection("stock-list");
//   const myDoc = await col.findOne( { field: { $eq : item}});
//   console.log(myDoc);
//   return myDoc;        
// }

