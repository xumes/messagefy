const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  photo: String,
  email: String,
  credits: { type: Number, default: 500 }
});

mongoose.model('users', userSchema);
