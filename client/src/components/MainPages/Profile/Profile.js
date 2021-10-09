import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import postService from "../../../Service/postService";
import auth from '../../../Service/auth'
import PostTemplate from '../../ComponentTemplates/PostTemplate/PostTemplate';

import './Profile.css';
import '../MainPage.css';

const Profile = ({ match }) => {
    const [profile, setProfile] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getMyPosts(match.params.userId)
            .then(setPosts);
    }, [match]);

    useEffect(() => {
        auth.getProfileInfo(match.params.userId)
            .then(setProfile);
    }, [match]);

    return (
        <div className="main-container">
            <div className="profile-section">
                <div className="info-section">
                    <Link to={`/profile/${match.params.userId}/edit`}> <img className="profile-image" src={profile.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} /></Link>
                    <section>
                        <h2>{profile.username}</h2>
                        <p>{profile.info}</p>
                    </section>
                </div>
                <section>
                    <ul>
                        {posts?.map(x =>
                            <PostTemplate
                                key={x._id}
                                data={x}
                            />
                        )}
                    </ul>
                </section>
            </div>
        </div>
    );
}
export default Profile;