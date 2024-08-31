import axios from "axios";
import { toast } from "react-toastify";

const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/register', userData);
        return response;
    } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.message);
    }
};

const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', userData);
        return response;
    } catch (error) {
        // console.log(error);
        toast.error(error?.response?.data?.message);
    }
};

const getCurrentUser = async (AuthorizationToken) => {
    try {
        const response = await axios.get('http://localhost:8000/api/user', {
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