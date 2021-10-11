import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import auth from '../../Service/auth';

import './Header.css';

const Header = () => {

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages)
    }, [])

    const navbarLoggedUser =
        <ul className="navbar-logged-user">
            <li className="first-bar">
                <NavLink className="button" to='/' exact >Home</NavLink>
                <Link className="button add-post" to="/create-post"><i class="fas fa-plus"></i></Link>
                <NavLink className="button" to={`/friends`}>Find Friends</NavLink>
                <NavLink className="button" to={`/about`}>About</NavLink>
            </li>
            <li className="second-bar">
                <ul>
                    <li className="welcome-header">Welcome,</li>
                    <li><NavLink className="button" to={`/profiles/${userId}`}>{username}</NavLink></li>
                    <li><NavLink className="button" to={`/messages/${userId}`}>{messages.length}</NavLink></li>
                    <li><Link className="button logout" to="#" onClick={() => {
                        auth.logout();
                    }}> Logout</Link></li>
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