import React from "react";
import { useLocation } from "react-router-dom";

const LoginComponents = () => {
  const { state } = useLocation();
  return (

    <><div className="login-area">
    <div className="container">
        <div className="app-wrapper">
            <div className="row m-0">
              <div className="col-md-12 col-lg-12">
                <div className="d-flex justify-content-center p-3">
                  <h1 className="page-title">Sign In</h1>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-12 col-lg-12 justify-content-center">
              <div class="login-container-wrapper clearfix">
			
			<div class="tab-content">
				
					<form class="form-horizontal login-form">
						<div class="form-group relative">
						 <input class="form-control input-lg"  placeholder="Username" required="" type="text"> 
						</input> 
            </div>
						<div class="form-group relative">
							 <input class="form-control input-lg" placeholder="Password" required="" type="password">
                </input> 
            </div>
						<div class="form-group">
							<button class="btn btn-success btn-lg btn-block" type="submit">Login</button>
						</div>
						<div class="checkbox checkbox-success">
							 <input id="stay-sign" type="checkbox"></input> &nbsp;
              <label for="stay-sign">Stay signed in</label>
						</div>
            <hr />
						<div class="text-center">
							<label><a href="#">Forgot your password?</a></label>
						</div>
					</form>
				
				
			</div>
		</div>
              </div>
              
            </div>
        </div>
      </div>
    </div><div className="container-fluid">
        <div className="app-wrapper">
          <div className="d-flex justify-content-center p-3">
            <h1>Sign In</h1>
          </div>
          <div className="button">
            <input
              className="form-control input-sm "
              id="username"
              name="username"
              placeholder="User Name"
            ></input>
          </div>
          <div className="button">
            <input
              className="form-control input-sm "
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="button p-3">
            <label>Sign In as a</label>{" "}
          </div>
          <div className="button">
            <div className="row">
              <div className="col-3 ">
                <button name="adminbtn" id="adminbtn" className="btn-primary">
                  Admin
                </button>
              </div>
              <div className="col-3">
                <button className="btn-primary" name="empbtn" id="empbtn">
                  Employee
                </button>
              </div>
              <div className="col-4">
                <button className="btn-primary" name="custbtn" id="custbtn">
                  Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default LoginComponents;
