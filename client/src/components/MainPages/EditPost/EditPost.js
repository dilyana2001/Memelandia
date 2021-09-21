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
            <h2>Edit Post</h2>
            <form onSubmit={createPostHandler}>
                <input type="text" placeholder="Title" name="title" />
                <input type="text" placeholder="imageURL" name="img" />
                <textarea type="text" placeholder="Description" name="description" />
                <button>Post!</button>
            </form>
        </div>
    );
}

export default EditPost;