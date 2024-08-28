import express from "express";
import * as todoController from "../controllers/todoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route('/')
    .get(authMiddleware, todoController.getTodods)
    .post(authMiddleware, todoController.createTodo);

router.route('/:id')
    .patch(authMiddleware, todoController.updateTodo)
    .delete(authMiddleware, todoController.deleteTodo);

export default router;