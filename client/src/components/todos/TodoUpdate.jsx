import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../../services/TodoService";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const TodoUpdate = () => {
    const {id} = useParams();
    // console.log(id);
    const {token} = useAuth();
    const [updatedTodo, setUpdatedTodo] = useState({
        text: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateTodo(id, updatedTodo, token);
        if(response) {
            toast.success(response.message);
            navigate('/');
        }
    };

    return (
        <>
            <div className="flex items-center justify-center mt-8 mb-16">
                <div className="w-full max-w-[90%] md:max-w-md lg:max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Update Todo</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="Enter todo item"
                                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                name="text"
                                value={updatedTodo.text}
                                onChange={(e) => setUpdatedTodo({ ...updatedTodo, text: e.target.value })}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TodoUpdate;