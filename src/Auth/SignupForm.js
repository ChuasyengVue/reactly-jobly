import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = ({ signup }) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
    });

    

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]:value
        }));
    }

    const handleSubmit = async(evt) => {
        evt.preventDefault();

        try {
            await signup(formData);
            navigate('/');  //Redirects to homepage if sign up success.
        } catch (error) {
            console.error("Sign up failed:" , error);
        }

    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div>
                    <label>Username</label>
                    <input
                    name="username"
                    type="text"
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

                <div>
                    <label>First Name</label>
                    <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Signup;