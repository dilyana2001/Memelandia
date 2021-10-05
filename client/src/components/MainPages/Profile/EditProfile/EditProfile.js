import { useState, useEffect } from "react";

import postService from "../../../../Service/auth";

const EditProfile = ({ match, history }) => {
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');

    const editProfileHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.editPost(match.params.userId, formData, username, userId)
            .then(() => {
                history.push(`/profile/${match.params.userId}`)
            })
    }

    return (
        <div className="profile-container">
            <div className="profileForm">
                <h2>Edit Profile Info</h2>
                <form onSubmit={editProfileHandler}>
                    <label htmlFor="description">Info:</label>
                    <input type="text" defaultValue={profile.description} name="description" id="description" />
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" defaultValue={profile.imageUrl} name="imageUrl" id="imageUrl" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;