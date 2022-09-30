require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./router/index');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
    preflightContinue: true,
  })
);
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  try {
    console.log(`Server has been started on ${PORT} PORT`);
  } catch (err) {
    console.log(err);
  }
});
