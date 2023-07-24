require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');

// Import the hospitalPaymentRouter
const hospitalPaymentRouter = require('./Routers/payment.router');
const connect  = require("./Config/connect");
const userRouter = require("./Routers/user.routes");

// Create the Express app
const app = express();
connect()


// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Mount the hospitalPaymentRouter to the '/api' route
app.use(hospitalPaymentRouter);
app.use(userRouter)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
