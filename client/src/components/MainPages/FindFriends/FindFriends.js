import { Component } from "react";

import ProfileTemplate from '../../ComponentTemplates/ProfileTemplate/ProfileTemplate'
import auth from '../../../Service/auth';

import './FindFriends.css';

class FindFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            query: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        auth.getAllProfiles()
            .then(profiles => this.setState(() => ({ profiles })))
    }

    handleChange(e) {
        this.setState({ query: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        auth.searchFriend(this.state.query)
            .then(profiles => this.setState({ profiles }))
    }

    render() {

        return (
            <div className="main-container">
                <ul className="friends-section" >
                    <li className="postTemplate search-bar">
                        <form onClick={this.handleSubmit}>
                            <input type="text" placeholder="Search friend"
                                value={this.state.query} onChange={this.handleChange} />
                            <input type="submit" value="Search" />
                        </form>
                    </li>
                    {this.state.profiles?.map(x =>
                        <ProfileTemplate
                            key={x._id}
                            data={x}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default FindFriends;