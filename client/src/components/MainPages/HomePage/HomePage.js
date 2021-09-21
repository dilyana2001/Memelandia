import { useState, useEffect } from "react";

import postService from "../../../Service/postService";
import PostTemplate from "../../ComponentTemplates/PostTemplate/PostTemplate";

import './HomePage.css';

const HomePage = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(setPost)
    }, []);

    return (
        <main className="container">
            <section>
                <h1>POSTS</h1>
                <ul>
                    {posts?.map(x =>
                        <PostTemplate
                            key={x._id}
                            data={x}
                        />
                    )}
                </ul>
            </section>

        </main>
    );
}


export default HomePage;