import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';

import auth from '../../Service/auth';
import AuthContext from '../../contexts/AuthContext';

const Header = ({ history }) => {
    const { isAuthenticated, username, userId, login } = useContext(AuthContext);

    const navbarLoggedUser =
        <ul className="flex w-full flex justify-between place-items-center">
            <li className="flex ">
                <NavLink className="button " to='/' exact ><i className="fas fa-home"></i></NavLink>
                <NavLink className="button add-post" to="/create-post"><i className="fas fa-plus"></i></NavLink>
                <NavLink className="button ml-10" to={`/friends`}><i className="fas fa-users"></i></NavLink>
                <NavLink className="button ml-10" to={`/about`}><i className="fas fa-question-circle"></i></NavLink>
                {/* <NavLink to=""><i className="fas fa-moon h-6 w-6 text-white"></i></NavLink> */}
            </li>
            <li className="flex">
                <ul className="flex">
                    <li className="welcome-header ml-2 text-xl place-self-center">Welcome </li>
                    <li className="text-xl bg-yellow-800 ml-2 rounded text-gray-900 place-self-center px-2"><NavLink className="button" to={`/profiles/${userId}`}>{username}</NavLink></li>
                    <li className="p-2 ml-10"><NavLink className="button" to={`/messages/${userId}`}>
                        <i className="fab fa-facebook-messenger"></i>
                    </NavLink></li>
                    <li className="p-2"><Link className="button logout ml-10" to="/" onClick={() => {
                        auth.logout(history, login);
                    }}> <i className="fas fa-sign-out-alt"></i></Link></li>
                </ul>
            </li>
        </ul>;

    const navbarAnonymous =
        <ul className="flex">
            <li className="p-2">
                <NavLink className="button ml-2" to='/' exact ><i className="fas fa-home"></i></NavLink>
                <NavLink to="/register"><i className="fas fa-door-closed ml-2"></i></NavLink>
                <NavLink to="/login"><i className="fas fa-door-open ml-2"></i></NavLink>
            </li>
        </ul>;

    return (
        <header className="bg-gray-900 h-12 flex text-3xl fixed w-screen z-10 px-10 text-yellow-800 items-center">
            <nav className="w-full">
                {isAuthenticated ? navbarLoggedUser : navbarAnonymous}
            </nav>
        </header>

    );
}

export default Header;