const baseUrl = 'http://localhost:3030';

function getAllPost() {
    return fetch(`${baseUrl}/data/movies`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getPost(id) {
    return fetch(`${baseUrl}/data/movies/${id}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function postPost(data, username) {
    return fetch(`${baseUrl}/data/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('auth_token')
        },
        body: JSON.stringify({
            title: data.get('title'),
            img: data.get('img'),
            description: data.get('description'),
            _ownerName: username
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

export default {
    getAllPost, 
    getPost,
    postPost,
}