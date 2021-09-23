import React from "react";
import axios from 'axios';

export class GetPatient extends React.Component {

    state = {
        patients: []
    }


    render() {
        return (
            <div className="container">
                <div className="col-xs-8">
                    <h1>React Axios Example</h1>
                    {this.state.patients.map((patient) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{patient.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {patient.email}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}