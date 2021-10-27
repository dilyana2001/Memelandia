import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import auth from "../../../Service/auth";
import AuthContext from '../../../contexts/AuthContext';

import './MessageTemplate.css'

const MessageTemplate = ({ data, history }) => {
    const [profile, setProfile] = useState({});
    const { isAuthenticated, username, token, userId } = useContext(AuthContext);

    useEffect(() => {
        auth.getProfileInfo(data.senderId)
            .then(setProfile)
    }, []);

    const deleteCommentHandler = () => {
        auth.deleteMessage(data._id);
        history.push(`/messages/${userId}`);
    }

    return (
        <li className="profileTemplate messageTemplate">
            <button onClick={deleteCommentHandler} className="delete-message-btn">x</button>
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