const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  UserModel.findOne({ email: req.body.email})
    .then((user) => {
      console.log(user)
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords DO NOT match!",
              error
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          res.status(200).send({
            message: "Login successful!",
            email: user.email,
            token,
          });
        })
        .catch((error) => {
          res.status(400).send({
            message: "Passwords DO NOT match!",
            error
          });
        });
    })
    // .catch((err) => {
    //   res.status(404).send({
    //     message: "Email NOT found!",
    //     err
    //   });
    // });
};