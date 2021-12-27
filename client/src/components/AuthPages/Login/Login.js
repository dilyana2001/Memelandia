import auth from "../../../Service/auth";
import { useContext } from "react";
import AuthContext from '../../../contexts/AuthContext';

const Login = ({ history }) => {
    const { login } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { username, password } = e.target;
        auth.login(username.value, password.value)
            .then(data => {
                if (data.token === undefined) {
                    return alert(data.message);
                }

                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data._id);
                login({ token: data.token, username: data.username, userId: data._id });
                history.push('/');
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2 className="text-4xl font-bold mb-4">Login</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;