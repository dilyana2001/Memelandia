import { useEffect, useState } from "react";
import auth from "../../../Service/auth";
import MessageBoxTemplate from "../../ComponentTemplates/MessageBoxTemplate/MessageBoxTemplate";

import './MessagesPage.css';

const MessagesPage = ({ match,history }) => {

    const userId = localStorage.getItem('userId');

    const [messages, setMessages] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [senders] = useState([]);

    useEffect(() => {
        auth.getAllProfiles(userId)
            .then(setProfiles);
    }, [match]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages);
    }, [match]);

    messages.map(x => {
        if (!senders.hasOwnProperty(x.senderId)) {
            senders[x.senderId] = [];
        }
        senders[x.senderId].push({
            _id: x._id,
            title: x.title,
            description: x.description,
            senderUsername: x.senderUsername,
            receiverId: x.receiverId
        });
    });

    Object.entries(senders).map(x => {
        profiles.map(y => {
            if (x[0] == y.userId) {
                x[1].imageUrl = y.imageUrl;
                x[1].username = y.username
            }
        });
    });

    return (
        <div className="main-container">
            <section className="friends-section">
                <h2 className="description">Messanger</h2>
                <div className="friends-section">
                    <ul>
                        <li className="postTemplate search-bar">
                            <form >
                                <input type="text" placeholder="Search friend"
                                />
                                <input type="submit" value="Search" />
                            </form>
                        </li>
                        {Object.entries(senders).map(x =>
                            <MessageBoxTemplate
                                key={x[1][0]._id}
                                senderId={x[0]}
                                data={x[1]}
                                history={history}
                            />
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
}
export default MessagesPage;