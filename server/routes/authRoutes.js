import express from "express";
import * as authControllers from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import signupSchema from "../validator/authValidator.js";

const router = express.Router();

router.route('/register').post(validate(signupSchema), authControllers.registerUser);
router.route('/login').post(authControllers.loginUser);

export default router;