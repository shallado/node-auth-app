const bcrypt = require('bcrypt');

function userModel(mongoose) {
  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
  });

  userSchema.pre('save', async function (next) {
    const user = this;

    try {
      const hashPassword = await bcrypt.hash(user.password, 10);

      user.password = hashPassword;

      next();
    } catch (err) {
      console.log(err);
    }
  });

  return mongoose.model('User', userSchema);
}

module.exports = userModel;
