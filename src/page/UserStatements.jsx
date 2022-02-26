import React from "react";
import UserStatementsComponents from "../components/UserStatements.components";
import UserLayoutSideComponents from "../components/UserLayoutSide.components";
import UserLayoutTopComponents from "../components/UserLayoutTop.components";

const UserStatements = () => {
    return (
        <div className="container-fluid" >
            <div className="row m-0" >
                <div className="col-md-3 col-sm-3 col-lg-3" >
                    <UserLayoutSideComponents />
                </div>
                < div className="col-md-9 col-sm-9 col-lg-9" >
                    <div className="row m-0" >
                        <div className="col-md-12 col-sm-12 col-lg-12" >
                            <UserLayoutTopComponents />
                        </div>
                    </div>
                    < div className="row m-0" >
                        <div className="col-md-12 col-sm-12 col-lg-12" >

                            <UserStatementsComponents />


                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default UserStatements;
