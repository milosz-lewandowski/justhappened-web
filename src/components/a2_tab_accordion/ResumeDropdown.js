import {Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";

export class ResumeDropdown extends React.Component {
    render() {
        return (
            <DropdownButton title="resume" >
                {/*<Dropdown.Toggle variant={"success"} id="dropdown-basic">*/}
                {/*    resume*/}
                {/*</Dropdown.Toggle>*/}
                {/*<Dropdown.Menu>*/}
                    <Dropdown.Item href="/resumes/en_java_dev_m_lewandowski_2021.pdf">english</Dropdown.Item>
                    <Dropdown.Item href="/resumes/pl_java_dev_m_lewandowski_2021.pdf">polish</Dropdown.Item>
                {/*</Dropdown.Menu>*/}
            </DropdownButton>
        );
    }
}
