import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import postService from "../../../Service/postService";
import auth from '../../../Service/auth'
import PostTemplate from '../../ComponentTemplates/PostTemplate/PostTemplate';
import AuthContext from '../../../contexts/AuthContext';

const Profile = ({ match }) => {

    const { userId } = useContext(AuthContext);

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
                    <Link to={match.params.userId === userId ? `/profiles/${userId}/edit` : `#`}>
                        <img className="profile-image" src={profile.imageUrl ||
                            'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" /></Link>
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