import { NavLink } from "react-router-dom";

import './PostTemplate.css';

const PostTemplate = ({ data }) => {

    return (
        <div className="postTemplate">
            <p className="description">{data._ownerName} post:</p>
            <h3>{data.title}</h3>
            <p className="img"><img src={data.img} /></p>
            <div className="post-info">
                <NavLink to={`/details/${data._id}`}><button className="button">Details</button></NavLink>
            </div>
        </div>
    );
}
export default PostTemplate;