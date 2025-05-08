import React from 'react';
import './style.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const username = "Richard";
const password = "Ygy@657s";

const Login = () => {

    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === username && pwd === password) {
            navigate("/details");
        }else{
            alert("Either username or password is wrong");
        }
    }

    return (
        <div className="login">
            <form className="content" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <div className="field">
                    <label>Username</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="field">
                    <label>Password</label><br />
                    <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Login;