const {MongoClient} = require('mongodb')
const express = require('express')

const router = express.Router()

async function addMessageDoc(messageDoc){
  const url = 'mongodb://localhost:27017'
  connection = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = await connection.db('goatstone')
  await db
    .collection('messages')
    .insertOne(messageDoc)
  await connection
    .close()
}

router.get('/', function(req, res, next) {
  const a = req.query
  res.send('messagesss')
});
router.post('/', async function(req, res, next) {
   console.log('post message: ', req.query)
   const messageDoc = {
    email: req.query.email || '',
    name: req.query.name || '',
    message: req.query.message || ''
  }
  addMessageDoc(messageDoc)
  res.send('message sent')
})

module.exports = router
