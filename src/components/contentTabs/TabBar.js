import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import {Diplomas} from "./Diplomas";
import {Contact} from "./Contact";

export class TabBar extends React.Component{
    render() {
        return(
            <Tabs defaultActiveKey="aboutme">
                <Tab eventKey="aboutme" title="About me">
                    <p>As a software developer I constantly work on
                        gaining knowledge and skills in the field of
                        programming and application design. My
                        motto is that a sharp mind comes along with a
                        healthy lifestyle. That is why I am both a
                        sportsman and a developer. I am full of energy,
                        always ready to face new challenges. I enjoy
                        working with people. My ideal job is one that
                        connects teamwork and challenging tasks. My
                        working style: creativity and cooperation to
                        meet the project goals.
                    </p>
                </Tab>
                <Tab title="Career goals" eventKey="careergoals">
                    <p>
                        Gain practical experience in Java, Spring Boot and Docker. I also want to evolve
                        my skills & knowledge in mobile applications development with Flutter and Dart.
                        Currently I am also working on preparation to earn higher levels of Oracle Java
                        certification, especially the newest versions of Java.
                    </p>
                </Tab>
                <Tab title="Diplomas & certificates" eventKey="diplomas" >
                    <Diplomas/>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact/>
                </Tab>
            </Tabs>
        )
    }
}