import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import auth from "../../../Service/auth";

import './MessageTemplate.css'

const MessageTemplate = ({ data }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(data.senderId)
            .then(setProfile)
    }, []);
    console.log(data);
    return (
        <li className="profileTemplate messageTemplate">
            <div className="profileTemplate-container messageTemplate-container">
                <section className="user-section">
                    <div className="user-info">
                        <NavLink to={`/profiles/${profile?.userId}`}><img className="profile-image"
                            src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} />
                        </NavLink>
                        <p className="username-paragraph"><span>{profile?.username}</span></p>
                    </div>
                    <div className="comment-info message-info">
                        <h4>{data.title}</h4>
                        <p> {data?.description}</p>
                    </div>
                </section>
            </div>
        </li>
    );
}
export default MessageTemplate;