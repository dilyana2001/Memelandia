import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import postService from "../../../Service/postService";
import auth from "../../../Service/auth";
import CommentTemplate from '../../ComponentTemplates/CommentTemplate/CommentTemplate';
import AuthContext from '../../../contexts/AuthContext';

const PostDetails = ({ match }) => {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [profile, setProfile] = useState({});
    const [likes, setLikes] = useState([]);
    const [myLike, setMyLike] = useState({});

    const { isAuthenticated, userId } = useContext(AuthContext);
    const postId = match.params.postId;

    useEffect(() => {
        postService.getPost(postId)
            .then(post => {
                getProfileInfo(post.userId);
                setPost(post);
            })
    }, [postId]);

    useEffect(() => {
        postService.getAllComments(postId)
            .then(setComments)
    }, [postId]);

    function getProfileInfo(userId) {
        auth.getProfileInfo(userId)
            .then(setProfile);
    }

    useEffect(() => {
        postService.getLikes(postId)
            .then(setLikes)
    }, [postId]);

    useEffect(() => {
        postService.isPostLikedByUser(postId, userId)
            .then(setMyLike)
    }, [postId, userId]);

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

    const ownerEditDeleteBtns =
        <div className="mb-5 self-end">
            <NavLink className="bg-gray-700 ml-5 py-1 px-2 rounded" to={`/edit/${post._id}`}>Edit</NavLink>
            <NavLink className="bg-gray-700 ml-5 py-1 px-2 rounded" to={`/delete/${post._id}`}>Delete</NavLink>
        </div>;

    const loggedUserBtns =
        <div className="post-info">
            <NavLink onClick={putLikes} to='#'>
                <button className="bg-gray-700 py-1 px-2 rounded" disabled={myLike} >
                    <i className="fas fa-thumbs-up"><span>{likes.length} likes</span></i>
                </button></NavLink>
            <NavLink onClick={revokeLike} to='#'>
                <button className="bg-gray-700 py-1 px-2 rounded" disabled={!myLike} >
                    <i className="fas fa-thumbs-down"></i>
                </button></NavLink>
            <NavLink className="bg-gray-700 py-1 px-2 rounded" to={`/comments/${post._id}`}>Comment</NavLink>
            <NavLink className="bg-gray-700 py-1 px-2 rounded" to={`/share-post/${post._id}`}>Share</NavLink>
        </div>;

    return (
        <div className="main-container">
            <div className="px-7 py-5 bg-gray-900 text-yellow-600">
                <div className="flex p-2 items-center pb-3">
                    <NavLink to={`/profiles/${post.userId}`}>
                        <img className="w-10 rounded-3xl h-10 object-cover mr-2" src={profile?.imageUrl ||
                            'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" />
                    </NavLink>
                    <p className="">{post.username} post:</p>
                </div>
                <div className="flex mb-8">
                    <section className="mr-10"><img src={post.imageUrl} alt="post" /></section>
                    <div className="flex flex-col">
                        {userId === post.userId ? ownerEditDeleteBtns : ''}
                        <section className="mr-10 flex flex-col justify-between details">
                            <p className="">Description: {post.description}</p>
                            <section>
                                <div className="">
                                    <ul className="">
                                        Comments:
                                        {comments?.map(x =>
                                            <CommentTemplate
                                                key={x._id}
                                                data={x}
                                            />
                                        )}
                                    </ul>
                                </div>
                            </section>
                            {isAuthenticated ? loggedUserBtns : ''}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostDetails;