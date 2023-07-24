const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  worthy: {
    type: Boolean,
    required: true,
    default: false
  }
});

const userModel = model("Users", userSchema);

module.exports = userModel;