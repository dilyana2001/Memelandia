import { NavLink } from "react-router-dom";

import './PostTemplate.css';

const PostTemplate = ({ data }) => {
    return (
        <li className="postTemplate">
            <div className="postTemplate-container">
                <div className="user-info">
                    <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" />
                    <p className="username-paragraph">{data.username} post:</p>
                </div>
                <div className="meme-info">
                    <p>{data.description}</p>
                    <img src={data.imageUrl} />
                    <div className="post-info">
                        <NavLink to={`/details/${data._id}`}>Details</NavLink>
                    </div>
                </div>

            </div>
        </li>
    );
}
export default PostTemplate;