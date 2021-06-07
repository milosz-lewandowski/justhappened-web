import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {NavigationBar} from "./navigation/NavigationBar";
import {Title} from "./Title";
import {SectionsContainer} from "./SectionsContainer";

export class App extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Title />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NavigationBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SectionsContainer />
                    </Col>
                </Row>
            </Container>
        )
    }
}