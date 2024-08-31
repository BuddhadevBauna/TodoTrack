import jwt from "jsonwebtoken";
import User from "../models/User.js";

//for verify JWT
const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    // console.log(token);
    if(!token) {
        const error = new Error("Unauthorized HTTP, token not provided");
        error.status = 401;
        return next(error);
    }

    //assuming token is in format "Bearer <JWTToken>, removing the "Bearer" prefix"
    const jwtToken = token.replace('Bearer', "").trim();
    // console.log("Token from auth middleware :", jwtToken);

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // console.log(decoded);
        const userData = await User.findById({_id: decoded.id}).select({password: 0});
        // console.log(userData);
        req.user = userData;
        return next();
    } catch (error) {
        // console.log(error);
        const err = new Error("Please Login");
        err.status = 401;
        return next(err);
    }
}

export default authMiddleware;