import React from "react";
import {Badge, Col, Container, Image, Row} from "react-bootstrap";
import {ResumeDropdown} from "../a2_tab_accordion/ResumeDropdown";

export class Title2 extends React.Component {
    render() {
        return (
            <Container fluid="true"
                       className="justify-content-center"
            >
                <Row >
                    <Col>
                        <Image
                            src="/myPhoto/myphoto.png"
                            height="148"
                            className="img2"
                        />
                    </Col>
                    <Col>
                        <h3
                        >Miłosz Lewandowski
                        </h3>
                    </Col>
                    <Col>
                        <h4
                        >
                            <Badge
                                variant="warning"
                            >under development </Badge>
                        </h4>
                    </Col>
                    <Col>
                        <Row>
                            <ResumeDropdown/>
                        </Row>
                        <Row>2</Row>
                        <Row>3</Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}