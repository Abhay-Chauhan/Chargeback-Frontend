import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import UserInput from "./UserInput.components";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    axios
        .post(baseUrl + "/issue", Object.fromEntries(data.entries()))
        .then((r) => {
            console.log("Done with Issue" + r);
        });
};



const UserRaiseComponents = () => {

    const [values, setValues] = useState({});

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputs = [
        {
            type: "number",
            placeholder: "Enter Customer Id",
            name: "customerId",
            label: "Customer Id",
        },
        {
            type: "number",
            placeholder: "Enter Issue Id",
            name: "issueId",
            label: "Issue Id",
        },
        {
            type: "number",
            placeholder: "Enter Transition Id",
            name: "transitionId",
            label: "Transition Id",
        },
        {
            type: "text",
            placeholder: "Describe your point",
            name: "descriptions",
            label: "Description",
        },
        {
            type: "datetime-local",
            placeholder: "Issue Date Time",
            name: "IssueDateTime",
            label: "Enter Issue Date and Time",
        },
        // {
        //   type: "select",
        //   placeholder: "dropdown",
        //   name: "dropdown",
        //   label: "dropdown",
        //   options: ["dropdown 1", "dropdown 2"],
        // },
        {
            type: "datetime-local",
            placeholder: "Transition Date Time",
            name: "TransitionDateTime",
            label: "Enter Transition Date and Time",
        },
        {
            type: "text",
            placeholder: "Enter Status",
            name: "status",
            label: "Enter Status",
        },
        {
            type: "number",
            placeholder: "Enter Ammount",
            name: "ammount",
            label: "Enter Ammount",
        },
        {
            type: "text",
            placeholder: "Enter Transtion Type",
            name: "TransitionType",
            label: "Enter Transtion Type",
        },
        {
            type: "text",
            placeholder: "Enter Transtion Mode",
            name: "TransitionMode",
            label: "Enter Transtion Mode",
        },
    ];

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-12 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                                    <div className="mt-3">
                                        <h4>Himanshu Gupta</h4>
                                        <p className="text-secondary mb-1"><b>Cust Id:</b> XXX88</p>
                                        <p className="text-secondary mb-1"><b>Acc Type:</b> Savings</p>
                                        <p className="text-muted font-size-sm"><b>Address:</b> Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters-sm">
                    <div className="col-md-12">
                        <div className="row gutters-sm">
                            <div className="col-sm-12 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="d-flex align-items-center"><b>Current Balance</b>:852643</h4>
                                        <form onSubmit={handleSubmit}>

                                            <h1 className="text-center">Raise Issue</h1>
                                            <div className="row">
                                                {inputs.map((input, index) => (
                                                    <div className="col-md-6 col-sm-12" key={index}>
                                                        <UserInput
                                                            {...input}
                                                            value={values[input.name]}
                                                            onChange={(e) => onChange(e)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <button
                                                className=" btn btn-primary"
                                                style={{ width: "30%", margin: "1em auto" }}
                                            >
                                                Submit
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRaiseComponents;
