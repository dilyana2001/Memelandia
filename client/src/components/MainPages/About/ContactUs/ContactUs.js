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
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Send feedback</p>
                <form onSubmit={sendFeedbackHandler} className="flex flex-col">
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" placeholder="email" name="email" id="email" className="rounded" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description" className="rounded" />
                    <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Send!</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;