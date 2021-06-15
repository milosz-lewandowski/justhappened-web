import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "./a1_rows/Title";
import {TabBar} from "./a1_rows/TabBar";

export class App extends React.Component{


    // state = {
    //     patients: []
    // }

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
                        <TabBar/>
                    </Col>
                </Row>
            </Container>
        )
    }
}