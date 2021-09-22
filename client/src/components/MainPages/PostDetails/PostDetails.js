import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import postService from "../../../Service/postService";

import './PostDetails.css';
import '../MainPage.css';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost)
    }, [match])

    return (
        <div className="main-container">
            <div className="postDetails">
                <div className="user-info">
                    <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" />
                    <p className="username-paragraph">{post._ownerName} post:</p>
                </div>
                <nav className="postDetails-header-nav">
                    <ul>
                        <li>
                            <h3>{post.title}</h3>
                        </li>
                        <li>
                            <NavLink to={`/edit/${post._id}`}>Edit</NavLink>
                            <NavLink to={`/delete/${post._id}`}>Delete</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="description-post-info">
                    <p className="img"><img src={post.img} /></p>
                    <section>
                        <p className="description">{post.description || 'Description...'}</p>
                        <div className="post-info">
                            <span> 10 people likes that.</span>
                            <NavLink to='/'>Like</NavLink>
                            <NavLink to='/'>Unlike</NavLink>
                            <NavLink to={`/share-post/${post._id}`}>Share</NavLink>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
}
export default PostDetails;