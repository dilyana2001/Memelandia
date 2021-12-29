import { useState, useEffect } from "react";

import postService from "../../../Service/postService";
// import auth from '../../../Service/auth';
import PostTemplate from "../../ComponentTemplates/PostTemplate/PostTemplate";

const HomePage = ({ match }) => {

    const [posts, setPost] = useState([]);
    // const [weather, setWeather] = useState([]);

    useEffect(() => {
        postService.getAllPost()
            .then(data => {
                setPost(data)
                // auth.getWeather()
                //     .then(weatherData => {
                //         console.log(weatherData);
                //         setWeather(weatherData)
                //     })
            })
    }, [match]);

    const weatherTemplate =
        <a className="flex place-content-center items-center" href={`https://www.accuweather.com/en/bg/sofia/51097/weather-forecast/51097`}>
            <span className="bg-gray-900 flex p-1"><h1>Sofia, Sofia City &nbsp;</h1>
                <span>
                    5°
                    <span>C&nbsp;</span>
                </span>
                <img src="https://www.accuweather.com/images/weathericons/38.svg" width="27" height="27" alt="weather"/></span>

        </a>


    return (
        <div className="main-container mx-auto">
            <ul>
                <li >{weatherTemplate}</li>
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