import React from "react";
import {Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button,} from "react-bootstrap";


export class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" as="ToggleButton">
                {/*<Navbar.Brand href="#home">Junior Dev</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link>About me</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Get resume" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/resumes/en_java_dev_m_lewandowski_2021.pdf">english
                                resume</NavDropdown.Item>
                            <NavDropdown.Item href="/resumes/pl_java_dev_m_lewandowski_2021.pdf">polish
                                resume</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            // <Navbar bg="light" expand="lg">
            //     {/*<Navbar.Brand as="toggle">Get resume</Navbar.Brand>*/}
            //     <Navbar.Toggle />
            //     <Navbar.Collapse >
            //     <Nav>
            //         <Nav.Item>
            //             <Nav.Link >english</Nav.Link>
            //         </Nav.Item>
            //         <Nav.Item>
            //             <Nav.Link href="/resumes/pl_java_dev_m_lewandowski_2021.pdf">polish</Nav.Link>
            //         </Nav.Item>
            //         <NavDropdown title="resumes" id="basic-nav-dropdown">
            //         </NavDropdown>
            //     </Nav>
            //     </Navbar.Collapse>
            // </Navbar>
        );
    }
}