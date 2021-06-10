import React from "react";
import {Col, Image, Row} from "react-bootstrap";

export class CredlyProfileItem extends React.Component {
    render() {
        return (
            <Row
                className="justify-content-md-center"
            >
                <Image
                    src="miniatures/credly_clap.png"
                    height="40"
                    alt="credly profile"
                />
                <Col fluid> https://www.credly.com/users/milosz-lewandowski/badges</Col>
            </Row>
        )
    }
}