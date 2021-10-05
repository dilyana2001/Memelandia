import { useState, useEffect } from "react";

import postService from "../../../Service/postService";
import PostTemplate from "../../ComponentTemplates/PostTemplate/PostTemplate";

import './HomePage.css';
import '../MainPage.css';

const HomePage = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(setPost)
    }, []);


    return (
        <div className="main-container">
            <ul className="homePage-list">
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