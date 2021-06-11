import React from "react";
import {Badge, Col, Container, Image, Row} from "react-bootstrap";

export class Title extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image
                            src="/myPhoto/myphoto.png"
                        height="74"

                        />
                    </Col>
                    <Col>
                        <h3 align="flex-start">Miłosz Lewandowski
                        </h3>
                    </Col>
                    <Col>
                        <h4 align="flex-end">
                            <Badge  variant="warning">under development </Badge>
                        </h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}