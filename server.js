const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const body_parser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

const AdminRouter = require("./Router/adminRoute");
app.use("/admin", AdminRouter);

const UserRouter = require("./Router/userRoute");
app.use(UserRouter);

const port = process.env.PORT || 2000;
mongoose
  .connect(
    "mongodb+srv://nodejs:203iv1Bxnx19oPOV@cluster0.zjbgce3.mongodb.net/ecommerce_api",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`server is started on port no : http://localhost:${port} `);
      console.log("db is connected succesfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
