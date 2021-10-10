import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import auth from "../../../Service/auth";

import './CommentTemplate.css'

const CommentTemplate = ({ data }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(data.userId)
            .then(setProfile)
    }, []);

    return (
        <li className="commentTemplate">
            <div className="commentTemplate-container">
                <div className="user-info">
                    <NavLink to={`/profiles/${data.userId}`}>  <img className="profile-image"
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                    <p className="username-paragraph">{data.username} comment:</p>
                </div>
                <div className="comment-info">
                    <p>{data.comment}</p>
                </div>
            </div>
        </li>
    );
}
export default CommentTemplate;