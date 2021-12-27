import { useState, useContext } from "react";

import postService from "../../../Service/postService";
import InputError from "../../../Shared/InputError/InputError";
import AuthContext from '../../../contexts/AuthContext';

const CreatePost = ({ history }) => {

    const { username, userId } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');

    const createPostHandler = (e) => {
        e.preventDefault();
        const { imageUrl, description } = e.target;
        if(!imageUrl.value){
          return errorMessageChanger(imageUrl.value, 'ImageUrl is required');
        }
        postService.postPost(imageUrl.value, description.value, username, userId)
            .then(post => history.push(`/details/${post._id}`))
    }
    const onChangeHandler = (e) => errorMessageChanger(e.target.value, 'ImageUrl is required');

    function errorMessageChanger(element, text) {
        element.length < 1 ? setErrorMessage(text) : setErrorMessage('');
    }

    return (
        <div className="main-container">
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Create Post</p>
                <form onSubmit={createPostHandler} className="flex flex-col">
                    <label htmlFor="imageURL">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="imageUrl" id="imageURL" onChange={onChangeHandler} className="rounded" />
                    <InputError>{errorMessage}</InputError>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description" className="rounded" />
                    <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Post!</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;