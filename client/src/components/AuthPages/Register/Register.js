import auth from "../../../Service/auth";

import './Register.css';

const Register = ({ history }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (formData.get('password') == formData.get('rePass') && formData.get('password').length > 4 && formData.get('username').length > 4) {
            auth.register(formData)
                .then(data => {
                    if (data.message.code != 409) {
                        localStorage.setItem('userId', data._id);
                        const username = localStorage.getItem('username');
                        const userId = localStorage.getItem('userId');
                        auth.postProfileInfo(username, userId);
                        localStorage.removeItem('userId')
                        history.push('/login');
                    } else {
                        alert(data.message.message)
                    }
                })
        } else {
            alert(`Username and password need to be at least five symbols!`)
        }
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