import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import postService from "../../../Service/postService";

import "../SharePost/SharePost"


const DeletePost = ({ match }) => {

    useEffect(() => {
        postService.deletePost(match.params.postId)
    }, [match]);

    return (
        <div className="main-container">
            <div className="you-shared-delete-section">
                <h3>You Deleted The Post!</h3>
                <div className="go-back">
                    <NavLink to='/'>Go back to Home</NavLink>
                    <NavLink to='/profile'>Go back to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default DeletePost;