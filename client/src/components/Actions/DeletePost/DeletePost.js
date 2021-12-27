import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import postService from "../../../Service/postService";

import "../SharePost/SharePost"

const userId = localStorage.getItem('userId')

const DeletePost = ({ match }) => {

    useEffect(() => {
        postService.deletePost(match.params.postId)
    }, [match]);

    return (
        <div className="main-container">
            <div className="you-shared-delete-section">
                <h3 className="text-4xl font-bold mb-4">You Deleted The Post!</h3>
                <div className="go-back">
                    <NavLink to='/'>Go back to Home</NavLink>
                    <NavLink to={`/profiles/${userId}`}>Go back to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default DeletePost;