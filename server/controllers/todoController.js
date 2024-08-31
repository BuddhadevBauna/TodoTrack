import asyncHandler from "express-async-handler";
import Todo from "../models/Todo.js";
import mongoose from "mongoose";

const getTodods = asyncHandler(async (req, res, next) => {
    // console.log(req.user);
    // console.log(req.user._id);
    // console.log(req.user._id.toString());
    // console.log(req.user.id);
    let todos;
    if(req?.user?.id) {
        todos = await Todo.find({ user: req.user.id });
    } else {
        todos = await Todo.find({});
    }
    
    if (todos) {
        res.success(200, todos);
    } else {
        const error = new Error("Server error: Could not fetch todos.");
        error.status = 500;
        return next(error);
    }
});

const createTodo = asyncHandler(async (req, res, next) => {
    const { text } = req.body;
    if (!text) {
        const error = new Error('Text is required.');
        error.status = 400;
        return next(error);
    }

    const newTodo = new Todo({
        user: req.user.id,
        text,
    });
    const savedTodo = await newTodo.save();
    if (savedTodo) {
        res.success(201, savedTodo, 'Todo added successfully');
    }
    else {
        const error = new Error('Server error: Could not create todo.');
        error.status = 400;
        return next(error);
    }
});

const updateTodo = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    // console.log(id, text);

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('Invalid ID format. Please provide a valid ObjectId.');
        error.status = 400;
        return next(error);
    }

    const todo = await Todo.findById(id);
    // console.log(todo);
    if (!todo) {
        const error = new Error('Todo item not found.');
        error.status = 404;
        return next(error);
    }

    // Check if the logged-in user is the owner of the todo
    if (todo.user.toString() !== req.user.id) {
        const error = new Error('Not authorized.');
        error.status = 403; // Forbidden
        return next(error);
    }

    todo.text = text || todo.text;
    try {
        const updatedTodo = await todo.save();
        res.success(200, updatedTodo, 'Todo updated successfully');
    } catch (error) {
        // console.error('Error updating todo:', error);
        const err = new Error('Server error: Could not update todo.');
        err.status = 500;
        return next(err);
    }
});

const deleteTodo = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('Invalid ID format. Please provide a valid ObjectId.');
        error.status = 400;
        return next(error);
    }

    const todo = await Todo.findById(id);
    if (!todo) {
        const error = new Error('Todo item not found.');
        error.status = 404;
        return next(error);
    }

    // Check if the logged-in user is the owner of the todo
    if (todo.user.toString() !== req.user.id) {
        const error = new Error('Not authorized.');
        error.status = 403; // Forbidden
        return next(error);
    }
    
    try {
        await Todo.deleteOne({_id: id});
        res.success(202, null, 'Todo removed successfully');
    } catch (err) {
        const error = new Error('Server error: Could not delete todo.');
        error.status = 500;
        return next(error);
    }
});

export {getTodods, createTodo, updateTodo, deleteTodo};