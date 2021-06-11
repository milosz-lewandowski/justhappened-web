import React from "react";
import {Accordion, Button, Card, ListGroup} from "react-bootstrap";
import {PhoneItem} from "./a3_accordion_card/a4_card_item/PhoneItem";
import {MailItem} from "./a3_accordion_card/a4_card_item/MailItem";
import {GithubItem} from "./a3_accordion_card/a4_card_item/GithubItem";
import {LinkedinItem} from "./a3_accordion_card/a4_card_item/LinkedinItem";
import {CredlyProfileItem} from "./a3_accordion_card/a4_card_item/CredlyProfileItem";
import {AboutThisPage} from "./a3_accordion_card/AboutThisPage";
import {AboutThisGuy} from "./a3_accordion_card/AboutThisGuy";

export class About extends React.Component {
    render() {
        return (
            <Accordion defaultActiveKey="4">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="1">
                            ...this page
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <AboutThisPage/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="2">
                            ...this guy
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <AboutThisGuy/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="3">
                            ...contact to him
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body as={ListGroup} fluid>
                            {/*<AboutContactToHim/>*/}
                            <ListGroup.Item fluid>
                                <PhoneItem/>
                            </ListGroup.Item>
                            <ListGroup.Item fluid>
                                <MailItem/>
                            </ListGroup.Item>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="4">
                            ...for other websites requests - reply
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body as={ListGroup}>
                            <ListGroup.Item>
                                <GithubItem/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <LinkedinItem/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <CredlyProfileItem/>
                            </ListGroup.Item>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}