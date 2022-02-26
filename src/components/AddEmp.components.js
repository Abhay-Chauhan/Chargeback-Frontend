import React from "react";
import { useLocation } from "react-router-dom";

const AdminDashComponents = () => {
  return (
    <section className="h-100 h-custom gradient-custom-2">
      
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5" >General Infomation</h3>


                      <div className="d-flex flex-column align-items-center text-center" style={{margin: "2em"}}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                      </div>
<div className="form-group">
                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Title</option>
                          <option value="2">Mr.</option>
                          <option value="3">Mrs.</option>
                          <option value="4">Ms.</option>
                        </select>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
                            <label className="form-label" >First name</label>
                          </div>

                        </div>
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
                            <label className="form-label" >Last name</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <select className="select form-control">
                          <option value="1">User Type</option>
                          <option value="2">Admin</option>
                          <option value="3">Employee</option>
                          <option value="4">User</option>
                        </select>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
                          <label className="form-label" >User Type</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">

                          <select className="select form-control">
                            <option value="1">Designation</option>
                            <option value="2">Manager</option>
                            <option value="3">Operator</option>
                          </select>

                        </div>
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                          <div className="form-outline">
                            <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
                            <label className="form-label" >Designation</label>
                          </div>

                        </div>

                      </div>
</div>
                    </div>
                  </div>
                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" >Street + Nr</label>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
                          <label className="form-label" >Additional Information</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea4" className="form-control form-control-lg" />
                            <label className="form-label" >Zip Code</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea5" className="form-control form-control-lg" />
                            <label className="form-label" >Place</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
                          <label className="form-label">Country</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea7" className="form-control form-control-lg" />
                            <label className="form-label">Code +</label>
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
                            <label className="form-label">Phone Number</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-outline form-white">
                          <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
                          <label className="form-label">Your Email</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label text-white" >
                          I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your site.
                        </label>
                      </div>

                      <button type="button" className="btn btn-light btn-lg" data-mdb-ripple-color="dark">Register</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashComponents;
