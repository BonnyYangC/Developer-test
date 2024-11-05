const express = require('express')
const { connectToDb, getDb } = require('./db')
const issues = require('./routes/issues')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

app.use('/api/issues', issues);

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => console.log('app listening on port 3000'))
  }
})
