import { useState, useEffect } from "react";

import postService from "../../../Service/postService";

import './EditPost.css';
import '../MainPage.css';

const EditPost = ({ match, history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const [post, setPost] = useState({})

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost)
    }, [])

    const editPostHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        postService.editPost(match.params.postId, formData, username, userId)
            .then(() => {
                history.push(`/details/${match.params.postId}`)
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Edit Post</h2>
                <form onSubmit={editPostHandler}>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" defaultValue={post.imageUrl} name="imageUrl" id="imageUrl" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" defaultValue={post.description} name="description" id="description" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditPost;