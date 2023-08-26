const { Schema, default: mongoose, model } = require("mongoose");
const bcrypt = require('bcrypt')

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

UserSchema.methods.hashPassword = async function(){
  this.password = await bcrypt.hash(this.password, 10);
}

UserSchema.methods.comparePassword = async function(olPassword){
  return bcrypt.compare(olPassword, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;