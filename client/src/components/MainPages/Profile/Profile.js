import { useState, useEffect } from 'react';

import postService from "../../../Service/postService";
import PostTemplate from '../../ComponentTemplates/PostTemplate/PostTemplate';

import './Profile.css';
import '../MainPage.css';

const Profile = () => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getMyMemes(userId)
            .then(setPosts)
    }, []);

    return (
        <div className="main-container">
            <div className="profile-section">
                <div className="info-section">
                    <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" alt={username} />
                    <section>
                        <h2> {username}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cum eaque illum molestias vitae beatae odit nam. Sunt quibusdam labore magnam architecto laudantium velit repudiandae vel, id voluptas minus?
                        </p>
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