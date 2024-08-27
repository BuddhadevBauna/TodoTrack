import express from "express";
import * as authControllers from "../controllers/authController.js";

const router = express.Router();

router.route('/register').post(authControllers.registerUser);
router.route('/login').post(authControllers.loginUser);

export default router;