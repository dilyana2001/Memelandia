import auth from "../../../Service/auth";

import './Login.css';


const Login = ({ history }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        auth.login(formData)
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data._id);
                const username = localStorage.getItem('username');
                const userId = localStorage.getItem('userId');
                auth.postProfileInfo(username, userId);
                history.push('/');
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Login</h2>
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