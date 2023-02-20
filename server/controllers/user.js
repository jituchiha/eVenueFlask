const User=require("../models/user");
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.register = async (req,res) => {

    const usernameExists = await User.findOne({
        username: req.body.username,
    });

    const emailExists = await User.findOne({
        email: req.body.email,
    });

    if(usernameExists) {
        return res.status(403).json({
            error: "Username exists",
        });
    }

    if(emailExists) {
        return res.status(403).json({
            error: "Email exists",
        });
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup Successful! Login to proceed",
    });
};

exports.login = async(req, res) => {
    // find user
    const {email, password } = req.body;

    await User.findOne({email}).exec((err, user) => {
        // if error or no user 
        if (err || !user) {
            return res.status(401).json ({
                error: "Invalid credentials",
            });
        }

        // if user found, use authenticate method
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Invalid Email or Password",
            })
        }

        // generate token with id and jwt secret
        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // persist token as jwt in cookie
        res.cookie("jwt", token, {expire: new Date() + 9999, httpOnly: true});

        // return response with user
        const {username} = user;
        return res.json({
            message: "Login Successful",
            username,
        })
    })
};

exports.logout = (req, res) => {
    res.clearCookie("jwt");

    return res.json({
        message: "Logout successful",
    })
};