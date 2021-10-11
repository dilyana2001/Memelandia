import { NavLink } from "react-router-dom";

import './ProfileTemplate.css'

const ProfileTemplate = ({ data }) => {
    return (
        <li className="profileTemplate">
            <div className="profileTemplate-container">
                <div className="user-info">
                    <section className="user-section">
                        <NavLink to={`/profiles/${data.userId}`}>  <img className="profile-image"
                            src={data?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                        <p className="username-paragraph">{data.username}</p>
                    </section>
                    <NavLink to={`/send-message/${data.userId}`}>  <input className="send-message-btn" type="button" defaultValue="Send message" /> </NavLink>
                </div>
            </div>
        </li>
    );
}
export default ProfileTemplate;