const User = require("../models/user");
const jwt = require('jsonwebtoken')

const Task = require('../models/tasks')

module.exports.register = async function (req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('Name, email, and password are required');
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            const newUser = new User({ name, email, password });

            await newUser.save();
            return res.send(newUser);
        }

        return res.send('User already exists');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error');
    }
};


module.exports.login = async function (req, res) {
    const email = req.body.email;
    const password = req.body.password
    const user = await User.findOne({ email });

    if (user) {
        if (user.email == email && user.password == password) {
            return res.send('Loedin Successfully')
        }
        return res.send('Login failed: Invalid email or Password')
    }
}


module.exports.loginjwt = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: "invalid user name and password"
            })
        }
        console.log(user);
        return res.json(200, {
            message: 'Sign-in Successfully',
            data: {
                token: jwt.sign(user.toJSON(), 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ', { expiresIn: '3000000' })
            }
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
}


