import React, {useState} from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";

export class TechnicalDetails extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <p>Because my technologies are listed in my resume, which is available in “Extremely interesting
                        resume” section I will shortly present my project’s architecture.</p>
                    <ul>
                        <p>Back-end:
                            <p/>
                            <li>Hosting: VPS with Debian OS.</li>
                            <li>All services are run in Docker containers.</li>
                            <li>Db: PostgerSQL database.</li>
                            <li>Rest API: Spring-Boot application.</li>
                        </p>
                        <p>Web server:
                            <p/>
                            <li>Node.js</li>
                            <li>Proxy server: Caddy</li>
                        </p>
                        <p>
                            Web:
                            <p/>
                            <li>React-Bootstrap</li>
                        </p>
                        <p>
                            Mobile:
                            <p/>
                            <li>Flutter application (soon available online).</li>
                            <li>I’m also developing compatible Wear OS software.</li>
                        </p>
                    </ul>
                    <p>All projects with docker-compose.yml file are available on my GitHub profile.</p>
                    <p>I started my adventure with React-Bootstrap recently, which is the reason of this page condition
                    </p>
                </Col>
            </Row>
        )
    }
}