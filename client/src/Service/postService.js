const baseUrl = 'http://localhost:5000/api';

function getAllPost() {
    return fetch(`${baseUrl}/posts`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getPost(id) {
    return fetch(`${baseUrl}/posts/${id}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function postPost(data, username, userId) {
    return fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            imageUrl: data.get('imageUrl'),
            description: data.get('description'),
            username: username,
            userId: userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function postExistingPost(id, userId, username) {
    return getPost(id)
        .then(data => {
            let formData = new FormData();
            formData.append('imageUrl', data.imageUrl);
            formData.append('description', data.description);
            formData.append('userId', userId)
            formData.append('username', username)
            postPost(formData, username, userId);
        })
}

function deletePost(id) {
    return fetch(`${baseUrl}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        }
    })
        .catch((err) => console.log(err.message));
}

function editPost(id, data, username, userId) {
    return fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
            imageUrl: data.get('imageUrl'),
            description: data.get('description'),
            username: username,
            userId: userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyPosts(id) {
    return fetch(`${baseUrl}/posts/userId/${id}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

// function getLikes(movieId) {
//     return fetch(`${baseUrl}/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`)
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

// function checkCurrentUserLikeTheCurrentMovie(movieId, userId) {
//     return fetch(`${baseUrl}/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

// function putLike(movieId) {
//     return fetch(`${baseUrl}/likes`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': localStorage.getItem('token')
//             },
//             body: JSON.stringify({ movieId })
//         })
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

// function removeLike(id) {
//     return fetch(`${baseUrl}/likes/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': localStorage.getItem('token')
//             }
//         })
//         .catch((err) => console.log(err.message));
// }


// function postProfileInfo(data, username, userId) {
//     return fetch(`${baseUrl}/profile-edit`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Authorization': localStorage.getItem('token')
//         },
//         body: JSON.stringify({
//             picture: data.get('picture'),
//             info: data.get('info'),
//             username: username,
//             userId: userId
//         })
//     })
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

export default {
    getAllPost,
    postExistingPost,
    getPost,
    postPost,
    deletePost,
    editPost,
    getMyPosts,
    // getLikes,
    // checkCurrentUserLikeTheCurrentMovie,
    // putLike,
    // removeLike,
    // postProfileInfo,
}