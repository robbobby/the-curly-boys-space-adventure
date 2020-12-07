
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/hubble-data', (req, res) => {
  const url = 'http://hubblesite.org/api/v3/glossary?page=all';

  try {
  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
  } catch (error) {
    console.error(error);


  }  });

app.listen(3000, function() {
  console.log(`App is listening on port ${this.address().port}`);
})

  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser




// const express= require('express');
// const app = express();
// const cors = require('cors');
// // as we dont' have the window's fetch object available in node we use a package node-fetch
// const fetch = require('node-fetch');

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });


// // defining a URL for Hubble API request
// app.get('/hubble-data', (req, res) => {
//     const url = 'http://hubblesite.org/api/v3/glossary?page=all';

//     fetch(url)
//     .then(jsonData => jsonData.json())
//     .then(data => console.log(data));

// });

