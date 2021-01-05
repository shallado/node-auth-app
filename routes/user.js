const express = require('express');
const auth = require('../controllers/auth.controller');
const validation = require('../middlewares/validation');

const router = express.Router();

function userRouter(app) {
  router.post('/signup', auth.signup);

  router.post('/signin', validation.password, auth.signin);

  app.use('/auth', router);
}

module.exports = userRouter;
