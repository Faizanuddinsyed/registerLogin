const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/User");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/merncrud");

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Invalid password");
      }
    } else {
      res.json("User not found");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
