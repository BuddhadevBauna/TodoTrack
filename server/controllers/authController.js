import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register a new user
const registerUser = asyncHandler(async (req, res, next) => {
    //Get user data
    const { name, email, password } = req.body;

    //Check user exist or not
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error("User already exists.");
        error.status = 400;
        return next(error);
    }

    const user = await User.create({ name, email, password });
    if (user) {
        return res.status(201).json({
            message: "Registration Successful",
            token: generateToken(user._id),
            userId: user._id.toString(),
        });
    } else {
        const error = new Error("Server error: Could not create user.");
        error.status = 500;
        return next(error);
    }
});

// Login user
const loginUser = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (!userExists) {
            const error = new Error("Invalid Credentials.");
            error.status = 400;
            return next(error);
        }

        const isMatchPassword = await userExists.matchPassword(password);
        // console.log(isMatchPassword);
        if (isMatchPassword) {
            return res.status(200).json({
                message: "login successful",
                token: generateToken(userExists._id),
                userId: userExists._id.toString(),
            });
        } else {
            const error = new Error("Invalid email or password.");
            error.status = 400;
            return next(error);
        }
    } catch (error) {
        // console.log(error);
        const err = new Error("Internal server error.");
        err.status = 500;
        return next(err);
    }
});

export { registerUser, loginUser };