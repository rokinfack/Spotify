const { Schema, default: mongoose, model } = require("mongoose");

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        default: 2,
        required: true,
        type: Number,
      },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;