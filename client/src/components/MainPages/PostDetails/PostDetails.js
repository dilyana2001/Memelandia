import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import postService from "../../../Service/postService";
import auth from "../../../Service/auth";
import CommentTemplate from '../../ComponentTemplates/CommentTemplate/CommentTemplate'

import './PostDetails.css';
import '../MainPage.css';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [profile, setProfile] = useState({});
    const [likes, setLikes] = useState([]);
    let [myLike, setMyLike] = useState({});

    const userId = localStorage.getItem('userId');
    const postId = match.params.postId;

    useEffect(() => {
        postService.getPost(postId)
            .then(post => {
                getProfileInfo(post.userId);
                return setPost(post);
            })
    }, [match]);

    useEffect(() => {
        postService.getAllComments(postId)
            .then(setComments)
    }, [match]);

    function getProfileInfo(userId) {
        auth.getProfileInfo(userId)
            .then(setProfile);
    }

    useEffect(() => {
        postService.getLikes(postId)
            .then(setLikes)
    }, [match]);

    useEffect(() => {
        postService.isPostLikedByUser(postId, userId)
            .then(setMyLike)
    }, [match]);

    const revokeLike = () => {
        if (myLike) {
        postService.removeLike(postId, userId)
        }
    }

    function putLikes() {
        if (!myLike) {
            postService.putLike(postId, userId)
        }
    }

    const ownerEditDeleteBtns = <li>
        <NavLink to={`/edit/${post._id}`}>Edit</NavLink>
        <NavLink to={`/delete/${post._id}`}>Delete</NavLink>
    </li>;

    return (
        <div className="main-container">
            <div className="postDetails">
                <div className="user-info">
                    <NavLink to={`/profiles/${post.userId}`}>  <img className="profile-image"
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                    <p className="username-paragraph">{post.username} post:</p>
                </div>
                <nav className="postDetails-header-nav">
                    <ul>
                        <li>
                            <h3></h3>
                        </li>
                        {userId == post.userId ? ownerEditDeleteBtns : ''}
                    </ul>
                </nav>
                <div className="description-post-info">
                    <p className="img"><img src={post.imageUrl} /></p>
                    <section>
                        <p className="description">{post.description}</p>
                        <section>
                            <div className="comment-container">
                                <ul className="comment-list">
                                    {comments?.map(x =>
                                        <CommentTemplate
                                            key={x._id}
                                            data={x}
                                        />
                                    )}
                                </ul>
                            </div>
                        </section>
                        <div className="post-info">
                            <p><span>{likes.length} people likes this.</span></p>
                            <NavLink onClick={putLikes} to='#'>Like</NavLink>
                            <NavLink onClick={revokeLike} to='#'>Unlike</NavLink>
                            <NavLink to={`/comments/${post._id}`}>Comment</NavLink>
                            <NavLink to={`/share-post/${post._id}`}>Share</NavLink>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default PostDetails;