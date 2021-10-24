import postService from "../../../Service/postService";

import '../EditPost/EditPost.css';
import '../MainPage.css';

const CreatePost = ({ history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const createPostHandler = (e) => {
        e.preventDefault();
        const { imageUrl, description } = e.target;
        postService.postPost(imageUrl.value, description.value, username, userId)
            .then(post => history.push(`/details/${post._id}`))
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Create Post</h2>
                <form onSubmit={createPostHandler}>
                    <label htmlFor="imageURL">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="imageUrl" id="imageURL" />
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;