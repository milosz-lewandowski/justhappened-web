import React from "react";
import {PhoneItem} from "./a4_card_item/PhoneItem";
import {Card, Image} from "react-bootstrap";
import {MailItem} from "./a4_card_item/MailItem";

export class AboutContactToHim extends React.Component {
    render() {
        return (
            <Card.Text>
                <PhoneItem/>
                <br/>
                <MailItem/>
            </Card.Text>
        )
    }
}