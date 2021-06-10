import React from "react";
import {Col, Image, Row} from "react-bootstrap";

export class PhoneItem extends React.Component {
    render() {
        return (
            <Row
                className="justify-content-md-center"
            >
                <Image
                    src="miniatures/phone_round.png"
                    height="40"
                    alt="phone number"
                />
                <Col fluid> +48 732 004 430 </Col>
            </Row>
        )
    }
}