const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { secretKey } = require('../config/jwt');

exports.password = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user === null) {
      return res.status(404).send({ message: 'unable to find user' });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(401).send({ message: 'invalid password try again' });
    }

    const jwtToken = jwt.sign({ id: user.username }, secretKey);
    req.body.token = jwtToken;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
