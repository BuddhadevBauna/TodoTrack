import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, onDelete }) => {
    // console.log(todo);
    const date = new Date(todo.updatedAt);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div
            key={todo._id}
            className="flex justify-between items-center bg-white p-5 rounded-md mt-5"
        >
            <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold">{todo.text}</p>
                <p className="text-gray-500 text-sm flex gap-2">
                    <span>{formattedDate}</span>
                    <span>{formattedTime}</span>
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    className="bg-yellow-300 text-white text-sm px-3 py-1 rounded-md font-bold"
                >
                    <Link to={`/${todo._id}`}>Update</Link>
                </button>
                <button
                    className="bg-yellow-300 text-white text-sm px-3 py-1 rounded-md font-bold"
                    onClick={() => onDelete(todo._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
