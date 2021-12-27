import { useEffect, useState, useContext } from "react";

import auth from "../../../Service/auth";
import MessageBoxTemplate from "../../ComponentTemplates/MessageBoxTemplate/MessageBoxTemplate";
import AuthContext from '../../../contexts/AuthContext';

const MessagesPage = ({ history }) => {

    const { userId } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const senders = {};

    useEffect(() => {
        auth.getAllProfiles(userId)
            .then(setProfiles);
    }, [userId]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages);
    }, [userId]);

    messages?.map(x => {
        if (!senders.hasOwnProperty(x.senderId)) {
            senders[x.senderId] = [];
        }
        return senders[x.senderId].push({
            _id: x._id,
            title: x.title,
            description: x.description,
            senderUsername: x.senderUsername,
            receiverId: x.receiverId
        });
    });

    Object.entries(senders).map(x => {
        return profiles?.map(y => {
            if (x[0] === y.userId) {
                x[1].imageUrl = y.imageUrl;
                x[1].username = y.username;
            }
            return x[1].imageUrl && x[1].username;
        });
    });


    return (
        <div className="main-container flex flex-col items-center mx-auto">
            <p className="mt-2.5 text-center text-7xl font-bold text-yellow-800 mb-6">Messanger</p>
            <ul className="w-full">
                {Object.entries(senders)?.map(x =>
                    <MessageBoxTemplate
                        key={x[1][0]._id}
                        senderId={x[0]}
                        data={x[1]}
                        history={history}
                    />
                )}
            </ul>
        </div>
    );
}
export default MessagesPage;