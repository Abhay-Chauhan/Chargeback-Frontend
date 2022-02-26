import React from "react";
import { NavLink } from "react-router-dom";

const EmpLayoutSideComponents = () => {
    return (
        <>
            <div className="nav-sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus'></i>
                    <span className="logo_name">ABC Bank</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/EmpDash" className="active">
                            <i className='fa fa-home'></i>
                            <span className="links_name">Home</span>
                        </NavLink>
                    </li>
                   {/* <li>
                        <NavLink>
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">Team</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Add Employee</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-list-ul fa fa-user'></i>
                            <span className="links_name">Manage Employee</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">All Customers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Manage Customers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-pie-chart-alt-2 fa fa-clipboard'></i>
                            <span className="links_name">Complaints</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-coin-stack fa fa-database'></i>
                            <span className="links_name">Analytics</span>
                        </NavLink>
                    </li>*/}
                    <li>
                        <NavLink to="/EmpProfileEdit">
                            <i className='bx bx-cog fa fa-cog'></i>
                            <span className="links_name">Setting</span>
                        </NavLink>
                    </li>
                    <li className="log_out">
                        <NavLink to="/login">
                            <i className='bx bx-log-out fa fa-lock'></i>
                            <span className="links_name">Log out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default EmpLayoutSideComponents;
