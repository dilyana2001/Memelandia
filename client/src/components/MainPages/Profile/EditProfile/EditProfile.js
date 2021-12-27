import { useState, useEffect, useContext } from "react";

import auth from "../../../../Service/auth";
import AuthContext from "../../../../contexts/AuthContext";

const EditProfile = ({ match, history }) => {

    const { username, userId } = useContext(AuthContext);

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

    const profileOwner = <>
        <p className="text-2xl font-bold mb-4">Edit Profile Info</p>
        <form onSubmit={editProfileHandler} className="flex flex-col">
            <label htmlFor="imageUrl">Image URL:</label>
            <input type="text" name="imageUrl" defaultValue={profile.imageUrl} id="imageUrl" className="rounded" />
            <label htmlFor="info">Info:</label>
            <textarea type="text" defaultValue={profile.info} name="info" id="info" className="rounded" />
            <button className="mt-2 bg-gray-700 text-yellow-700 py-1">Edit!</button>
        </form>
        <button onClick={deleteAccHandler} className="mt-2 mb-20 bg-red-800 text-gray-700 w-full py-1 font-bold">Delete account</button>
    </>;


    return (
        <div className="main-container">
            <div className="text-yellow-700 w-full text-center profile-picture my-8">
                <p className="mb-6 font-bold text-2xl">{profile.username}</p>
                <img className="w-140 mb-5" src={profile.imageUrl} alt="" />
                {userId === profile.userId ? profileOwner : ''}
            </div>
        </div>
    );
}

export default EditProfile;