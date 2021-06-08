import React from "react";
import {Navbar, Nav, NavDropdown, Dropdown,} from "react-bootstrap";


export class NavigationBar extends React.Component{
    render() {
        return(
            <Navbar bg="light" expand="lg" >
                <Nav className="justify-content-center">
                        <NavDropdown title="resumes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/resumes/pl_java_dev_m_lewandowski_2021.pdf" >polish</NavDropdown.Item>
                            <NavDropdown.Item href="/resumes/en_java_dev_m_lewandowski_2021.pdf" >english</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="https://miloszlewandowski.pl/therapists">Rest API</Nav.Link>
                    <Nav.Link href="https://miloszlewandowski.pl/justhappened">JustHappened</Nav.Link>
                    <Nav.Link href="https://miloszlewandowski.pl/index">miloszlewandowski.pl</Nav.Link>
            </Navbar>
        )
    }
}