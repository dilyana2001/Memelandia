import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import auth from "../../../Service/auth";

import './PostTemplate.css';

const PostTemplate = ({ data }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(data.userId)
            .then(setProfile)
    }, [data.userId]);

    return (
        <li className="postTemplate">
            <div className="postTemplate-container">
                <div className="user-info">
                    <NavLink to={`/profiles/${data.userId}`}>  <img className="profile-image"
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" /></NavLink>
                    <p className="username-paragraph">{data.username} post:</p>
                </div>
                <div className="meme-info">
                    <p>{data.description}</p>
                    <NavLink to={`/details/${data._id}`}><img src={data.imageUrl} alt="post" /></NavLink>
                    <div className="post-info">
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostTemplate;