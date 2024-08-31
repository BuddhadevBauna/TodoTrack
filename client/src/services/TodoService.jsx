import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Function to get all TODOs
const getTodos = async () => {
    try {
        const response = await axios.get(`${baseURL}/todos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching TODOs:', error);
    }
};

// Function to create a new TODO
const createTodo = async (todoData, token) => {
    try {
        const response = await axios.post(`${baseURL}/todos/`, todoData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // console.error('Error creating TODO:', error);
        toast.error(error?.response?.data?.message);
    }
};

// Function to update an existing TODO by ID
const updateTodo = async (id, updatedData, token) => {
    try {
        const response = await axios.patch(`${baseURL}/todos/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // console.error(`Error updating TODO with ID ${id}:`, error);
        toast.error(error?.response?.data?.message);
    }
};

// Function to delete a TODO by ID
const deleteTodo = async (id, token) => {
    try {
        const response = await axios.delete(`${baseURL}/todos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        // console.error(`Error deleting TODO with ID ${id}:`, error);
        toast.error(error?.response?.data?.message);
    }
};

export { getTodos, createTodo, updateTodo, deleteTodo };