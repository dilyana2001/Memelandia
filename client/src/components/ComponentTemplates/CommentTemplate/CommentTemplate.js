import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import auth from "../../../Service/auth";

const CommentTemplate = ({ data }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(data.userId)
            .then(setProfile)
    }, [data.userId]);

    return (
        <li >
            <div >
                <div className="flex">
                    <NavLink to={`/profiles/${data.userId}`} className="mr-2">  <img
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" className="w-10 h-10 rounded-full object-cover" /></NavLink>
                    <p className="self-center">{data.username} comment:</p>
                </div>
                <div>
                    <p>{data.comment}</p>
                </div>
            </div>
        </li>
    );
}
export default CommentTemplate;