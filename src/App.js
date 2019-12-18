import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { CreateUrl } from "./pages/CreateUrl";
import { UserProfile } from "./pages/UserProfile";
import getUserId from "./api/getUserId";
import styled from "styled-components";

const AppWrapper = styled.div`
    max-width: 1200px;
    min-height: 800;
    margin: 10px auto 0;
    background-color: #aaccff;
    padding: 24px 48px;
    border-radius: 9px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            userId: ""
        };

        this.updateUserId = this.updateUserId.bind(this);
    }
    async updateUserId() {
        let userId = await getUserId();
        this.setState({ userId });
    }

    componentDidMount() {
        this.updateUserId();
    }

    render() {
        return (
            <Router>
                <AppWrapper>
                    <h1>URL Shortener from Asgard</h1>
                    <p>
                        A URL shortener that shortens your url to a unique
                        Asgardian word!
                    </p>
                    <Nav />
                    <Switch>
                        <Route path="/profile">
                            <UserProfile
                                userId={this.state.userId}
                                refreshUser={this.updateUserId}
                            />
                        </Route>
                        <Route path="/">
                            <CreateUrl
                                userId={this.state.userId}
                                refreshUser={this.updateUserId}
                            />
                        </Route>
                    </Switch>
                </AppWrapper>
            </Router>
        );
    }
}

export default App;
