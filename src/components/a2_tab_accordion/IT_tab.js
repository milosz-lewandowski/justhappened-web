import React from "react";
import {Accordion, Button, Card} from "react-bootstrap";
import {TechnicalDetails} from "./a3_IT_accordion_card/TechnicalDetails";
import {CareerGoals} from "./a3_IT_accordion_card/CareerGoals";
import {Diplomas} from "./a3_IT_accordion_card/Diplomas";

export class IT_tab extends React.Component {
    render() {
        return (
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="1">
                            Technologies
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <TechnicalDetails/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="2">
                            Career goals
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <CareerGoals/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="3">
                            Diplomas and certificates
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Diplomas/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}