const baseUrl = 'http://localhost:5000/api';

function login(data) {
    return fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.get('username'),
            password: data.get('password')
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function register(data) {
    return fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: data.get('password'),
            rePass: data.get('rePass'),
            username: data.get('username'),
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function logout() {
    return fetch(`${baseUrl}/auth/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('token')
        }
    })
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('userId');
        })
        .catch((err) => console.log(err.message));
}

function isAuthenticated() {
    if (!localStorage.getItem) {
        return;
    }
}

function getAllProfiles() {
    return fetch(`${baseUrl}/profiles`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getProfileInfo(userId) {
    return fetch(`${baseUrl}/profiles/${userId}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function editProfileInfo(userId, profileId, data, username) {
    return fetch(`${baseUrl}/profiles/${profileId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            imageUrl: data.get('imageUrl'),
            info: data.get('info'),
            username,
            userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function postProfileInfo(username, userId) {
    return fetch(`${baseUrl}/profiles/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            username,
            userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function sendMessage(data, receiverId, senderId, senderUsername,) {
    return fetch(`${baseUrl}/messages/receiverId/${receiverId}/senderId/${senderId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            title: data.get('title'),
            description: data.get('description'),
            senderUsername,
            receiverId,
            senderId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyMessages(id) {
    return fetch(`${baseUrl}/messages/receiverId/${id}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function deleteMessage(id) {
    return fetch(`${baseUrl}/messages/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        }
    })
        .catch((err) => console.log(err.message));
}

function searchFriend(query) {
    return fetch(`${baseUrl}/profiles/search/${query}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function deleteAccountProfile(userId) {
    return fetch(`${baseUrl}/profiles/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        }
    })
        .catch((err) => console.log(err.message));
}

function deleteAccoutUser(id) {
    return fetch(`${baseUrl}/profiles/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        }
    })
        .catch((err) => console.log(err.message));
}

function sendFeedback(data, username, userId) {
    return fetch(`${baseUrl}/messages/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            email: data.get('email'),
            description: data.get('description'),
            username,
            userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

export default {
    login,
    register,
    logout,
    isAuthenticated,
    editProfileInfo,
    getProfileInfo,
    postProfileInfo,
    getAllProfiles,
    sendMessage,
    getMyMessages,
    deleteMessage,
    searchFriend,
    deleteAccountProfile,
    deleteAccoutUser,
    sendFeedback,
}