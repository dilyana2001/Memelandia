import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import postService from "../../../Service/postService";
import AuthContext from '../../../contexts/AuthContext';

import './SharePost.css';

const SharePost = ({ match }) => {

    const [post, setPost] = useState({});

    const { username, userId } = useContext(AuthContext);

    useEffect(() => {
        postService.postExistingPost(match.params.postId, userId, username)
            .then(setPost)
    }, [match]);

    return (
        <div className="main-container">
            <div className="you-shared-delete-section">
                <h3>You Shared the Post!</h3>
                <div className="go-back">
                    <NavLink to='/'>Go to Home</NavLink>
                    <NavLink to={`/profiles/${userId}`}>Go to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default SharePost;