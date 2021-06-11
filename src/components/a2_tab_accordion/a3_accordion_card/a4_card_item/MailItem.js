import React from "react";
import {Col, Image, Row} from "react-bootstrap";

export class MailItem extends React.Component {
    render() {
        return (
            <Row
            >
                <Image
                    src="miniatures/mail_round.png"
                    height="40"
                    alt="mail address"
                />
                <Col fluid> milosz.hg@gmail.com </Col>
            </Row>
        )
    }
}