const {MongoClient} = require('mongodb');
var express = require('express');

var router = express.Router();

async function addMessageDoc(messageDoc){
  const url = 'mongodb://localhost:27017'
  connection = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  db = await connection.db('goatstone');

  await db
    .collection('messages')
    .insertOne(messageDoc);
  await connection
    .close();
}

router.get('/', function(req, res, next) {
  const a = req.query
  res.send('message');
});
router.post('/', async function(req, res, next) {
  const messageDoc = {
    email: req.body.email || '',
    name: req.body.name || '',
    message: req.body.message || ''
  }
  addMessageDoc(messageDoc)
  res.send('message sent');
});

module.exports = router;
