const express = require("express");
const router =express.Router();

// import controllers
const {register, login} =require("../controllers/user");

// import middleware
const {userRegisterValidator}=require("../middlewares/user");


// api route
router.post("/register",userRegisterValidator, register);
router.post("/login",login);
module.exports =router;