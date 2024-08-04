import "./Auth.css";

export default function Login(){
    return (
        <>
        <form method="POST" className="auth-form">
            <div className="form-inputs">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </div>
            <button type="submit">Login</button>
        </form>
        </>
    )
}