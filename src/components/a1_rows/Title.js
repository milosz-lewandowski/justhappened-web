import React from "react";
import {Badge, Col, Container, Row} from "react-bootstrap";

export class Title extends React.Component {
    render() {
        return (
            //TODO: my picture
            <Container>
                <Row>
                    <Col>
                        My pic
                    </Col>
                    <Col>
                        <h3 align="flex-start">Miłosz Lewandowski
                            {/*<Badge variant="warning">  under development </Badge>*/}
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