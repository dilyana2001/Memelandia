import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import postService from "../../../Service/postService"

import './SharePost.css';

const SharePost = ({ match, history }) => {

    const [post, setPost] = useState({});

    let userId = localStorage.getItem('userId');
    let username = localStorage.getItem('username');

    useEffect(() => {
        postService.postExistingPost(match.params.postId, userId, username)
            .then(setPost)
    }, [match])
    return (
        <div className="main-container">
            <div className="you-shared-delete-section">
                <h3>You Shared the Post!</h3>
                <div className="go-back">
                    <NavLink to='/'>Go to Home</NavLink>
                    <NavLink to='/profile'>Go to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default SharePost;