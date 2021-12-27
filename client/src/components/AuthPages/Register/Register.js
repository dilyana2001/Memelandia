import auth from "../../../Service/auth";

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
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Register</p>
                <form onSubmit={onSubmitHandler} className="flex flex-col">
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" id="username" aria-describedby="usernameHelp" name="username" className="rounded" />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" className="rounded" />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="rePass" className="form-label">Confirm Password</label>
                        <input type="password" id="rePass" name="rePass" className="rounded" />
                    </div>
                    <button type="submit" className="mt-2 bg-gray-700 text-yellow-700 py-1">Submit</button>
                </form>
            </div>
        </div>
    );


}
export default Register;