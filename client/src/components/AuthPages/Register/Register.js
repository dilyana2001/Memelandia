import auth from "../../../Service/auth";

import './Register.css';

const Register = ({ history }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        auth.register(formData)
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
            <h2>Register</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" name='username' />
                        <div id="usernameHelp" className="form-text">Please, enter your nickname.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rePass" className="form-label">Password</label>
                        <input type="password" className="form-control" id="rePass" name='rePass' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Register;