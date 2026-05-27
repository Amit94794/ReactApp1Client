import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {

        const response = await fetch("https://localhost:5001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                passwordHash: password
            })
        });

        const data = await response.json();

        localStorage.setItem("user", JSON.stringify(data));
    };

    return (
        <div>

            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={loginUser}>
                Login
            </button>

        </div>
    );
};

export default Login;