import React from "react";
import { NavLink } from "react-router-dom";

const UserLayoutSideComponents = () => {
    return (
        <>
            <div className="nav-sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus'></i>
                    <span className="logo_name">ABC Bank</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className="active">
                            <i className='fa fa-home'></i>
                            <span className="links_name">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/UserStatements">
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">My Statements</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/UserRaise">
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Raise Issue</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/UserTrackissue">
                            <i className='bx bx-list-ul fa fa-user'></i>
                            <span className="links_name">Track Issue</span>
                        </NavLink>
                    </li>
                   {/* <li>
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
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-cog fa fa-cog'></i>
                            <span className="links_name">Setting</span>
                        </NavLink>
                    </li>*/}
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

export default UserLayoutSideComponents;
