import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import postService from "../../../Service/postService";
import AuthContext from '../../../contexts/AuthContext';

const SharePost = ({ match }) => {

    const [, setPost] = useState({});

    const { username, userId } = useContext(AuthContext);

    useEffect(() => {
        postService.postExistingPost(match.params.postId, userId, username)
            .then(setPost)
    }, [match.params.postId, userId, username]);

    return (
        <div className="main-container">
            <div className="flex flex-col text-center text-yellow-700 bg-gray-900 w-full my-10 p-14">
                <p className="text-4xl font-bold mb-4">You Shared the Post!</p>
                <div className="flex flex-col underline">
                    <NavLink to='/'>Go to Home</NavLink>
                    <NavLink to={`/profiles/${userId}`}>Go to Profile</NavLink>
                </div>
            </div>
        </div>
    );
}
export default SharePost;