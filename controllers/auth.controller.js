const { User, Role } = require('../models');

exports.signup = async (req, res) => {
  try {
    const roles = await Role.find({ name: { $in: req.body.roles } });
    req.body.roles = roles;
    const user = new User(req.body);

    await user.save();

    res.send({ message: 'successfully added user' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
