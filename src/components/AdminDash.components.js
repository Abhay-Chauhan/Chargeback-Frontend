import React from "react";
import { useLocation } from "react-router-dom";

const AdminDashComponents = () => {
    return (
        <section className="">
        <div className="home-content">
            <div className="overview-boxes">
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Employees</div>
                  <div className="number">40,876</div>
                  
                </div>
                <i className='bx bx-cart-alt cart fa fa-user'></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Customers</div>
                  <div className="number">38,876</div>
                  
                </div>
                <i className='bx bxs-cart-add cart two fa fa-users'></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Pending Request</div>
                  <div className="number">45</div>
                  
                </div>
                <i className='bx bx-cart cart three fa fa-bullhorn'></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Completed Requests</div>
                  <div className="number">11,086</div>
                  
                </div>
                <i className='bx bxs-cart-download cart four fa fa-clipboard'></i>
              </div>
            </div>
  
            <div className="sales-boxes">
              <div className="recent-sales box">
                <div className="title">Recent Tickets</div>
                <div className="sales-details">
                  <ul className="details">
                    <li className="topic">Date</li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                    <li><a href="#">02 Jan 2021</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Customer</li>
                    <li><a href="#">Alex Doe</a></li>
                    <li><a href="#">David Mart</a></li>
                    <li><a href="#">Roe Parter</a></li>
                    <li><a href="#">Diana Penty</a></li>
                    <li><a href="#">Martin Paw</a></li>
                    <li><a href="#">Doe Alex</a></li>
                    <li><a href="#">Aiana Lexa</a></li>
                    <li><a href="#">Rexel Mags</a></li>
                    <li><a href="#">Tiana Loths</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Sales</li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Returned</a></li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Returned</a></li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Delivered</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Total</li>
                    <li><a href="#">$204.98</a></li>
                    <li><a href="#">$24.55</a></li>
                    <li><a href="#">$25.88</a></li>
                    <li><a href="#">$170.66</a></li>
                    <li><a href="#">$56.56</a></li>
                    <li><a href="#">$44.95</a></li>
                    <li><a href="#">$67.33</a></li>
                    <li><a href="#">$23.53</a></li>
                    <li><a href="#">$46.52</a></li>
                  </ul>
                </div>
                <div className="button">
                  <a href="#">See All</a>
                </div>
              </div>
            </div>
          </div>
    </section>
    );
};

export default AdminDashComponents;
