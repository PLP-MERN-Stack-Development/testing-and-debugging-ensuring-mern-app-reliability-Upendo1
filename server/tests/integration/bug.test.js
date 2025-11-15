// Number 3
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/server');
const Bug = require('../../src/models/bugModel');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany();
  }
});

describe('Bug API', () => {
  it('GET /api/bugs should return empty list', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /api/bugs should create a new bug', async () => {
    const bugData = {
      title: 'Test Bug',
      description: 'Bug description',
      status: 'open',
    };

    const res = await request(app).post('/api/bugs').send(bugData);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(bugData.title);

    const bugsInDb = await Bug.find({});
    expect(bugsInDb.length).toBe(1);
    expect(bugsInDb[0].title).toBe(bugData.title);
  });
});

