import React from "react";
import { useLocation } from "react-router-dom";

const UserDashComponents = () => {
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
                                        <h4>Himanshu Gupta</h4>
                                        <p className="text-secondary mb-1"><b>Cust Id:</b> XXX88</p>
                                        <p className="text-secondary mb-1"><b>Acc Type:</b> Savings</p>
                                        <p className="text-muted font-size-sm"><b>Address:</b> Bay Area, San Francisco, CA</p>
                                        
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
                                        <h6 className="mb-0">Customer ID</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        1234567
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        xyz@gmail.com
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (+91) 98816-92029
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Account No.</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        727510110008888
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">IFSC</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        BKID0007275
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Branch Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Railway Road, Pune
                                    </div>
                                </div>
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
                                        <h6 className="d-flex align-items-center mb-3">Profile Snapshots</h6>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="snap-high">Acc Open Date</p><p className="snap-nor">25/09/2021</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="snap-high">Account Type</p><p className="snap-nor">Savings</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="snap-high">Marital Status</p><p className="snap-nor">Unmarried</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="snap-high">Nominee</p><p className="snap-nor">Rohan Singh</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="snap-high">Date of Birth</p><p className="snap-nor">09/01/1997</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="snap-high">Credit Score</p><p className="snap-nor">749</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">Recent Activity</h6>
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

export default UserDashComponents;
