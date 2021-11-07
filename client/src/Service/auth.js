const baseUrl = 'http://localhost:5000/api';
const token = localStorage.getItem('token');

function login(username, password) {
    return fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function register(username, password) {
    return fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function logout() {
    return fetch(`${baseUrl}/auth/logout`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('userId');
            window.location = "/";
        })
        .catch((err) => console.log(err.message));
}

function getAllProfiles() {
    return fetch(`${baseUrl}/profiles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
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
            'Authorization': `Bearer ${token}`
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
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            username,
            userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function sendMessage(title, description, receiverId, senderId, senderUsername) {
    return fetch(`${baseUrl}/messages/receiverId/${receiverId}/senderId/${senderId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            description,
            senderUsername,
            receiverId,
            senderId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyMessages(id) {
    return fetch(`${baseUrl}/messages/receiverId/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyMessagesFromSender(receiverId, senderId) {
    return fetch(`${baseUrl}/messages/receiverId/${receiverId}/senderId/${senderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyMessagesToSender(receiverId, senderId) {
    return fetch(`${baseUrl}/messages/senderId/${senderId}/receiverId/${receiverId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function deleteMessage(id) {
    return fetch(`${baseUrl}/messages/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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
            'Authorization': `Bearer ${token}`
        }
    })
        .catch((err) => console.log(err.message));
}

function deleteAccoutUser(id) {
    return fetch(`${baseUrl}/profiles/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .catch((err) => console.log(err.message));
}

function sendFeedback(data,) {
    return fetch(`${baseUrl}/messages/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            description: data.get('description')
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

export default {
    login,
    register,
    logout,
    editProfileInfo,
    getProfileInfo,
    postProfileInfo,
    getAllProfiles,
    sendMessage,
    getMyMessages,
    getMyMessagesFromSender,
    getMyMessagesToSender,
    deleteMessage,
    searchFriend,
    deleteAccountProfile,
    deleteAccoutUser,
    sendFeedback,
}