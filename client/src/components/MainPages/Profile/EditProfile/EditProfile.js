import { useState, useEffect } from "react";

import auth from "../../../../Service/auth";

import '../Profile.css'

const EditProfile = ({ match, history }) => {

    const username = localStorage.getItem('username')
    const userId = localStorage.getItem('userId')

    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(match.params.userId)
            .then(setProfile);
    }, [match]);

    const editProfileHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.editProfileInfo(userId, profile._id, formData, username)
            .then(() => {
                history.push(`/profiles/${userId}`);
            });
    }

    const deleteAccHandler = () => {
        Promise.all([
            auth.deleteAccountProfile(userId),
            auth.deleteAccoutUser(userId),
            auth.logout()
        ])
            .then(history.push('/'));
    }

    return (
        <div className="main-container">
            <div className="editForm">
                <h2>Edit Profile Info</h2>
                <form onSubmit={editProfileHandler}>
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" name="imageUrl" defaultValue={profile.imageUrl} id="imageUrl" />
                    <label htmlFor="info">Info:</label>
                    <textarea type="text" defaultValue={profile.info} name="info" id="info" />
                    <button>Edit!</button>
                </form>
                <button onClick={deleteAccHandler} className="delete-acc-btn">Delete account</button>
            </div>
        </div>
    );
}

export default EditProfile;