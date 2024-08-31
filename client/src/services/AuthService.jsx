import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/auth/register`, userData);
        return response;
    } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.message);
    }
};

const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, userData);
        return response;
    } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.message);
    }
};

const getCurrentUser = async (AuthorizationToken) => {
    try {
        const response = await axios.get(`${baseURL}/user`, {
            headers: {
                Authorization: AuthorizationToken
            }
        });
        return response;
    } catch (error) {
        // console.log(error);
    }
};

export {registerUser, loginUser, getCurrentUser};