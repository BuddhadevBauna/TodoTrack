import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useAuth();
    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <>
            <Navigate to={'/'} />
        </>
    );
};

export default Logout;