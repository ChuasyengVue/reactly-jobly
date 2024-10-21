import React, { useState, useContext, useEffect } from "react";
import JoblyApi from "../Api/Api";
import { UserContext } from "./UserContext";


const ProfileForm = () => {
  
    const {currentUser, updateUser} = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });

  useEffect(() => {
    if(currentUser) {
        setFormData({
            
            firstName:currentUser.firstName || '',
            lastName:currentUser.lastName || '',
            email:currentUser.email || '',
            password:currentUser.password || ''
        });
    }
  },[currentUser]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const updatedUser = await JoblyApi.updateProfile(currentUser.username, formData); // Update user profile
      updateUser(updatedUser);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update failed", err);
      
    }
  }

  async function handleChange(evt) {

    const {name, value} = evt.target;
    setFormData(formData => ({...formData, [name]:value}));
  }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username</label>
      <input name="username" value={formData.username} disabled />
      </div>
      <div>
      <label>First Name</label>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Last Name</label>
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label>Password</label>
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
