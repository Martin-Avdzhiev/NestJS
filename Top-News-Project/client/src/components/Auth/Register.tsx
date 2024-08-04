import { useForm } from "../../hooks/useForm";
import { createUser } from "../../services/userService";
import "./Auth.css";

interface data {
    email: string;
    username: string;
    password: string;
    [key: string]: string;
}
export default function Register() {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUser(formData);
        resetForm();
    };

    const { formData, handleChange, resetForm }
        = useForm<data>({ email: "", username: "", password: "" });
    return (
        <>
            <form method="POST" className="auth-form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <input type="text" placeholder="Email" name="email"
                        value={formData.email}
                        onChange={handleChange} />
                    <input type="text" placeholder="Username" name="username"
                        value={formData.username}
                        onChange={handleChange} />
                    <input type="password" placeholder="Password" name="password"
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}