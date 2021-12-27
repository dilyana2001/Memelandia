import { NavLink } from "react-router-dom";

const ProfileTemplate = ({ data }) => {
    return (
        <li className="bg-gray-900 my-4 p-4">
            <div className="">
                <div className="flex justify-between">
                    <section className="flex mr-10 items-center">
                        <NavLink to={`/profiles/${data.userId}`}>  <img className="w-10 h-10 object-cover rounded-3xl mr-2"
                            src={data?.imageUrl || 'https://cdn3.vectorstock.com/i/thumb-large/53/52/person-private-userpic-business-character-profile-vector-23565352.jpg'} alt="avatar" /></NavLink>
                        <p>{data.username}</p>
                    </section>
                    <NavLink to={`/send-message/${data.userId}`}>  <input className="bg-gray-700 px-2 py-1 rounded self-end" type="button" defaultValue="Send message" /> </NavLink>
                </div>
            </div>
        </li>
    );
}
export default ProfileTemplate;