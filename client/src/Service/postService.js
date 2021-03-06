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

function postPost(imageUrl, description, username, userId) {
    const token = localStorage.getItem('token');
    const data = {
        imageUrl,
        description,
        username,
        userId
    }
    return fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
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
            formData.append('userId', userId);
            formData.append('username', username);
            postPost(data.imageUrl, data.description, username, userId);
        })
        .catch((err) => console.log(err.message));
}

function deletePost(id) {
    const token = localStorage.getItem('token');
    return fetch(`${baseUrl}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .catch((err) => console.log(err.message));
}

function editPost(id, imageUrl, description, username, userId) {
    const token = localStorage.getItem('token');
    const data = {
        imageUrl,
        description,
        username,
        userId
    }
    return fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getMyPosts(id) {
    return fetch(`${baseUrl}/posts/userId/${id}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getAllComments(postId) {
    return fetch(`${baseUrl}/comments/postId/${postId}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function commentPost(postId, comment, username, userId) {
    const token = localStorage.getItem('token');
    return fetch(`${baseUrl}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            postId,
            comment,
            username,
            userId,
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function getLikes(postId) {
    return fetch(`${baseUrl}/posts/likes/${postId}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}


function putLike(postId, userId) {
    const token = localStorage.getItem('token');
    return fetch(`${baseUrl}/posts/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            postId,
            userId
        })
    })
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function isPostLikedByUser(postId, userId) {
    return fetch(`${baseUrl}/posts/likes/postId/${postId}/userId/${userId}`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

function removeLike(postId, userId) {
    const token = localStorage.getItem('token');
    return fetch(`${baseUrl}/posts/likes/postId/${postId}/userId/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .catch((err) => console.log(err.message));
}

const fetchFunctions = {
    getAllPost,
    postExistingPost,
    getPost,
    postPost,
    deletePost,
    editPost,
    getMyPosts,
    commentPost,
    getAllComments,
    getLikes,
    putLike,
    isPostLikedByUser,
    removeLike,
};

export default fetchFunctions;