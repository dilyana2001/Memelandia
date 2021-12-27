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
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Login</p>
                <form onSubmit={onSubmitHandler} className="flex flex-col">
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" id="username" name="username" className="rounded" />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" className="rounded" />
                    </div>
                    <button type="submit" className="mt-2 bg-gray-700 text-yellow-700 py-1">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;