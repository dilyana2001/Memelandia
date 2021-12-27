import { Component } from "react";

import ProfileTemplate from '../../ComponentTemplates/ProfileTemplate/ProfileTemplate';
import auth from '../../../Service/auth';

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
            <div className="main-container flex flex-col items-center mx-auto">
                <p className="mt-2.5 text-center text-7xl font-bold text-yellow-800 mb-6">Friends</p>
                <ul className="w-full">
                    <li className="bg-gray-900 my-4 p-4">
                        <form onSubmit={this.handleSubmit} className="flex">
                            <input type="text" placeholder="Search friend" className="p-1.5 rounded mr-2 w-full text-gray-900"
                                value={this.state.query} onChange={this.handleChange} />
                            <input type="submit" value="Search" className="mx-2 bg-gray-700 px-2 rounded" />
                        </form>
                        <p className="text-red-500 text-xs italic">{this.state.error}</p>
                    </li>
                    {this.state.profiles.length > 0 ? this.state.profiles.map(x =>
                        <ProfileTemplate
                            key={x._id}
                            data={x}
                        />
                    ) : <>
                        <li className="text-red-200 text-2xl font-bold text-center">No such user</li>
                    </>}
                </ul>
            </div>
        )
    }
}

export default FindFriends;