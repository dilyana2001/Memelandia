import { useContext, useState } from "react";

import postService from "../../../../Service/postService";
import AuthContext from "../../../../contexts/AuthContext";

const CommentPost = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);
    const [error, setError] = useState('');

    const commentPostHandler = (e) => {
        e.preventDefault();
        const { comment } = e.target;
        if (!comment.value) {
            return setError('Enter comment!')
        }
        postService.commentPost(match.params.postId, comment.value, username, userId)
            .then(() => {
                history.push(`/details/${match.params.postId}`)
            })
    }

    const onChangeHandler = (e) => {
        if (e.target.value) {
            setError('')
        }
    }

    return (
        <div className="main-container">
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">Comment</p>
                <form onSubmit={commentPostHandler} className="flex flex-col">
                    <textarea type="text" name="comment" id="comment" className="rounded" onChange={onChangeHandler} />
                    <p className="text-sm text-red-700 italic">{error}</p>
                    <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Comment!</button>
                </form>
            </div>
        </div>
    );

}

export default CommentPost;