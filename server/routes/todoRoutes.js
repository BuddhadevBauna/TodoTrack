import express from "express";
import * as todoController from "../controllers/todoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public route to get all TODOs
router.route('/')
    .get(todoController.getTodos);

// Private
router.route('/')
    .post(authMiddleware, todoController.createTodo);

// Private
router.route('/:id')
    .patch(authMiddleware, todoController.updateTodo)
    .delete(authMiddleware, todoController.deleteTodo);

export default router;