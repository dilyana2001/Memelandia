import auth from "../../../../Service/auth";

const ContactUs = ({ history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const sendFeedbackHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.sendFeedback(formData, username, userId)
            .then(() => history.push(`/about`))
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Send feedback</h2>
                <form onSubmit={sendFeedbackHandler}>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" placeholder="email" name="email" id="email" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description" />
                    <button>Send!</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;