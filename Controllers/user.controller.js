const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Login = async (req, res) => {
  const user = req.body;
  const result = await userModel.findOne({ name: user.name });
  try {
    if (result) {
      const isEqual = await bcrypt.compare(user.password, result.password);
      if (isEqual) {
        const token = jwt.sign({ id: result._id }, process.env.ACCESS_TOKEN, {
          expiresIn: "10h",
        });
        res.send(token);
      } else {
        res.send("Wrong pass mate");
      }
    } else {
      res.send("NO ACCOUNT FOUND!!!!!!!!!!");
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = (req, res) => {
  const authHeader = req.headers;
  const token = authHeader["authorization"];
  if (token == null) return res.send("No token found");
  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, user) => {
    if (err) return res.send("token expired");
    const account = await userModel
      .findOne({ _id: user.id }, { password: 0 })
    res.send(account);
  });
};

// const getUsers = async (_req, res) => {
//   const users = await userModel.find({}, { password: 0 });
//   res.send(users);
// };

const SignUp = async (req, res) => {
  try {
    const { name, password, worthy} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new userModel({ name, password: hash, worthy });
    const exists = await userModel.findOne({ name });
    if (!exists) {
      const result = await user.save();
      const token = jwt.sign({ id: result._id }, process.env.ACCESS_TOKEN, {
        expiresIn: "10h",
      });
      res.send(token);
    } else {
      res.send("User already exists");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUser, Login, SignUp };