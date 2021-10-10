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
            'X-Authorization': localStorage.getItem('auth_token')
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

function getAllProfiles(){
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


export default {
    login,
    register,
    logout,
    isAuthenticated,
    editProfileInfo,
    getProfileInfo,
    postProfileInfo,
    getAllProfiles,
}