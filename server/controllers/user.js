const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req,res) => {

    //const usernameExists = await User.findOne({
    //    username: req.body.username,
    //});

    const emailExists = await User.findOne({
        email: req.body.email,
    });

    //if(usernameExists) {
    //    return res.status(403).json({
    //        error: "username exists",
    //    });
    //}

    if(emailExists) {
        return res.status(403).json({
            error: "email exists",
        });
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        message: "Signup Successful",
    });
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	
	await User.findOne({email}).exec((err,user) => {

		if(err || !user){
			return res.status(401).json({
				error: "Invalid Credentials",
			});
		}

		if(!user.authenticate(password)){
			return res.status(401).json({
				error: "Invalid email or password",
			});
		}

		const token = jwt.sign({ x_id: user._id}, process.env.JWT_SECRET, {
			expiresIn: "24h",
		});

		res.cookie("jwt",token,{expire: new Date() + 9999, httpOnly: true});

		const { username } =user;
		return res.json({
			message: "Login Successful",
            username,
            email
		})
	});
}