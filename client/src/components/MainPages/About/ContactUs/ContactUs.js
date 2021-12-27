import auth from "../../../../Service/auth";

const ContactUs = ({ history }) => {

    const sendFeedbackHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.sendFeedback(formData)
            .then(history.push(`/about`))
    }

    return (
        <div className="main-container">
            <div className="editForm">
            <p className="text-4xl font-bold mb-4">Send feedback</p>
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