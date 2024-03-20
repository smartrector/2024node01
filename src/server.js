const express = require("express");
const {default: mongoose} = require("mongoose");
const app = express();
const {User} = require("./models/User");
const dotenv = require("dotenv");

dotenv.config();

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("디비연결완료~~~");

    app.use(express.json());

    app.get("/user", async function (req, res) {
      try {
        const users = await User.find({});
        return res.send({users});
      } catch (error) {
        return res.status(500).send({error: error.message});
      }
    });

    // app.get("/user/:userId",async function(req,res){
    //     try {

    //     } catch (error) {
    //         return res.status(500).send({error: error.message});
    //     }
    // })

    app.get("/user/:userId", async function (req, res) {
      try {
        const {userId} = req.params;
        const user = await User.findOne({_id: userId});
        return res.send({user});
      } catch (error) {
        return res.status(500).send({error: error.message});
      }
    });

    app.post("/user", async function (req, res) {
      try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
      } catch (error) {
        return res.status(500).send({error: error.message});
      }
    });
    // {
    //     "username":"hanyong5",
    //     "name":{
    //       "first":"han",
    //       "last":"sung yong"
    //      },
    //         "age":40,
    //       "email":"winoz@naver.com"
    //   }

    app.delete("/user/:userId", async function (req, res) {
      try {
        const {userId} = req.params;
        const user = await User.findByIdAndDelete({_id: userId});
        return res.send({user});
      } catch (error) {
        return res.status(500).send({error: error.message});
      }
    });

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};

server();
