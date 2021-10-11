import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import postService from "../../../Service/postService";
import PostTemplate from "../../ComponentTemplates/PostTemplate/PostTemplate";

import './HomePage.css';
import '../MainPage.css';

const HomePage = ({ match }) => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(setPost)
    }, [match]);

    return (
        <div className="main-container">
            <ul className="homePage-list">
                <li className="postTemplate search-bar" ><input type="text" placeholder="Search post" /> <NavLink to="#">Search</NavLink> </li>
                {posts?.map(x =>
                    <PostTemplate
                        key={x._id}
                        data={x}
                    />
                )}
            </ul>
        </div>
    );
}


export default HomePage;