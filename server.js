const express = require('express');
require('dotenv').config();
require('./models');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRouter(app);

app.listen(port, () => {
  console.log(`successfully connected to the server on port: ${port}`);
});
