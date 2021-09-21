import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import postService from "../../../Service/postService";

import './PostDetails.css';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost)
    }, [match])

    return (
        <div className="postTemplate container">
            <p className="description">{post._ownerName} post:</p>
            <nav className="postDetails-header-nav">
                <ul>
                    <li>
                        <h3>{post.title}</h3>
                    </li>
                    <li>
                        <NavLink to={`/edit/${post._id}`}><button className="button">Edit</button></NavLink>
                        <NavLink to={`/delete/${post._id}`}><button className="button">Delete</button></NavLink>
                    </li>
                </ul>
            </nav>
            <p className="img"><img src={post.img} /></p>
            <p className="description">{post.description}</p>
            <div className="post-info">
                <span> 10 people likes that.</span>
                <NavLink to='/'><button className="button">Like</button></NavLink>
                <NavLink to='/'><button className="button">Unlike</button></NavLink>
                <NavLink to={`/share-post/${post._id}`}><button className="button">Share</button></NavLink>
            </div>
        </div>
    );
}
export default PostDetails;