const baseUrl = 'http://localhost:5000/api';

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

function logout(history, login) {
    const token = localStorage.getItem('token');
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
            login(null);
            history.push('/');
        })
        .catch((err) => console.log(err.message));
}

function getAllProfiles() {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    return fetch(`${baseUrl}/profiles/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .catch((err) => console.log(err.message));
}

function sendFeedback(data) {
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

// function getWeather() {
//     // ceABmqrAHAOodoPUhBjWAp8fN7ybMAcu
//     // xMZBKQMBlKyZU8c3ypegJAyoUOV6jCRh
//     return fetch(`https://ipapi.co/json`)
//         .then(response => response.json())
//         .then(data => {
//             return fetch(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=ceABmqrAHAOodoPUhBjWAp8fN7ybMAcu&q=${data.ip}`)
//                 .then(weather => weather.json())
//                 .catch(console.log)
//         })
//         .catch(console.log)
// }

const fetchFunctions = {
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
    // getWeather,
};

export default fetchFunctions;