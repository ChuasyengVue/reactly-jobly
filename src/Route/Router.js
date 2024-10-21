import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Homepage from '../Homepage/Homepage';
import CompanyList from '../Companies/CompanyList';
import CompanyDetail from '../Companies/CompanyDetails';
import JobList from '../Jobs/JobList';
import LoginForm from '../Auth/LoginForm';
import SignupForm from'../Auth/SignupForm';
import ProfileForm from '../Auth/ProfileForm';



const Router = ({login, signup}) => {
    

    return (
        <Routes> 
            <Route path='/' element={<Homepage />} />   
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/companies/:handle' element={<CompanyDetail />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/login' element={<LoginForm login={login}/>} />
            <Route path='/signup' element={<SignupForm signup={signup}/>} />
            <Route path='/profile' element={<ProfileForm />} />
        </Routes>
    );
};

export default Router;
