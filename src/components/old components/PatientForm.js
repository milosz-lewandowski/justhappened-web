import React from "react";
import {Form} from "react-bootstrap";
import axios from 'axios';

export class PatientForm extends React.Component {

    state = {
        patients: []
    }

    componentDidMount() {
        const url = "https://miloszlewandowski.pl//users"/
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ patients: data })
                console.log(this.state.patients)
            })
    }

    render() {
        return (
            <div>
                <Form action="https://miloszlewandowski.pl/patients"
                method="POST">
                    <p><label htmlFor="first_name">Name:</label>
                        <input type="text" name="first_name" id="fname"></p>

                    <p><label htmlFor="last_name">Last Name:</label>
                        <input type="text" name="last_name" id="lname"></p>

                    <input value="Submit" type="submit" onClick="submitform()">
                </Form>
            </div>
        )
    }
}
