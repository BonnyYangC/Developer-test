const { MongoClient } = require("mongodb")

let dbConnection
const db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(`${db_uri}/Issue`)
      .then((client) => {
        dbConnection = client.db()
        return cb()
      }).catch(err => {
        console.error(err);
        return cb(err)
    })
  },
  getDb: () => dbConnection
}