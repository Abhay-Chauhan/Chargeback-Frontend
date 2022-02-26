import React from "react";
import { useLocation } from "react-router-dom";

const UserTrackissue = () => {
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
                                    <center><h4 className="d-flex align-items-center"><b>Track Issue</b></h4></center>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                    <div className="track-search">
                                                    <div className="form-track">
                                                        <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Search anything..."></input> 
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6><b>Transaction No:</b> 123456</h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6><b>Description:</b> Money deducted from account but payment not completed.</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6><b>Transaction Date:</b> 01/07/2021</h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6><b>Transaction Mode:</b> UPI/Card</h6>
                                                    </div>
                                                </div>
                                                <div className="track">
                                                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Chargeback Raised</span> </div>
                                                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Chargeback Acknowledged</span> </div>
                                                    <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Accepted/Declined</span> </div>
                                                    <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Money Credited</span> </div>
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
        </div>
    );
};

export default UserTrackissue;
