import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Game} from "./game/Game";

export class GameSection extends React.Component{
    render() {
        return(
            //TODO: add game alignment
            <Game />
        )
    }
}