import React from "react";
import {Col, Image, Row} from "react-bootstrap";

export class GithubItem extends React.Component {
    render() {
        return (
            <Row
                className="justify-content-md-center"
            >
                <Image
                    src="miniatures/github_round.png"
                    height="40"
                    alt="github account"
                />
                <Col fluid> https://github.com/milosz-lewandowski </Col>
            </Row>
        )
    }
}