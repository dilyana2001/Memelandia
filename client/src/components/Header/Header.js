import { NavLink } from 'react-router-dom';

const Header = () => {
    const username = localStorage.getItem('username');
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-logged-user">
                    <div className="first-bar">
                        <NavLink className="button" to='/'>Home</NavLink>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome, {username || 'guest'}</li>
                            <li><NavLink to="#">Logout</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li><NavLink to="#">Register</NavLink></li>
                        <li><NavLink to="#">Login</NavLink></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}


export default Header;