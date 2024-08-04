import { useForm } from "../../hooks/useForm";

import "./Auth.css";

interface data {
    username: string;
    password: string;
    [key: string]: string;
}

export default function Login() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetForm();
    };

    const { formData, handleChange, resetForm }
        = useForm<data>({ username: "", password: "" });
    return (
        <>
            <form method="POST" className="auth-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <input type="text" placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} />
                    <input type="password" placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}