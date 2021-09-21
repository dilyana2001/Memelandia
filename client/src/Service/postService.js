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

function postExistingPost(id, username) {
    return getPost(id)
        .then(data => {
            let formData = new FormData();
            formData.append("title", data.title);
            formData.append("img", data.img);
            formData.append("description", data.description);
            formData.append("_ownerName", username);
            postPost(formData, username);
        })
}

function deletePost(id) {
    return fetch(`${baseUrl}/data/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('auth_token')
        }
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function editPost(id, data, username) {
    return fetch(`${baseUrl}/data/movies/${id}`, {
        method: 'PUT',
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

function getMyMemes(id) {
    return fetch(`${baseUrl}/data/movies?where=_ownerId%3D%22${id}%22`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}


export default {
    getAllPost,
    postExistingPost,
    getPost,
    postPost,
    deletePost,
    editPost,
    getMyMemes,
}