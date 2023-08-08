require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

const hospitalPaymentRouter = require('./Routers/payment.router');
const connect  = require("./Config/connect");
const userRouter = require("./Routers/user.routes");
const cors = require("cors")

const app = express();
connect()



app.use(cors())
app.use(bodyParser.json());
app.use(hospitalPaymentRouter);
app.use(userRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
