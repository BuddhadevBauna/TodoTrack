import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    text: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Todo = new mongoose.model('Todo', todoSchema);

export default Todo;
