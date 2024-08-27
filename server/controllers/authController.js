import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    //Get user data
    const { name, email, password } = req.body;

    //Check user exist or not
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists." });
    }

    const user = await User.create({ name, email, password });
    if (user) {
        return res.status(201).json({
            message: "Registration Successful",
            token: generateToken(user._id),
            userId: user._id.toString(),
        });
    } else {
        res.status(500).json({ message: 'Server error: Could not create user.' });
    }
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isMatchPassword = await userExists.matchPassword(password);
        // console.log(isMatchPassword);
        if (isMatchPassword) {
            res.status(200).json({
                message: "login successful",
                token: generateToken(userExists._id),
                userId: userExists._id.toString(),
            });
        } else {
            res.status(400).json({ 
                message: "Invalid email or password" 
            });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }

});

export { registerUser, loginUser };