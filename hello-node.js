const express = require('express')
const app = express()

console.log("hello from node");

app.get('/', function (req, res) {
  res.send('Hello World from Express')
})
//change
app.listen(3000)