import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import user from "../controllers/userController.js";

const router = express.Router();

router.route('/user').get(authMiddleware, user);

export default router;