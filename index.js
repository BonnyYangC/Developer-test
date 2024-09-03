const express = require('express')
const { connectToDb, getDb } = require('./db')
const issues = require('./routes/issues')

const app = express()
app.use(express.json())

app.use('/api/issues', issues);

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => console.log('app listening on port 3000'))
  }
})
