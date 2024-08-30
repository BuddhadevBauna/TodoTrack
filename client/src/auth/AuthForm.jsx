const AuthForm = () => {
    let isLogin = true;
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-[90%] md:max-w-md lg:max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">{!isLogin ? "Register" : "Login"}</h2>
                    <form className="space-y-4">
                        {/* Username Field */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                    placeholder="Enter your username"
                                />
                            </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Toggle Between Login and Register */}
                    <div className='text-center cursor-pointer'>
                        {isLogin ? (
                            <p className="text-sm ">
                                <span>Don't have an account?</span>
                                {/* <a href="#" className="text-indigo-600 hover:underline">Register</a> */}
                            </p>
                        ) : (
                            <p>
                                <span>Already have an account?</span>
                                {/* <a href="#" className="text-indigo-600 hover:underline">Login</a> */}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthForm;