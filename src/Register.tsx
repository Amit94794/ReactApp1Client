import React, { useState } from "react";
import './index.css'

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: "Amit",
        email: "",
        passwordHash: "",
        roleId: 3
    });

    const registerUser = async () => {
        console.log(JSON.stringify(formData))
        
        await fetch("https://localhost:7186/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        alert("Registration Successful");
    };

    return (
        <div>

            <h2>Register</h2>

            <input
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        fullName: e.target.value
                    })
                }
            />

            <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        passwordHash: e.target.value
                    })
                }
            />

            <button onClick={registerUser}>
                Register
            </button>

        </div>
    );
};

export default Register;