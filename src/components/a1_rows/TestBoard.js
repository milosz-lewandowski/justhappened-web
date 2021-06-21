import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export class TestBoard extends React.Component {
    render() {
        return (
            <Container fluid="true"
            >
                <Row>
                    <Col className="block-example border border-dark">1</Col>
                    <Col className="block-example border border-dark">2</Col>
                    <Col className="block-example border border-dark">3</Col>
                    <Col className="block-example border border-dark">4</Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="block-example border border-dark">5</Row>
                        <Row className="block-example border border-dark">6</Row>
                        <Row className="block-example border border-dark">7</Row>
                    </Col>
                </Row>
            </Container> //TODO: TestBoard
        )
    }
}