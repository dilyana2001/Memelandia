import { Component } from "react";

import ProfileTemplate from '../../ComponentTemplates/ProfileTemplate/ProfileTemplate';
import auth from '../../../Service/auth';

import './FindFriends.css';

class FindFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            query: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        auth.getAllProfiles()
            .then(profiles => this.setState(() => ({ profiles })))
            .catch(console.log)
    }

    handleChange(e) {
        this.setState({ query: e.target.value });
        if (this.state.query) {
            this.setState({ error: `` });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.query) {
            return this.setState({ error: `Enter some name!` });
        }
        auth.searchFriend(this.state.query)
            .then(profiles => this.setState({ profiles }))
    }


    render() {
        return (
            <div className="main-container">
                <ul className="friends-section">
                    <li className="postTemplate search-bar">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Search friend"
                                value={this.state.query} onChange={this.handleChange} />
                            <input type="submit" value="Search" />
                        </form>
                        <p className="text-red-500 text-xs italic">{this.state.error}</p>
                    </li>
                    {this.state.profiles.length > 0 ? this.state.profiles.map(x =>
                        <ProfileTemplate
                            key={x._id}
                            data={x}
                        />
                    ) : <li className="profileTemplate text-red-200 text-2xl font-bold text-center">No such user</li>}
                </ul>
            </div>
        )
    }
}

export default FindFriends;