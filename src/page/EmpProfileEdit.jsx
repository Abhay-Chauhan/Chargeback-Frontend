import React from "react";
import EmpProfileEditComponents from "../components/EmpProfileEdit.components";
import EmpLayoutSideComponents from "../components/EmpLayoutSide.components";
import EmpLayoutTopComponents from "../components/EmpLayoutTop.components";

const EmpProfileEdit = () => {
    return (
        <div className="container-fluid" >
            <div className="row m-0" >
                <div className="col-md-3 col-sm-3 col-lg-3" >
                    <EmpLayoutSideComponents />
                </div>
                < div className="col-md-9 col-sm-9 col-lg-9" >
                    <div className="row m-0" >
                        <div className="col-md-12 col-sm-12 col-lg-12" >
                            <EmpLayoutTopComponents />
                        </div>
                    </div>
                    < div className="row m-0" >
                        <div className="col-md-12 col-sm-12 col-lg-12" >

                            <EmpProfileEditComponents />


                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default EmpProfileEdit;
