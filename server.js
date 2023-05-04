const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // use the dynamic port assigned by Heroku or default to 3000
const path = require('path');

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  // Code.....
})
