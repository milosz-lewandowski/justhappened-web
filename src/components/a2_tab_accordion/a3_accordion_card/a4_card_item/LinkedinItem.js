import React from "react";
import {Col, Image, Row} from "react-bootstrap";

export class LinkedinItem extends React.Component {
    render() {
        return (
            <Row className="align-middle"
                // className="justify-content-md-center"
            >
                <Image
                    src="miniatures/linkedin_round.png"
                    height="40"
                    width="40"
                    alt="linkedin profile"
                />
                <Col
                // className="align-middle"
                > https://www.linkedin.com/in/miloszlewandowski</Col>
            </Row>
        )
    }
}