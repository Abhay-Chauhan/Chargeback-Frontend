import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const EmpDashComponents = () => {
    return (
        <div className="container">
            <div className="main-body">


                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                                    <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <p className="text-secondary mb-1"><b>Emp Id: XXX88</b></p>
                                        <p className="text-secondary mb-1"><b>Emp Type: Manager</b></p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Kenneth Valdez
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (320) 380-4539
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                                <hr></hr>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gutters-sm">
                    <div className="col-md-12">


                        <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">Active Tickets</h6>
                                        <table className="table">
                                            <tr>
                                                <th>Date</th>
                                                <th>Transaction Id</th>
                                                <th>Amount</th>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">Completed Tickets</h6>
                                        <table className="table">
                                            <tr>
                                                <th>Date</th>
                                                <th>Transaction Id</th>
                                                <th>Amount</th>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>
                                            <tr>
                                                <td>DD/MM/YYYY</td>
                                                <td>12334</td>
                                                <td>450</td>
                                            </tr>

                                        </table>
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

export default EmpDashComponents;
