import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';

import auth from '../../Service/auth';
import AuthContext from '../../contexts/AuthContext';

import './Header.css';

const Header = ({messages, history}) => {
    const { isAuthenticated, username, userId, login } = useContext(AuthContext);

    const navbarLoggedUser =
        <ul className="navbar-logged-user">
            <li className="first-bar">
                <NavLink className="button" to='/' exact >Home</NavLink>
                <Link className="button add-post" to="/create-post"><i className="fas fa-plus"></i></Link>
                <NavLink className="button" to={`/friends`}>Find Friends</NavLink>
                <NavLink className="button" to={`/about`}>About</NavLink>
            </li>
            <li className="second-bar">
                <ul>
                    <li className="welcome-header">Welcome,</li>
                    <li><NavLink className="button" to={`/profiles/${userId}`}>{username}</NavLink></li>
                    <li><NavLink className="button" to={`/messages/${userId}`}>
                      {messages}
                    </NavLink></li>
                    <li><Link className="button logout" to="/" onClick={() => {
                        auth.logout(history, login);
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
                {isAuthenticated ? navbarLoggedUser : navbarAnonymous}
            </nav>
        </header>
    );
}

export default Header;