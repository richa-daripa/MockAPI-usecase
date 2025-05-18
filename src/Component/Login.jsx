import React from 'react';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import {isValid} from "../info.js";

const username = "Richard";
const password = "Ygy@657s";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    /*const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");*/
    const navigate = useNavigate();


    /*const handleSubmit = (e) => {
        e.preventDefault();
        if (name === username && pwd === password) {
            navigate("/details");
        }else if(name !== username){
            alert("Invalid username");
        }else if(pwd !== password){
            alert("Invalid password");
        }
    }*/
    const onSubmit = (data) => {
        //console.log("Submitted the form", data);
        if (data.uname === username && data.passwd === password) {
            navigate("/details");
        }else if(data.uname !== username){
            alert("Invalid username");
        }else if(data.passwd !== password){
            alert("Invalid password");
        }
    }

    return (
        <div className="login">
            <form className="content" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div className="field">
                    <label>Username</label><br />
                    <input type="text" {...register("uname", { required: "This input is required", pattern: { value: /^[a-zA-Z]{5,}$/, message: "Should contain only alphabets" } })} />
                    {errors.uname && <span className='error-msg'>{errors.uname.message}</span>}
                </div>
                <div className="field">
                    <label>Password</label><br />
                    <input type="password" {...register("passwd", { required: "This input is required", validate: isValid})} />
                    {errors.passwd && <span className='error-msg'>{errors.passwd.message}</span>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Login;