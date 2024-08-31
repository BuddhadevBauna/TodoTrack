import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUserData((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(userData);
        if (response?.status === 200) {
            setUserData({
                email: "",
                password: ""
            });
            toast.success(response.data.message);
            navigate('/');
        }
    }
    return (
        <>
            <div className="flex items-center justify-center mt-20 mb-16">
                <div className="w-full max-w-[90%] md:max-w-md lg:max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Toggle Between Login and Register */}
                    <div className='flex items-center justify-center gap-3 cursor-pointer'>
                        <span>Don't have an account?</span>
                        <Link to={'/register'} className='text-blue-500 hover:bg-blue-900'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;