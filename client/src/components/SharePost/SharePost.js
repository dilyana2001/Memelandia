import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import postService from "../../Service/postService";

const SharePost = ({ match }) => {

    const [post, setPost] = useState({});
    
        let username = localStorage.getItem('username');

    useEffect(() => {
        postService.postExistingPost(match.params.postId, username)
        .then(res=>{
            console.log(res);
            setPost(res)
        })
    }, [match])
    return (
       <div>
           <h3>You Shared the Post!</h3>
       </div>
    );
}
export default SharePost;