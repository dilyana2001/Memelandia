import { useState, useEffect } from 'react';
import postService from "../../Service/postService";
import PostTemplate from "../PostTemplate/PostTemplate";
import './Profile.css'

const Profile = () => {
    const username = localStorage.getItem('username');
    const ownerId = localStorage.getItem('ownerId');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getMyMemes(ownerId)
            .then(setPosts)
    }, [])

    return (
        <main className="container personInfo">
            <section> <img className="profile-image" src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" alt={username} /></section>
            <section>
                <h2> {username}</h2>
                <p>info</p>
            </section>
            <section>
                <h1>POSTS</h1>
                <ul>
                    {posts?.map(x =>
                        <PostTemplate
                            key={x._id}
                            data={x}
                        />
                    )}
                </ul>
            </section>

        </main>


    );
}
export default Profile;