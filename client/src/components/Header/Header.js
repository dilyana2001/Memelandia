import { NavLink } from 'react-router-dom';

import auth from '../../Service/auth';

import './Header.css';

const Header = () => {

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token')

    const navbarLoggedUser =
        <ul className="navbar-logged-user">
            <li className="first-bar">
                <NavLink className="button" to='/' exact >Home</NavLink>
                <NavLink className="button" to="/create-post">Create Post</NavLink>
                <NavLink className="button" to={`/profile`}>Profile</NavLink>
            </li>
            <li className="second-bar">
                <ul>
                    <li className="welcome-header">Welcome, {username}</li>
                    <li><NavLink to="#" onClick={() => {
                        auth.logout();
                    }}> Logout</NavLink></li>
                </ul>
            </li>
        </ul>;

    const navbarAnonymous =
        <ul className="navbar-anonymous">
            <li>
            <NavLink className="button" to='/' exact >Home</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>;

    return (
        <header className="site-header">
            <nav className="navbar">
                {token != null ? navbarLoggedUser : navbarAnonymous}
            </nav>
        </header>
    );
}


export default Header;