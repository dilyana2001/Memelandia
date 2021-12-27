import { useEffect, useState, useContext } from "react";

import AuthContext from "../../../../contexts/AuthContext";
import auth from "../../../../Service/auth";
import MessageTemplate from "../../../ComponentTemplates/MessageTemplate/MessageTemplate";

const ChatPage = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);

    const senderId = match.params.senderId;

    const [profile, setProfile] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messagesFromMe, setMessagesFromMe] = useState([]);

    useEffect(() => {
        auth.getProfileInfo(senderId)
            .then(setProfile);
    }, [senderId]);

    useEffect(() => {
        auth.getMyMessagesFromSender(userId, senderId)
            .then(setMessages);
    }, [userId, senderId]);

    useEffect(() => {
        auth.getMyMessagesToSender(senderId, userId)
            .then(setMessagesFromMe);
    }, [senderId, userId]);

    let allMessages = messages.concat(messagesFromMe).sort((a, b) => a._id.localeCompare(b._id));

    const sendMessagehandler = (e) => {
        e.preventDefault();
        const { description } = e.target;
        const title = '';
        console.log(description)
        if (!description.value) {
            return description.classList.add('border', 'border-red-400');
        }
        auth.sendMessage(title, description.value, profile.userId, userId, username)
            .then(() => {
                description.value = '';
                history.push(`/chat/${senderId}`);
            })
    }

    return (
        <div className="main-container">
            <ul className="friends-section message-section" >
                {allMessages?.map(x =>
                    <MessageTemplate
                        key={x._id + allMessages.lenth}
                        data={x}
                    />
                )}
                <form onSubmit={sendMessagehandler} className="flex m-12 mb-16">
                    <textarea className="placeholder-purple-700 text-purple-700 w-full ml-1 rounded px-2 border border-blue-400" type="text" placeholder="Send message" name="description" id="description" />
                    <button className="bg-fuchsia-500 mx-4 my-2 px-2 py-1 rounded-xl text-purple-700 items-center">Send</button>
                </form>
            </ul>

        </div>
    )
}

export default ChatPage;