import auth from "../../../Service/auth";

import './Register.css';

const Register = ({ history }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { username, password, rePass } = e.target;

        if (password.value.length <= 4 || username.value.length <= 4) {
            return alert(`Username and password need to be at least five symbols!`);
        }
        if (password.value !== rePass.value) {
            return alert(`Passwords didn't match!`);
        }

        auth.register(username.value, password.value)
            .then(data => {
                if (data.code) {
                    return alert(data.message)
                }
                auth.postProfileInfo(data.username, data._id);
                history.push('/login');
                alert(`Your registeration is successful! Please login.`);
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rePass" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="rePass" name='rePass' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Register;