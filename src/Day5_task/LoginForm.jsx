import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        Swal.fire({
            title: 'Login Info',
            html: `<strong>Email:</strong> ${email}<br><strong>Password:</strong> ${password}`,
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#f0f0f0',
            color: '#333'
          });
    }

    return (
        <form onSubmit={handleSubmit} className="card">
            <h2>Login Form</h2>

            <label>Email :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password :</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit" className="btn">Login</button>
        </form>
    );
}

export default LoginForm;