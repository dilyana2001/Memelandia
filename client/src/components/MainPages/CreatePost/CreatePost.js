import postService from "../../../Service/postService";

import '../EditPost/EditPost.css';
import '../MainPage.css';

const CreatePost = ({ history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const createPostHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        postService.postPost(formData, username, userId)
            .then((meme) => {
                history.push(`/details/${meme._id}`)
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Create Post</h2>
                <form onSubmit={createPostHandler}>
                    <label htmlFor="description">Description:</label>
                    <input type="text" placeholder="Description" name="description" id="description" />
                    <label htmlFor="imageURL">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="imageUrl" id="imageURL" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;