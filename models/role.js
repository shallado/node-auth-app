function roleModel(mongoose) {
  const roleSchema = new mongoose.Schema({
    name: String,
  });

  return mongoose.model('Role', roleSchema);
}

module.exports = roleModel;
