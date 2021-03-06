import React from "react";
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

const IssueComponents = () => {
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
    
    <div className="app-wraper">
      <div className="container" style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          
            <h1 className="text-center">Issue Component</h1>
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
  );
};

export default IssueComponents;
