const experss = require("express");
const {
  Login,
  SignUp,
  getUser,
} = require("../Controllers/user.controller");
// const { roleMiddleware } = require("../middlewares/roleMiddleware");

const userRouter = experss.Router();

userRouter
  .post("/login", Login)
  .post("/signup", SignUp)
  .get("/verify", getUser)

module.exports = userRouter;