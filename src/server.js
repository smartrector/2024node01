const express = require("express");
const {default: mongoose} = require("mongoose");
const app = express();

const dotenv = require("dotenv");
const {userRouter} = require("./routes/userRouter");

dotenv.config();

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("디비연결완료~~~");

    app.use(express.json());

    app.use("/user", userRouter);

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};

server();
