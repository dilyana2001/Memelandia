import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';

import auth from '../../Service/auth';
import AuthContext from '../../contexts/AuthContext';

import './Header.css';

const Header = ({history}) => {
    const { isAuthenticated, username, userId, login } = useContext(AuthContext);

    const navbarLoggedUser =
        <ul className="navbar-logged-user">
            <li className="first-bar">
                <NavLink className="button" to='/' exact ><i className="fas fa-home"></i></NavLink>
                <Link className="button add-post" to="/create-post"><i className="fas fa-plus"></i></Link>
                <NavLink className="button" to={`/friends`}><i className="fas fa-users"></i></NavLink>
                <NavLink className="button" to={`/about`}><i className="fas fa-question-circle"></i></NavLink>
            </li>
            <li className="second-bar">
                <ul>
                    <li className="welcome-header">Welcome,</li>
                    <li><NavLink className="button" to={`/profiles/${userId}`}>{username}</NavLink></li>
                    <li><NavLink className="button" to={`/messages/${userId}`}>
                    <i className="fab fa-facebook-messenger"></i>
                    </NavLink></li>
                    <li><Link className="button logout" to="/" onClick={() => {
                        auth.logout(history, login);
                    }}> <i className="fas fa-sign-out-alt"></i></Link></li>
                </ul>
            </li>
        </ul>;

    const navbarAnonymous =
        <ul className="navbar-anonymous">
            <li>
                <NavLink className="button" to='/' exact ><i className="fas fa-home"></i></NavLink>
                <NavLink to="/register"><i className="fas fa-door-closed"></i></NavLink>
                <NavLink to="/login"><i className="fas fa-door-open"></i></NavLink>
            </li>
        </ul>;

    return (
        <header className="site-header z-10">
            <nav className="navbar">
                {isAuthenticated ? navbarLoggedUser : navbarAnonymous}
            </nav>
        </header>
    );
}

export default Header;