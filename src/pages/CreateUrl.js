import React, { Component } from "react";
import PropTypes from "prop-types";
import createNewUrlPair from "../api/createNewUrlPair";
import getRemainingWordsCount from "../api/getRemainingWordsCount";

class CreateUrl extends Component {
    constructor() {
        super();

        this.state = {
            longUrl: "",
            shortUrl: "",
            remainingWordsCount: null
        };

        this.setLongUrl = this.setLongUrl.bind(this);
        this.getUrlPair = this.getUrlPair.bind(this);
        this.getRemainingWordsCount = this.getRemainingWordsCount.bind(this);
    }

    setLongUrl(event) {
        const longUrl = event.target.value;

        this.setState({ longUrl: "https://" + longUrl });
    }

    async getUrlPair() {
        const longUrl = this.state.longUrl;
        const userId = this.props.userId;
        const urlPair = await createNewUrlPair({ longUrl, userId });

        if (this.state.longUrl) {
            this.setState(
                { shortUrl: urlPair.shortUrl },
                this.getRemainingWordsCount
            );
        }
    }

    async getRemainingWordsCount() {
        const remainingWordsCount = await getRemainingWordsCount();

        this.setState({ remainingWordsCount: remainingWordsCount.remaining });
    }

    componentDidMount() {
        this.getRemainingWordsCount();
    }

    render() {
        return (
            <div>
                <h2>Create a Shortened URL</h2>
                {this.state.remainingWordsCount !== null && (
                    <p>
                        {this.state.remainingWordsCount} unique Asgardian words
                        remain!
                    </p>
                )}
                {this.props.userId ? (
                    <div>
                        <strong>Your Url:</strong> https://
                        <input onChange={this.setLongUrl} />
                        <button onClick={this.getUrlPair}>Submit</button>
                    </div>
                ) : (
                    <div>Loading User Id</div>
                )}

                {this.state.shortUrl && (
                    <div data-jest-selector="short-url-result">
                        Here's your short url!:
                        <ul>
                            <li>Your Url: {this.state.longUrl}</li>
                            <li>
                                Shortened Url:{" "}
                                <a
                                    href={
                                        "http://127.0.0.1:5000/" +
                                        this.state.shortUrl
                                    }
                                >
                                    {"http://127.0.0.1:5000/" +
                                        this.state.shortUrl}
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

CreateUrl.propTypes = {
    userId: PropTypes.string
};

export { CreateUrl };
