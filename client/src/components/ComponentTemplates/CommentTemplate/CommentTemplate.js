const CommentTemplate = ({ data }) => {
    return (
        <li className="commentTemplate">
            <div className="commentTemplate-container">
                <div className="user-info">
                    <img className="profile-image"
                     src="https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg" />
                    <p className="username-paragraph">{data.username} comment:</p>
                </div>
                <div className="comment-info">
                    <p>{data.comment}</p>
                </div>
            </div>
        </li>
    );
}
export default CommentTemplate;