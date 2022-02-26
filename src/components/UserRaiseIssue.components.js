import React from "react";
import { useLocation } from "react-router-dom";

const UserRaiseIssue = () => {
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
                                        <h6 className="d-flex align-items-center mb-3">Account Statements</h6>
                                        <h4 className="d-flex align-items-center"><b>Current Balance</b>:852643</h4>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th scope="col">Date-Time</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Transaction No</th>
                                                            <th scope="col">Debit/Credit</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DD/MM/YYYY</td>
                                                            <td>UPI id chauhanabhay1998@okhadfc</td>
                                                            <td>Transaction No</td>
                                                            <td>+2500</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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

export default UserRaiseIssue;
