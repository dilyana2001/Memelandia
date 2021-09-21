import postService from "../../../Service/postService";

import './CreatePost.css';
import '../MainPage.css';

const CreatePost = ({history }) => {
    const username = localStorage.getItem('username')

    const createPostHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        postService.postPost(formData, username)
            .then((meme) => {
                history.push(`/details/${meme._id}`)
            })
    }

    return (
        <div className="main-container">
            <h2>Create Post</h2>
            <form onSubmit={createPostHandler}>
                <input type="text" placeholder="Title" name="title" />
                <input type="text" placeholder="imageURL" name="img" />
                <textarea type="text" placeholder="Description" name="description" />
                <button>Post!</button>
            </form>
        </div>
    );
}

export default CreatePost;