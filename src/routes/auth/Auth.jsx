import React from "react";
import { Outlet } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
    return (
        <div className="auth">
            <select name="" id="">
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
            </select>
            <Outlet />
        </div>
    );
};

export default Auth;
