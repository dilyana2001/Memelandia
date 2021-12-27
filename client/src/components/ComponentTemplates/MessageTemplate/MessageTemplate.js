import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import auth from "../../../Service/auth";
import AuthContext from '../../../contexts/AuthContext';

const MessageTemplate = ({ data, history }) => {
    const [profile, setProfile] = useState({});
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        auth.getProfileInfo(data.senderId)
            .then(setProfile)
    }, [data.senderId]);

    const deleteCommentHandler = () => {
        auth.deleteMessage(data._id);
        history.push(`/messages/${userId}`);
    }

    return (
        <li className="bg-gray-900 my-4 p-4">
            <div>
                <section>
                    <div className="flex justify-between">
                        <div className="flex">
                            <NavLink className="mr-2" to={`/profiles/${profile?.userId}`}><img 
                                src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                            </NavLink>
                            <p className="self-center">{profile?.username}:</p>
                        </div>
                        <button onClick={deleteCommentHandler} className="">x</button>
                    </div>
                    <div>
                        <h4>{data.title}</h4>
                        <p> {data?.description}</p>
                    </div>
                </section>

            </div>
        </li>
    );
}
export default MessageTemplate;