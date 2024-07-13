import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../utils/button/Button";
import "./Login.css";

const Login = () => {
    const [passwordErrors, setPasswordErrors] = useState({});
    const [emailErrors, setEmailErrors] = useState({});
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setEmailErrors({
            length: email.length >= 3 ? false : true,
        });
    }, [email]);

    useEffect(() => {
        setPasswordErrors({
            lowercase: !/[a-z]/.test(password),
            uppercase: !/[A-Z]/.test(password),
            length: password.length >= 8 ? false : true,
        });
    }, [password]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (
                Object.values(emailErrors).every((x) => x === false) &&
                Object.values(passwordErrors).every((x) => x === false)
            ) {
                let response = await fetch(
                    "https://backend-e-commerce-production.up.railway.app/api/v1/users/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                    }
                );

                if (response.ok) {
                    let data = await response.json();
                    console.log(data);
                    localStorage.setItem("token", data.token);
                    toast.success("Logindan o'tish muvaffaqiyatli bo'ldi");
                    navigate("/");
                } else {
                    let errorData = await response.json();
                    console.error("Error:", errorData);
                    throw new Error(errorData.message || "Xatolik yuz berdi");
                }
            } else {
                throw new Error("Email yoki parol xatolari mavjud");
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="auth">
            <div className="form-container">
                <div className="form-wrapper">
                    <h2 className="auth-title">Login</h2>
                    <form className="auth-form" onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <ul>
                            {emailErrors.length && (
                                <li>At least 3 characters</li>
                            )}
                        </ul>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ul>
                            {passwordErrors.uppercase && (
                                <li>At least one uppercase letter</li>
                            )}
                            {passwordErrors.lowercase && (
                                <li>At least one lowercase letter</li>
                            )}
                            {passwordErrors.length && (
                                <li>At least 8 characters</li>
                            )}
                        </ul>
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
