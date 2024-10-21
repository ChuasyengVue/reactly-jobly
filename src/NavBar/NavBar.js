import React, {useContext} from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';
import { UserContext } from "../Auth/UserContext";
import './NavBar.css';

const NavBar = ({logout}) => {

    const {currentUser} = useContext(UserContext);

    // If user is logged in, show companies/jobs/profile/logout links
    function LoggedInNav() {
        return(
            <Nav className="ml-auto">
                <NavLink className="nav-item" to="/companies" >Companies</NavLink>
                <NavLink className="nav-item" to="/jobs" >Jobs</NavLink>
                <NavLink className="nav-item" to="/profile" >Profile</NavLink>
                <NavLink className="nav-item" to='/' onClick={logout}>Logout {currentUser.username}</NavLink>
            </Nav>
        )
    }

    // If user is not logged in, show login/signup
    function LoggedOutNav() {
        return(
            <Nav>
                <NavLink className="nav-item" to="/login" >Login</NavLink>
                <NavLink className="nav-item" to="/signup" >Sign Up</NavLink>
            </Nav>
        )
    }
    
    return(
        <Navbar className="navbar" expand="md">
            <NavLink className="navbar-home"to='/'>Jobly</NavLink>
           {currentUser ? LoggedInNav() : LoggedOutNav()}
        </Navbar>
    )
}
export default NavBar;