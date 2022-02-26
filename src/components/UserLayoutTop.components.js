import React from "react";

const UserLayoutTopComponents = () => {
    return (
        <>
            <section className="home-section" style={{ height: '10px' }} >
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu fa fa-menu sidebarBtn'></i>
                        <span className="dashboard">User Panel</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..."></input>
                        <i className='bx bx-search fa fa-search'></i>
                    </div>
                    <div className="profile-details">
                        <img src={require("../assets/profile.jpg")} alt=""></img>
                        <span className="admin_name">Prem Shahi</span>
                        <i className='bx bx-chevron-down fa fa-chevron-down'></i>
                    </div>
                </nav>


            </section>

        </>
    );
};

export default UserLayoutTopComponents;
