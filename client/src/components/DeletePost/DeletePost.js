import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import postService from "../../Service/postService";

const DeletePost = ({ match }) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        postService.deletePost(match.params.postId)
    }, [match])

    return (
        <div>npm 
            <h3>You Deleted The Post!</h3>
            <NavLink to='/'>Go back to Home</NavLink>
        </div>
    );
}
export default DeletePost;