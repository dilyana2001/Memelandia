import { useState, useContext } from "react";

import postService from "../../../Service/postService";
import InputError from "../../../Shared/InputError/InputError";
import AuthContext from '../../../contexts/AuthContext';

import '../EditPost/EditPost.css';
import '../MainPage.css';

const CreatePost = ({ history }) => {

    const { isAuthenticated, username, token, userId } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    const createPostHandler = (e) => {
        e.preventDefault();
        const { imageUrl, description } = e.target;
        errorMessageChanger(imageUrl.value, 'ImageUrl is required');
        postService.postPost(imageUrl.value, description.value, username, userId)
            .then(post => history.push(`/details/${post._id}`))
    }
    const onChangeHandler = (e) => errorMessageChanger(e.target.value, 'ImageUrl is required');

    function errorMessageChanger(element, text) {
        element.length < 1 ? setErrorMessage(text) : setErrorMessage('');
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Create Post</h2>
                <form onSubmit={createPostHandler}>
                    <label htmlFor="imageURL">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="imageUrl" id="imageURL" onChange={onChangeHandler} />
                    <InputError>{errorMessage}</InputError>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;