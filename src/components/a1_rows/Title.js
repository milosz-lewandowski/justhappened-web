import React from "react";
import {Badge, Col, Container, Image, Row} from "react-bootstrap";
import {ResumeDropdown} from "../a2_tab_accordion/ResumeDropdown";

export class Title extends React.Component {
    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col>
                        <Image
                            align="flex-start"
                            src="/myPhoto/myphoto.png"
                        height="148"

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
                    <Col>
                        <Row>
                            <ResumeDropdown/>
                        </Row>
                        <Row></Row>
                        <Row></Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}