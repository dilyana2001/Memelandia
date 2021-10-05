import postService from "../../../../Service/postService";

const CommentPost = ({ match, history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const commentPostHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        postService.commentPost(match.params.postId, formData, username, userId)
            .then(() => {
                history.push(`/details/${match.params.postId}`)
            })
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Comment</h2>
                <form onSubmit={commentPostHandler}>
                    <textarea type="text" name="comment" id="comment" />
                    <button>Comment!</button>
                </form>
            </div>
        </div>
    );
}

export default CommentPost;