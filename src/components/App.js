import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {NavigationBar} from "./navigation/NavigationBar";
import {Title} from "./a1_rows/Title";
import {SectionsContainer} from "./a2_tab_accordion/SectionsContainer";
import {TabBar} from "./a1_rows/TabBar";

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
                        <TabBar/>
                    </Col>
                </Row>
            </Container>
        )
    }
}