import postService from "../../../Service/postService";

import './EditPost.css';
import '../MainPage.css';

const EditPost = ({ match, history }) => {
    const username = localStorage.getItem('username');

    const createPostHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        postService.editPost(match.params.postId, formData, username)
            .then(() => {
                history.push(`/details/${match.params.postId}`)
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Edit Post</h2>
                <form onSubmit={createPostHandler}>
                    <label htmlFor="title-input">Title:</label>
                    <input type="text" placeholder="Title" name="title" id="title-input" />
                    <label htmlFor="img-input">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="img" id="img-input" />
                    <label htmlFor="description-textarea">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description-textarea"/>
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditPost;