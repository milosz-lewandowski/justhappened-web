import React from "react";
import {Accordion, Card, Button} from "react-bootstrap";
import {Game} from "./game/Game";
import {MusicSection} from "./MusicSection";
import {TechnicalDetails} from "./TechnicalDetails";
import {ResumeDropdown} from "./ResumeDropdown";
import {GameSection} from "./GameSection";


export class SectionsContainer extends React.Component{
    render() {
        return(
            <Accordion defaultActiveKey="">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="1">
                            Game Section
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {/*<Game />*/}
                            <GameSection/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="9">
                            test
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body>
                            <ResumeDropdown />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="0">
                            Music Section
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <MusicSection />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="text" eventKey="2">
                            Technologies
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <TechnicalDetails />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}