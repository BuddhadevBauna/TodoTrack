import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TodoItem from "./TodoItem";
import { createTodo, deleteTodo, getTodos } from "../../services/TodoService";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const TodoList = () => {
    const { token, isLoggedIn, user } = useAuth();
    // console.log(token);
    const [newTodo, setNewTodo] = useState({
        text: "",
    });
    const [todos, setTodos] = useState([]);
    // console.log(todos);

    const addTodo = async (e) => {
        e.preventDefault();
        // console.log(newTodo);
        const response = await createTodo(newTodo, token);
        // console.log(response);
        if (response) {
            toast.success(response.message);
            setTodos((prevTodo) => [...prevTodo, response.extraData]);
            setNewTodo({
                text: "",
            });
        }
    };

    const handleDelete = async (id) => {
        const response = await deleteTodo(id, token);
        if (response) {
            toast.success(response.message);
            setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
        }
    };

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await getTodos();
            // console.log(response);
            setTodos(response.extraData);
        };
        fetchTodos();
    }, []);

    let filteredTodos = isLoggedIn
        ? todos?.filter((todo) => todo.user === user._id) // Adjusting filter logic
        : todos;

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl text-blue-700 font-bold text-center mb-4">
                Todo List
            </h1>
            <form
                className="h-28 bg-white rounded-l-lg p-2 relative"
                onSubmit={addTodo}
            >
                <textarea
                    placeholder="Add a new todo"
                    className="h-full max-h-full min-h-full w-full border-none outline-none focus:border-none focus:outline-none"
                    name="text"
                    value={newTodo.text}
                    onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
                ></textarea>
                <button
                    type="submit"
                    className="absolute top-[-0.8rem] right-[-0.8rem] bg-yellow-300 text-white border-none outline-none flex items-center justify-center p-2 rounded-full cursor-pointer"
                >
                    <i>
                        <FaPlus />
                    </i>
                </button>
            </form>
            <div>
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
                    ))
                ) : (
                    <p className="mt-5 text-center text-gray-500">No todos available.</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;