import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from "./Route/Router";
import NavBar from "./NavBar/NavBar"
import JoblyApi from "./Api/Api";
import { jwtDecode } from 'jwt-decode';
import {UserContext} from "./Auth/UserContext";
import useLocalStorage from './Auth/UseLocalStorage';


function App() {

  const [token, setToken] = useLocalStorage("jobly-token");
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationsIds] = useState(new Set([]));
 

  useEffect(() => {
    async function fetchUser() {
      if(token) {
        try {
          JoblyApi.token = token;
          const { username } = jwtDecode(token);
          const user = await JoblyApi.getCurrentUser(username);
          setCurrentUser(user);
          setApplicationsIds(new Set(user.applications));
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      }
    }
    
    fetchUser();
  },[token]);

  async function signup(data) {
    try {
      const token = await JoblyApi.signup(data);
      setToken(token);
      return {login: true};
    } catch (error) {
      console.error("Sign up failed", error);
      return {login: false, error}
    }
  }
  
  async function login(data) {
    try {
      const token = await JoblyApi.login(data);
      console.log("Login response token:", token);
      if(token){
        setToken(token);
      }
      return {login: true };
    } catch (error) {
      console.error("Login Failed", error);
      return {login: false, error}
    }
  }

  async function logout() {
    setToken(null);
    setCurrentUser(null);
  }

  function hasAppliedToJob(id){
    return applicationIds.has(id);
  }

  function applyToJob(id){
    if(hasAppliedToJob(id))return;
    try {
      JoblyApi.applyToJob(currentUser.username, id);
      setApplicationsIds(new Set([...applicationIds, id]));
    } catch (error) {
      console.error("Error applying to job:", error);
    }
    
  }


  return(
    <UserContext.Provider value={{currentUser, login, signup, logout, hasAppliedToJob, applyToJob}}>
    <BrowserRouter>
      <NavBar logout={logout}></NavBar>
      <Router login={login} signup={signup}></Router>
    </BrowserRouter>
    </UserContext.Provider>
  )
}
export default App;