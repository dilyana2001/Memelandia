const baseUrl = 'http://localhost:3030';

function login(data) {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password')
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function register(data) {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
            rePass: data.get('rePass'),
            username: data.get('username'),

        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}



export default {
    login,
    register
}