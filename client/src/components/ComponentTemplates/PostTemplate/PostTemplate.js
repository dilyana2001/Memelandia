import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import auth from "../../../Service/auth";

const PostTemplate = ({ data }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(data.userId)
            .then(setProfile)
    }, [data.userId]);

    return (
        <li className="p-10 bg-gray-900 m-10 text-yellow-600">
            <div className="flex flex-col">
                <div className="flex mb-2">
                    <NavLink to={`/profiles/${data.userId}`}>  <img className="w-10 h-10 object-cover rounded-3xl mr-2"
                        src={profile?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" /></NavLink>
                    <p className="username-paragraph">{data.username} post:</p>
                </div>
                <div className="meme-info">
                    <p>{data.description}</p>
                    <NavLink to={`/details/${data._id}`}><img src={data.imageUrl} className="" alt="post" /></NavLink>
                    <div className="post-info">
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostTemplate;