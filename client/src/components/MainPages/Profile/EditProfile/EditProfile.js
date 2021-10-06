// import { useState, useEffect } from "react";

import auth from "../../../../Service/auth";

const EditProfile = ({ match, history }) => {
    const username = localStorage.getItem('username');

    const editProfileHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        auth.editProfileInfo(match.params.userId, formData, username)
            .then(() => {
                history.push(`/profile/${match.params.userId}`)
            })
    }

    return (
        <div className="profile-container">
            <div className="profileForm">
                <h2>Edit Profile Info</h2>
                <form onSubmit={editProfileHandler}>
                    <label htmlFor="info">Info:</label>
                    <input type="text"  name="info" id="info" />
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text"name="imageUrl" id="imageUrl" />
                    <button>Post!</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;