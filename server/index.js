const express = require("express");
const cors = require("cors");

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, './server/index.js'))
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
