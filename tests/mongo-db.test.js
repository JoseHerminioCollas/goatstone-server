const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
    });
    db = await connection.db('test');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const messages = db.collection('messages');
    const id = new Date().getTime()
    const mockMessage = {_id: id, name: 'Xohn'};

    await messages.insertOne(mockMessage);
    const insertedUser = await messages.findOne({_id: id});
    expect(insertedUser).toEqual(mockMessage);
  });
});
