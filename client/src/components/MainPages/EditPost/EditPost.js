import { useState, useEffect } from "react";

import postService from "../../../Service/postService";
import InputError from "../../../Shared/InputError/InputError";

import './EditPost.css';
import '../MainPage.css';

const EditPost = ({ match, history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const [post, setPost] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost);
    }, [match]);

    const editPostHandler = (e) => {
        e.preventDefault();
        const { imageUrl, description } = e.target;
        errorMessageChanger(imageUrl.value, 'ImageUrl is required');
        if (imageUrl.value.length < 1 || !imageUrl.value.startsWith('http')) {
            return
        }
        postService.editPost(post._id, imageUrl.value, description.value, username, userId)
            .then(() => history.push(`/details/${post._id}`));
    }

    const onChangeHandler = (e) => errorMessageChanger(e.target.value, 'ImageUrl is required');

    function errorMessageChanger(element, text) {
        element.length < 1 ? setErrorMessage(text) : setErrorMessage('');
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Edit Post</h2>
                <form onSubmit={editPostHandler}>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" defaultValue={post.imageUrl} name="imageUrl" id="imageUrl" onChange={onChangeHandler} />
                    <InputError>{errorMessage}</InputError>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" defaultValue={post.description} name="description" id="description" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditPost;