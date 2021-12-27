import { useState, useContext } from 'react';

import auth from '../../../Service/auth';
import InputError from '../../../Shared/InputError/InputError';
import AuthContext from '../../../contexts/AuthContext';
const SendMessage = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);

    const receiverId = match.params.userId;

    const [errorMessage, setErrorMessage] = useState('');

    const sendMessageHandler = (e) => {
        e.preventDefault();
        const { title, description } = e.target;
        if (!description.value) {
            return setErrorMessage('Enter message');
        }
        auth.sendMessage(title.value, description.value, receiverId, userId, username)
            .then(() => history.push(`/friends`))
    }

    const onChangeHandler = (e) => {
        if (!e.target.value) {
            return setErrorMessage('Enter message'); // for check  remove that error
        }
        return setErrorMessage('');
    }

    return (
        <div className="main-container">
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-2xl font-bold mb-4">Send Message</p>
                <form onSubmit={sendMessageHandler} className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title" id="title" className="rounded" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" placeholder="Description" id="description" onChange={onChangeHandler} className="rounded" />
                    <InputError>{errorMessage}</InputError>
                    <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Send!</button>
                </form>
            </div>
        </div>
    );
}

export default SendMessage;