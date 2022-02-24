import React from "react";
import AdminDashComponents from "../components/AdminDash.components";
import LayoutSideComponents from "../components/LayoutSide.components";
import LayoutTopComponents from "../components/LayoutTop.components";

const AdminDash = () => {
  return (
    <div className="container-fluid">
      <div className="row m-0">
        <div className="col-md-3 col-sm-3 col-lg-3">
          <LayoutSideComponents />
        </div>
        <div className="col-md-9 col-sm-9 col-lg-9">
          <div className="row m-0">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <LayoutTopComponents/>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="center-card">
              <AdminDashComponents />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
  );
};

export default AdminDash;
