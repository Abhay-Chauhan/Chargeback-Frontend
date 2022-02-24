import React from "react";

const LayoutSideComponents = () => {
    return (
        <>
            <div className="nav-sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus'></i>
                    <span className="logo_name">ABC Bank</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#" className="active">
                            <i className='fa fa-home'></i>
                            <span className="links_name">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">Team</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Add Employee</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-list-ul fa fa-user'></i>
                            <span className="links_name">Manage Employee</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">All Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Manage Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2 fa fa-clipboard'></i>
                            <span className="links_name">Complaints</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-coin-stack fa fa-database'></i>
                            <span className="links_name">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog fa fa-cog'></i>
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                    <li className="log_out">
                        <a href="#">
                            <i className='bx bx-log-out fa fa-lock'></i>
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default LayoutSideComponents;
