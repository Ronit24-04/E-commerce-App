import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === "admin123") {    //This is password: admin123//
            navigate("/admin/dashboard");
        } else {
            alert("Wrong password");
        }
    };

    return (
        <div className="p-6 flex justify-center mt-20">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-primaryDark text-center">
                    Admin Login
                </h1>

                <input
                    type="password"
                    placeholder="Enter admin password"
                    className="border w-full mt-6 p-3 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="bg-primary text-white w-full py-3 rounded-lg mt-6 hover:bg-primaryDark"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
