import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import postService from "../../../Service/postService";

import './PostDetails.css';
import '../MainPage.css';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});
    // const [likes, setLikes] = useState([]);
    // let [myLike, setMyLikes] = useState({});

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost)
    }, [match]);

    // useEffect(() => {
    //     postService.getLikes(match.params.postId)
    //         .then(setLikes)
    // }, [match]);

    // useEffect(() => {
    //     postService.checkCurrentUserLikeTheCurrentMovie(match.params.postId, userId)
    //         .then(setMyLikes)
    // }, [match]);

    // const putLike = () => {
    //     postService.putLike(post._id)
    // }

    // const revokeLike = () => {
    //     postService.removeLike(myLike[0]._id)
    // }

    const ownerEditDeleteBtns = <li>
        <NavLink to={`/edit/${post._id}`}>Edit</NavLink>
        <NavLink to={`/delete/${post._id}`}>Delete</NavLink>
    </li>;

    return (
        <div className="main-container">
            <div className="postDetails">
                <div className="user-info">
                    <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" />
                    <p className="username-paragraph">{post.username} post:</p>
                </div>
                <nav className="postDetails-header-nav">
                    <ul>
                        <li>
                            <h3></h3>
                        </li>
                        { userId == post.userId ? ownerEditDeleteBtns : ''}
                    </ul>
                </nav>
                <div className="description-post-info">
                    <p className="img"><img src={post.imageUrl} /></p>
                    <section>
                        <h2 className="description">{post.description}</h2>

                        <div className="post-info">
                         <p><span>people likes that.</span></p>   
                            {/* <NavLink onClick={putLike} to='#'>Like</NavLink> */}
                            {/* <NavLink onClick={revokeLike} to='#'>Unlike</NavLink> */}
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