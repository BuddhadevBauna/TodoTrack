import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";
import React from "react";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;