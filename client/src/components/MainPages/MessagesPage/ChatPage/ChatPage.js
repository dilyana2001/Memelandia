import { useEffect, useState, useContext } from "react";

import AuthContext from "../../../../contexts/AuthContext";
import auth from "../../../../Service/auth";
import MessageTemplate from "../../../ComponentTemplates/MessageTemplate/MessageTemplate";

import './ChatPage.css';

const ChatPage = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);

    const senderId = match.params.senderId;

    const [profile, setProfile] = useState([]);
    const [messages, setMessages] = useState([]);
    const [messagesFromMe, setMessagesFromMe] = useState([]);

    useEffect(() => {
        auth.getProfileInfo(senderId)
            .then(setProfile);
    }, [match]);

    useEffect(() => {
        auth.getMyMessagesFromSender(userId, senderId)
            .then(setMessages);
    }, [match]);

    useEffect(() => {
        auth.getMyMessagesToSender(senderId, userId)
            .then(setMessagesFromMe);
    }, [match]);
    console.log(profile)
    let allMessages = messages.concat(messagesFromMe).sort((a, b) => a._id.localeCompare(b._id));

    const sendMessagehandler = (e) => {
        e.preventDefault();
        const { description } = e.target;
        const title = '';
        auth.sendMessage(title, description.value, profile?.userId, userId, username)
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
                        key={x._id}
                        data={x}
                    />
                )}
                <form onSubmit={sendMessagehandler}>
                    <textarea type="text" placeholder="Send message" name="description" id="description" />
                    <button>Send</button>
                </form>
            </ul>

        </div>
    )
}

export default ChatPage;