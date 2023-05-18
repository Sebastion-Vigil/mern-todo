const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new UserModel({
                email: req.body.email,
                password: hashedPassword
            });
            user
                .save()
                .then((result) => {
                    res.status(201).send({
                        message: "User created successfully!",
                        result
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user!",
                        error
                    });
                });
        })
        .catch((err) => {
            res.status.send({
                message: "Password NOT successfully hashed!",
                err
            });
        });
};