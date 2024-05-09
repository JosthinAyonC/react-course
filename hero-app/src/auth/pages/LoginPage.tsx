import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { fetchAuth } from "../helpers";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!username || !password) {
            alert("Username and password are required");
            return;
        }

        try {
            const authResponse = await fetchAuth({ usernameoremail: username, password });

            if ('token' in authResponse) {
                login(authResponse.token);
                navigate("/", { replace: true });
            } else {
                alert(authResponse.details);
            }
        } catch (error) {
            alert("An error occurred while logging in. Please try again later.");
        }
    };

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <div className="container">
                <form>
                    <div className="container">
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="button" // Cambiado de 'submit' a 'button' para evitar el envío del formulario por defecto
                            className="btn btn-primary"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
