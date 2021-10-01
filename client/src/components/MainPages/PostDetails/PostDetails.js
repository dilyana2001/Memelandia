import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import postService from "../../../Service/postService";

import './PostDetails.css';
import '../MainPage.css';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});
    const [likes, setLikes] = useState([]);
    let [myLike, setMyLikes] = useState({});

    const userId = localStorage.getItem('ownerId');

    useEffect(() => {
        postService.getPost(match.params.postId)
            .then(setPost)
    }, [match]);

    useEffect(() => {
        postService.getLikes(match.params.postId)
            .then(setLikes)
    }, [match]);

    useEffect(() => {
        postService.checkCurrentUserLikeTheCurrentMovie(match.params.postId, userId)
            .then(setMyLikes)
    }, [match]);

    // const putLike = () => {
    //     postService.putLike(post._id)
    // }

    // const revokeLike = () => {
    //     postService.removeLike(myLike[0]._id)
    // }

    // const ownerEditDeleteBtns = <li>
    //     <NavLink to={`/edit/${post._id}`}>Edit</NavLink>
    //     <NavLink to={`/delete/${post._id}`}>Delete</NavLink>
    // </li>;

    return (
        <div className="main-container">
            <div className="postDetails">
                <div className="user-info">
                    <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" />
                    <p className="username-paragraph">someone post:</p>
                </div>
                <nav className="postDetails-header-nav">
                    <ul>
                        <li>
                            <h3>{post.title}</h3>
                        </li>
                        {/* {(userId != null && userId == post._ownerId) ? ownerEditDeleteBtns : ''} */}
                    </ul>
                </nav>
                <div className="description-post-info">
                    <p className="img"><img src={post.imageUrl} /></p>
                    <section>
                        <p className="description">{post.description || 'Description...'}</p>
                        <div className="post-info">
                            <span> {likes} people likes that.</span>
                            {/* <NavLink onClick={putLike} to='#'>Like</NavLink>
                            <NavLink onClick={revokeLike} to='#'>Unlike</NavLink> */}
                            <NavLink to={`/share-post/${post._id}`}>Share</NavLink>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
}
export default PostDetails;