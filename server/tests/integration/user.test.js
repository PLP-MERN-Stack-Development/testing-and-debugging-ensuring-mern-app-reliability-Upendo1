// tests/integration/user.test.js
const request = require('supertest');
const app = require('../../src/server'); // Express app
const User = require('../../src/models/User');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

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

describe('User API', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')   // ← FIXED: correct route
      .send({ name: 'Alice', email: 'alice@test.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Alice');

    const users = await User.find({});
    expect(users.length).toBe(1);
  });
});
