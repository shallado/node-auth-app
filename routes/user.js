const express = require('express');
const auth = require('../controllers/auth.controller');

const router = express.Router();

function userRouter(app) {
  router.post('/signup', auth.signup);

  app.use('/auth', router);
}

module.exports = userRouter;
