import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import postService from "../../../Service/postService";

import './DeletePost.css';


const DeletePost = ({ match }) => {

    useEffect(() => {
        postService.deletePost(match.params.postId)
    }, [match]);

    return (
        <div>
            <h3>You Deleted The Post!</h3>
            <NavLink to='/'>Go back to Home</NavLink>
            <NavLink to='/profile'>Go back to Profile</NavLink>
        </div>
    );
}
export default DeletePost;