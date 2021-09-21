import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import postService from "../../../Service/postService"

import './SharePost.css';

const SharePost = ({ match, history }) => {

    const [post, setPost] = useState({});

    let username = localStorage.getItem('username');

    useEffect(() => {
        postService.postExistingPost(match.params.postId, username)
            .then(res => {
                console.log(res);
                setPost(res)
            })
    }, [match])
    return (
        <div>
            <h3>You Shared the Post!</h3>
            <NavLink to='/'>Go back to Home</NavLink>
        </div>
    );
}
export default SharePost;