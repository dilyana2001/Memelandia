import '../MainPage.css';

const SendMessage = () => {

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Send Message</h2>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title" id="title" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" placeholder="Description" id="description" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default SendMessage;