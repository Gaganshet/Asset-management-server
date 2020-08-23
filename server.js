const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const computingAssetsRouter = require('./src/router/computingAssetsRouter.js'); 

/*To Allow CORS - Will be exposing API*/
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

app.use(bodyParser.json());
const userCredentialRouter = require('./src/router/userCredentialRouter');

app.get('/person', async (req, res) => {
  res.send("Asset Management");
});

app.use('/user', userCredentialRouter);

app.use('/computingAssets', computingAssetsRouter);

app.listen(8050);