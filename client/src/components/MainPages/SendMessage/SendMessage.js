import { useState, useContext } from 'react';

import auth from '../../../Service/auth';
import InputError from '../../../Shared/InputError/InputError';
import AuthContext from '../../../contexts/AuthContext';

import '../MainPage.css';

const SendMessage = ({ match, history }) => {

    const { isAuthenticated, senderUsername, token, senderId } = useContext(AuthContext);

    const receiverId = match.params.userId;

    const [errorMessage, setErrorMessage] = useState('');

    const sendMessageHandler = (e) => {
        e.preventDefault();
        const { title, description } = e.target;
        auth.sendMessage(title.value, description.value, receiverId, senderId, senderUsername)
            .then(() => history.push(`/friends`))
    }

    const onChangeHandler = (e) => {
        if (e.target.value.length < 1) {
            setErrorMessage('Enter message');
        } else {
            setErrorMessage('');
        }
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Send Message</h2>
                <form onSubmit={sendMessageHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title" id="title" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" placeholder="Description" id="description" onChange={onChangeHandler} />
                    <InputError>{errorMessage}</InputError>
                    <button>Send!</button>
                </form>
            </div>
        </div>
    );
}

export default SendMessage;