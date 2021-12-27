import { useState, useEffect, useContext } from "react";

import postService from "../../../Service/postService";
import InputError from "../../../Shared/InputError/InputError";
import AuthContext from '../../../contexts/AuthContext';

const EditPost = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);

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
                <p className="text-4xl font-bold mb-4">Edit Post</p>
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