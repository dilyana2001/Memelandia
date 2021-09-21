const baseUrl = 'http://localhost:3030';

function getAllPost() {
    return fetch(`${baseUrl}/data/movies`)
        .then(res => res.json())
        .catch((err) => console.log(err.message));
}

export default {
    getAllPost, 
}