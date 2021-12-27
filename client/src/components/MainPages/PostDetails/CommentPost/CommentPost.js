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
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Comment</p>
                <form onSubmit={commentPostHandler} className="flex flex-col">
                    <textarea type="text" name="comment" id="comment" className="rounded"/>
                    <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Comment!</button>
                </form>
            </div>
        </div>
    );
    
}

export default CommentPost;