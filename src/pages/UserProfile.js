import React, { Component } from "react";
import PropTypes from "prop-types";
import getUserProfile from "../api/getUserProfile";
import { UserInfoTable } from "../components/UserInfoTable";

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            urlPairs: []
        };

        this.setUrlPairs = this.setUrlPairs.bind(this);
    }

    async setUrlPairs() {
        if (!this.props.userId) {
            this.props.refreshUser();
        }
        const userProfile = await getUserProfile(this.props.userId);

        this.setState({
            urlPairs: userProfile.savedUrls
        });
    }

    componentDidMount() {
        this.setUrlPairs();
    }
    

    render() {
        return (
            <div>
                <h2>User Profile</h2>

                {this.props.userId && this.state.urlPairs.length > 0 ? (
                    <div>
                        <h4>Your User Id: {this.props.userId}</h4>
                        <UserInfoTable
                            userId={this.props.userId}
                            urlPairs={this.state.urlPairs}
                        />
                    </div>
                ) : (
                    <div>Loading User Data</div>
                )}
            </div>
        );
    }
}

UserProfile.propTypes = {
    userId: PropTypes.string,
    refreshUser: PropTypes.func.isRequired
};

export { UserProfile };
