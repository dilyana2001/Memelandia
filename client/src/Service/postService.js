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

function postPost(data, username) {
    return fetch(`${baseUrl}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                title: data.get('title'),
                img: data.get('imageUrl'),
                description: data.get('description'),
                _ownerName: username
            })
        })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}
////////////////////////////////////////////////////////////////////////////////////////////
// function postExistingPost(id, username) {
//     return getPost(id)
//         .then(data => {
//             let formData = new FormData();
//             formData.append("title", data.title);
//             formData.append("img", data.img);
//             formData.append("description", data.description);
//             formData.append("_ownerName", username);
//             postPost(formData, username);
//         })
// }

// function deletePost(id) {
//     return fetch(`${baseUrl}/movies/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': localStorage.getItem('token')
//             }
//         })
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

// function editPost(id, data, username) {
//     return fetch(`${baseUrl}/movies/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-Authorization': localStorage.getItem('token')
//             },
//             body: JSON.stringify({
//                 title: data.get('title'),
//                 img: data.get('img'),
//                 description: data.get('description'),
//                 _ownerName: username
//             })
//         })
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

// function getMyMemes(id) {
//     return fetch(`${baseUrl}/movies?where=_ownerId%3D%22${id}%22`)
//         .then(res => res.json())
//         .catch((err) => console.log(err.message));
// }

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

export default {
    getAllPost,
    // postExistingPost,
    getPost,
    postPost,
    // deletePost,
    // editPost,
    // getMyMemes,
    // getLikes,
    // checkCurrentUserLikeTheCurrentMovie,
    // putLike,
    // removeLike,
}