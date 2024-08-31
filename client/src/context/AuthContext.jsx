import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getCurrentUser, loginUser, registerUser } from "../services/AuthService";

// Create context
export const AuthContext = createContext();

// Create Provider
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [isLoggedIn, setLoggedIn] = useState(!!token);
    const [user, setUser] = useState({});

    const register = async (userData) => {
        const response = await registerUser(userData);
        // console.log(response);
        const newToken = response?.data?.token;
        if (newToken) {
            localStorage.setItem('authToken', newToken);
            setToken(newToken);
            setLoggedIn(true);
        }
        return response;
    };

    const login = async (userData) => {
        const response = await loginUser(userData);
        // console.log(response);
        const newToken = response?.data?.token;
        if (newToken) {
            localStorage.setItem('authToken', newToken);
            setToken(newToken);
            setLoggedIn(true);
        }
        return response;
    };

    const fetchUser = useCallback(async () => {
        const AuthorizationToken = `Bearer ${token}`;
        const response = await getCurrentUser(AuthorizationToken);
        // console.log(response);
        setLoggedIn(true);
        setUser(response?.data?.extraData);
    }, [token]);

    useEffect(() => {
        if (token !== null) fetchUser();
    }, [token, fetchUser]);

    const logout = () => {
        try {
            setToken(null);
            setLoggedIn(false);
            setUser({});
            localStorage.removeItem('authToken');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ register, login, logout, isLoggedIn, user, token }}>
            {children}
        </AuthContext.Provider>
    )
};

//Custom hook for consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        console.log("useauth used outside of the provider.");
    }
    return authContextValue;
};