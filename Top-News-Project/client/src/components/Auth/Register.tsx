import "./Auth.css";

export default function Register(){
    return (
        <>
        <form method="POST" className="auth-form">
            <div className="form-inputs">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </div>
            <button type="submit">Register</button>
        </form>
        </>
    )
}