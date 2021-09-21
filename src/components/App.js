import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "./a1_rows/Title";
import {TabBar} from "./a1_rows/TabBar";
import {TestBoard} from "./a1_rows/TestBoard";
import {Title2} from "./a1_rows/Title2";

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
                {/*<  Row>*/}
                {/*    <Col>*/}
                        <TabBar/>
                    {/*</Col>*/}
                {/*</Row>*/}
                <Row>
                    <Title2/>
                </Row>
                <TestBoard/>
            </Container>
        )
    }
}