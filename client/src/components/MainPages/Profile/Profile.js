import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import postService from "../../../Service/postService";
import auth from '../../../Service/auth'
import PostTemplate from '../../ComponentTemplates/PostTemplate/PostTemplate';

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
            <ul>
                <li className="p-10 bg-gray-900 m-10 text-yellow-600">
                    <div className="text-yellow-700">
                        <div className="flex">
                            <Link to={`/profiles/${match.params.userId}/edit`} className="mr-2">
                                <img src={profile.imageUrl ||
                                    'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" className="w-20 h-20 rounded-full object-cover" /></Link>
                            <section>
                                <p className="font-bold text-2xl">{profile.username}</p>
                                <p>{profile.info}</p>
                            </section>
                        </div>
                    </div>
                </li>
                {posts?.map(x =>
                    <PostTemplate
                        key={x._id}
                        data={x}
                    />
                )}
            </ul>
        </div>
    );
}
export default Profile;