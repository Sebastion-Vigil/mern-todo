const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const router = require('./router');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
// https://www.atatus.com/blog/a-beginners-guide-to-morgan-npm-logger/
app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
})