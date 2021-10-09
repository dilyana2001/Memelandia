import { useState, useEffect } from "react";

import auth from "../../../../Service/auth";

const EditProfile = ({ match, history }) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        auth.getProfileInfo(match.params.userId)
            .then(setProfile);
    }, []);

    const editProfileHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.editProfileInfo(match.params.userId, profile._id, formData, profile.username)
            .then(() => {
                history.push(`/profile/${match.params.userId}`);
            });
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
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;