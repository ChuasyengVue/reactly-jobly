import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ login }) => {
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        username:"",
        password:""
    });

    const handleChange = (evt) =>{
        const {name, value} = evt.target;
        setFormData(formData => ({...formData, [name]:value }));
    }

    const handleSubmit = async (evt) =>{
        evt.prevenDefault();
        try {
            await login(formData)
            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <div>
                    <label>Username</label>
                    <input 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                <button type='submit'> Submit </button>
            </form>
        </div>
    )

}

export default LoginForm;