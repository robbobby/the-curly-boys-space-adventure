
const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

// const fetch = require('node-fetch');


app.use(cors())
app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017') //  url is only connection to api
  .then((client) => { // client refers to mongo client line 4
    const db = client.db('definitions_hub'); // dummy data in seeds.js 
    const definitionsCollection = db.collection('definitions'); // essentially a collection is a table

    const definitionsRouter = createRouter(definitionsCollection);
    app.use('/api/definitions', definitionsRouter); 
    
    //here comes all our routes


  })
  .catch(console.error); // displays error if db doesnt load

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});