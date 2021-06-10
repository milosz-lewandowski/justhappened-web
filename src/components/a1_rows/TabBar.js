import React from "react";
import {Card, CardColumns, Dropdown, Tab, Tabs} from "react-bootstrap";
import {About} from "../a2_tab_accordion/About";
import {IT_tab} from "../a2_tab_accordion/IT_tab";
import {EntartainmentTab} from "../a2_tab_accordion/EntartainmentTab";
import {ResumeDropdown} from "../a2_tab_accordion/a3_entertainment_accordion_card/ResumeDropdown";

export class TabBar extends React.Component{
    render() {
        return(
            <Tabs fill defaultActiveKey="about">
                <Tab eventKey="about" title="About...">
                    <About/>
                </Tab>
                <Tab eventKey="itlife" title="IT life">
                    <IT_tab/>
                </Tab>
                <Tab eventKey="ent" title="Entertainment">
                    <EntartainmentTab/>
                </Tab>
                <Tab eventKey="resume" title="Extremly interesting resume">
                    <ResumeDropdown/>
                    {/*<Dropdown.Item href="/resumes/en_java_dev_m_lewandowski_2021.pdf">english</Dropdown.Item>*/}
                    {/*<Dropdown.Item href="/resumes/pl_java_dev_m_lewandowski_2021.pdf">polish</Dropdown.Item>*/}
                </Tab>
                {/*<Tab title="Diplomas & certificates" eventKey="diplomas" >*/}
                {/*    <Diplomas/>*/}
                {/*</Tab>*/}
            </Tabs>
        )
    }
}