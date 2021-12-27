import { NavLink } from "react-router-dom";

import DataComponent from "../../MainPages/MessagesPage/DataComponent/DataComponent";

const MessageBoxTemplate = ({ senderId, data }) => {
    return (
        <li className="bg-gray-900 my-4 p-4">
            <div className="profileTemplate-container">
                <div className="flex justify-between">
                    <section className="flex items-center">
                        <NavLink to={`/profiles/${senderId}`}>  <img className="w-10 h-10 object-cover rounded-full mr-2"
                            src={data?.imageUrl ||
                                'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" /></NavLink>
                        <p className="username-paragraph">{data?.username}</p>
                    </section>
                    <NavLink to={`/chat/${senderId}`}>
                        <DataComponent senderId={senderId} />
                        <input className="bg-gray-700 px-2 py-1 rounded self-end" type="button" defaultValue="Chat" />
                    </NavLink>
                </div>
            </div>
        </li>
    );
}
export default MessageBoxTemplate;