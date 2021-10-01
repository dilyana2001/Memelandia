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
                console.log(meme)
                // history.push(`/details/${meme._id}`)
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Create Post</h2>
                <form onSubmit={createPostHandler}>
                    <label htmlFor="title-input-create">Title:</label>
                    <input type="text" placeholder="Title" name="title" id="title-input-create" />
                    <label htmlFor="img-input-create">Image URL:</label>
                    <input type="text" placeholder="imageURL" name="imageUrl" id="img-input-create" />
                    <label htmlFor="description-textarea-create">Description:</label>
                    <textarea type="text" placeholder="Description" name="description" id="description-textarea-create" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;