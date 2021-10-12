import { useEffect, useState } from "react";
import auth from "../../../Service/auth";
import MessageTemplate from "../../ComponentTemplates/MessageTemplate/MessageTemplate";

import './MessagesPage.css'

const MessagesPage = ({ match, history }) => {

    const userId = localStorage.getItem('userId');

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages)
    }, [match])

    return (
        <div className="main-container">
                <section className="friends-section">
           
            <h2 className="description">Messanger</h2>
                <div className="friends-section">
                    <ul>
                        {messages?.map(x =>
                            <MessageTemplate
                                key={x._id}
                                data={x}
                                history={history}
                            />
                        )}
                    </ul>
                </div>
        </section>
        </div>
    )
}
export default MessagesPage;