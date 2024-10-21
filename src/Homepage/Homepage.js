import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../Auth/UserContext";
import './Homepage.scss';
import './Homepage.css';

const Homepage = () => {

    const { currentUser } = useContext(UserContext);

    return(
        <div className="homepage">
            <h1 className="text">Jobly</h1>
            <p className="text"> All the jobs in one, convenient place.</p>
            {currentUser ? (
                <h2>Welcome Back, { currentUser.username }!</h2>
            ) : (
                <p>
                     <Link className="btn btn-primary font-weight-bold mr-3" to='/login'>Login</Link>
                     <Link className="btn btn-primary font-weight-bold" to='/signup'>Sign Up</Link>
                </p>
            )}
        </div>
    )
}

export default Homepage;