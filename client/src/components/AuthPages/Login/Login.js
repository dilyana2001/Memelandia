import auth from "../../../Service/auth";

import './Login.css';


const Login = ({ history }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        auth.login(formData)
            .then(data => {
                localStorage.setItem('auth_token', data.accessToken);
                localStorage.setItem('email', data.email);
                localStorage.setItem('username', data.username);
                localStorage.setItem('ownerId', data._id);
                history.push('/')
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Login</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' />
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