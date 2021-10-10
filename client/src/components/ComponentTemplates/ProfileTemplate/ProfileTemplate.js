import { NavLink } from "react-router-dom";


const ProfileTemplate = ({ data }) => {
    return (
        <li className="postTemplate">
            <div className="postTemplate-container">
                <div className="user-info">
                    <NavLink to={`/profiles/${data.userId}`}>  <img className="profile-image"
                        src={data?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></NavLink>
                    <p className="username-paragraph">{data.username}</p>
                </div>
            </div>
        </li>
    );
}
export default ProfileTemplate;