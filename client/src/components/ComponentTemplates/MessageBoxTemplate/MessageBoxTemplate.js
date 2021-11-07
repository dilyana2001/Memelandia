import { NavLink } from "react-router-dom";

import DataComponent from "../../MainPages/MessagesPage/DataComponent/DataComponent";

const MessageBoxTemplate = ({ senderId, data }) => {
    return (
        <li className="profileTemplate">
            <div className="profileTemplate-container">
                <div className="user-info">
                    <section className="user-section">
                        <NavLink to={`/profiles/${senderId}`}>  <img className="profile-image"
                            src={data?.imageUrl ||
                                'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                        <p className="username-paragraph">{data?.username}</p>
                    </section>
                    <NavLink to={`/chat/${senderId}`}>
                        <DataComponent senderId={senderId} />
                        <input className="send-message-btn" type="button" defaultValue="Chat" />
                    </NavLink>
                </div>
            </div>
        </li>
    );
}
export default MessageBoxTemplate;