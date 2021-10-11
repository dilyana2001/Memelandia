import { useEffect, useState } from "react";
import auth from "../../../Service/auth";
import MessageTemplate from "../../ComponentTemplates/MessageTemplate/MessageTemplate";

const MessagesPage = ({ match }) => {

    const userId = localStorage.getItem('userId');

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        auth.getMyMessages(userId)
            .then(setMessages)
    }, [match])

    return (
        <section>
            <h2 className="description">Message Box</h2>
            <section>
                <div className="comment-container">
                    <ul className="comment-list">
                        {messages?.map(x =>
                            <MessageTemplate
                                key={x._id}
                                data={x}
                            />
                        )}
                    </ul>
                </div>
            </section>
        </section>

    )
}
export default MessagesPage;