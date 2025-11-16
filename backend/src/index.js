// index.js
import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

const app = express();
app.use(json());

// step 1: connect to mongoDB
const port = process.env.PORT || 9000;

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
};

startServer();
