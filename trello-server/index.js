const express = require('express');
const { dbConnect } = require('./config/mongodb');
const initRoutes = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();
initRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
