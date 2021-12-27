import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import postService from "../../../Service/postService";

const userId = localStorage.getItem('userId')

const DeletePost = ({ match }) => {

    useEffect(() => {
        postService.deletePost(match.params.postId)
    }, [match]);

    return (
        <div className="main-container">
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">You Deleted The Post!</p>
                <div className="flex flex-col underline">
                    <NavLink to='/'>Go back to Home</NavLink>
                    <NavLink to={`/profiles/${userId}`}>Go back to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default DeletePost;