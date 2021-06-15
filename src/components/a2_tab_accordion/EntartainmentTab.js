import React from "react";
import {Accordion, Button, Card} from "react-bootstrap";
import {MusicSection} from "./a3_entertainment_accordion_card/MusicSection";
import {GameSection} from "./a3_entertainment_accordion_card/game/GameSection";
import {Jhdesc} from "./a3_entertainment_accordion_card/Jhdesc";


export class EntartainmentTab extends React.Component{
    render() {
        return(
            <Accordion defaultActiveKey="1">
                {/*<Card>*/}
                {/*    <Card.Header>*/}
                {/*        <Accordion.Toggle as={Button} variant="text" eventKey="1">*/}
                {/*            /!*<PatientForm/>*!/*/}
                {/*        </Accordion.Toggle>*/}
                {/*    </Card.Header>*/}
                {/*    <Accordion.Collapse eventKey="1">*/}
                {/*        <Card.Body>*/}
                {/*            <GameSection/>*/}
                {/*        </Card.Body>*/}
                {/*    </Accordion.Collapse>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                {/*    <Card.Header>*/}
                {/*        <Accordion.Toggle as={Button} variant="text" eventKey="0">*/}
                {/*            Game Section*/}
                {/*        </Accordion.Toggle>*/}
                {/*    </Card.Header>*/}
                {/*    <Accordion.Collapse eventKey="0">*/}
                {/*        <Card.Body>*/}
                {/*            <GameSection/>*/}
                {/*        </Card.Body>*/}
                {/*    </Accordion.Collapse>*/}
                {/*</Card>*/}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="3">
                            Music Section
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <MusicSection />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="4">
                            JustHappened
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Jhdesc/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}