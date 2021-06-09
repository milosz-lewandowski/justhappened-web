import React from "react";

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Contact me by:
                </div>
                <div>
                    <img
                        src="miniatures/phone_round.png"
                        // width="32"
                        height="15"
                        className="d-inline-block align-self-lg-center"
                        alt="phone number"
                    />
                    +48 732 004 430
                </div>
                <div>
                    <img
                        src="miniatures/mail_round.png"
                        // width="32"
                        height="15"
                        className="d-inline-block align-top"
                        alt="mail address"
                    />
                    private: milosz.hg@gmail.com
                </div>
                <div>
                    Find me at:
                </div>
                <div>
                    <img
                        src="miniatures/github_round.png"
                        // width="32"
                        height="15"
                        className="d-inline-block align-top"
                        alt="github account"
                    />
                    https://github.com/milosz-lewandowski
                </div>
                <div>
                    <img
                        src="miniatures/linkedin_round.png"
                        // width="32"
                        height="15"
                        className="d-inline-block align-top"
                        alt="linkedin profile"
                    />
                    https://www.linkedin.com/in/miloszlewandowski
                </div>
                <div>
                    <img
                        src="miniatures/credly_clap.png"
                        // width="32"
                        height="15"
                        className="d-inline-block align-top"
                        alt="credly profile"
                    />
                    https://www.credly.com/users/milosz-lewandowski/badges
                </div>
            </div>
        )
    }
}