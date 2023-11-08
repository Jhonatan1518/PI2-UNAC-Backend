import express from 'express'
import indexRoutes from './routes/index.routes'
import bodyParser  from "body-parser";
import cors from 'cors';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';

const app = express()
app.use(cors());
//routes
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(indexRoutes);

describe('Test for /user endpoint', () => {
    let mongoServer;
  
    beforeAll(async () => {
      mongoServer = new MongoMemoryServer();
      const mongoUri = await mongoServer.getUri();
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    });
  
    afterAll(async () => {
      await mongoose.disconnect();
      await mongoServer.stop();
    });
  
    it('should get a list of users', async (done) => {
      const response = await request(app).get('/user');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
      done();
    });
  
    it('should handle errors', async (done) => {
      const user = new User({ name: 'Test User' });
      await user.save();
  
      const response = await request(app).get('/user');
      expect(response.status).toBe(500);
      expect(response.body.message).toBe('Your error message here');
  
      done();
    });
  });

export default app;