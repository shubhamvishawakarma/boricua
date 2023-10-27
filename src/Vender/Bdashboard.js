import React from 'react'
import Headerbusiness from './Headerbusiness'
import Dashboardimage from '../Component/Dashboardimage'

const Bdashboard = () => {
  return (
    <div>
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        <div className="preloader" />
        {/* ============================================================== */}
        {/* Main wrapper - style you can find in pages.scss */}
        {/* ============================================================== */}
        <div id="main-wrapper">
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* Start Navigation */}
        <Headerbusiness/>
          {/* End Navigation */}
          <div className="clearfix" />
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* =============================== Dashboard Header ========================== */}
          
          <Dashboardimage/>

          {/* =============================== Dashboard Header ========================== */}
          {/* ======================= dashboard Detail ======================== */}
          <div className="goodup-dashboard-wrap gray px-4 py-5">
            <a className="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
              <i className="fas fa-bars me-2" />Dashboard Navigation
            </a>
            <div className="collapse" id="MobNav">
              <div className="goodup-dashboard-nav sticky-top">
                <div className="goodup-dashboard-inner">
                  <ul data-submenu-title="Main Navigation">
                    <li className="active"><a href="/bdashboard"><i className="lni lni-dashboard me-2" />Dashboard</a></li>
                    <li><a href="/bmylisting"><i className="lni lni-files me-2" />My Listings</a></li>
                    <li><a href="/baddlisting"><i className="lni lni-add-files me-2" />Add Listing</a></li>
                    <li><a href="/bsavedlisting"><i className="lni lni-bookmark me-2" />Saved Listing</a></li>
                    <li><a href="/bmybooking"><i className="lni lni-briefcase me-2" />My Bookings<span className="count-tag bg-warning">4</span></a></li>
                    <li><a href="/bwallet"><i className="lni lni-mastercard me-2" />Wallet</a></li>
                    <li><a href="/bmessage"><i className="lni lni-envelope me-2" />Messages<span className="count-tag">4</span></a></li>
                  </ul>
                  <ul data-submenu-title="My Accounts">
                    <li><a href="/bmyprofile"><i className="lni lni-user me-2" />My Profile </a></li>
                    <li><a href="/bchangepassword"><i className="lni lni-lock-alt me-2" />Change Password</a></li>
                    <li><a href="javascript:void(0);"><i className="lni lni-trash-can me-2" />Delete Account</a></li>
                    <li><a href="/loginbusiness"><i className="lni lni-power-switch me-2" />Log Out</a></li>
                  </ul>
                </div>					
              </div>
            </div>
            <div className="goodup-dashboard-content">
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Hello, Darnell Johns</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#" className="theme-cl">Dashboard</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 mb-3">
                    <div className="alert bg-inverse text-light d-flex align-items-center" role="alert">
                      <p className="p-0 m-0 ft-medium full-width">Your listing <a href="#" className="text-success">Wedding Willa Resort</a> has been approved!</p>
                      <button type="button" className="btn-close text-light" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="dsd-boxed-widget py-5 px-4 bg-danger rounded">
                      <h2 className="ft-medium mb-1 fs-xl text-light count">46</h2>
                      <p className="p-0 m-0 text-light fs-md">Active Listings</p>
                      <i className="lni lni-empty-file" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="dsd-boxed-widget py-5 px-4 bg-success rounded">
                      <h2 className="ft-medium mb-1 fs-xl text-light count">2615</h2>
                      <p className="p-0 m-0 text-light fs-md">Views Listing</p>
                      <i className="lni lni-eye" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="dsd-boxed-widget py-5 px-4 bg-warning rounded">
                      <h2 className="ft-medium mb-1 fs-xl text-light count">312</h2>
                      <p className="p-0 m-0 text-light fs-md">Total Reviews</p>
                      <i className="lni lni-comments" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="dsd-boxed-widget py-5 px-4 bg-purple rounded">
                      <h2 className="ft-medium mb-1 fs-xl text-light count">410</h2>
                      <p className="p-0 m-0 text-light fs-md">Total Bookings</p>
                      <i className="lni lni-wallet" />
                    </div>
                  </div>
                </div>
                {/* row */}
                <div className="row">
                  {/* Area Chart */}
                  <div className="col-md-8 col-sm-12">
                    <div className="dash-card">
                      <div className="dash-card-header">
                        <h4 className="mb-0">View Chart</h4>
                      </div>
                      <div className="dash-card-body">
                        <div className="chart" id="revenue-chart" style={{height: '365px'}} />
                      </div>
                    </div>
                  </div>
                  {/* Donut Chart */}
                  <div className="col-md-4 col-sm-12">
                    <div className="dash-card">
                      <div className="dash-card-header">
                        <h4>Followers</h4>
                      </div>
                      <div className="ground-list ground-hover-list">
                        <div className="ground ground-list-single">
                          <a href="#">
                            <img className="ground-avatar" src="assets/img/t-1.png" alt="..." />
                            <span className="profile-status bg-online pull-right" />
                          </a>
                          <div className="ground-content">
                            <h6><a href="#">Maryam Amiri</a></h6>
                            <small className="text-fade"><i className="fas fa-map-marker-alt me-1" />New York, USA</small>
                          </div>
                        </div>
                        <div className="ground ground-list-single">
                          <a href="#">
                            <img className="ground-avatar" src="assets/img/t-2.png" alt="..." />
                            <span className="profile-status bg-offline pull-right" />
                          </a>
                          <div className="ground-content">
                            <h6><a href="#">Maryam Amiri</a></h6>
                            <small className="text-fade"><i className="fas fa-map-marker-alt me-1" />Canada, USA</small>
                          </div>
                        </div>
                        <div className="ground ground-list-single">
                          <a href="#">
                            <img className="ground-avatar" src="assets/img/t-3.png" alt="..." />
                            <span className="profile-status bg-working pull-right" />
                          </a>
                          <div className="ground-content">
                            <h6><a href="#">Maryam Amiri</a></h6>
                            <small className="text-fade"><i className="fas fa-map-marker-alt me-1" />Denver, USA</small>
                          </div>
                        </div>
                        <div className="ground ground-list-single">
                          <a href="#">
                            <img className="ground-avatar" src="assets/img/t-4.png" alt="..." />
                            <span className="profile-status bg-busy pull-right" />
                          </a>
                          <div className="ground-content">
                            <h6><a href="#">Maryam Amiri</a></h6>
                            <small className="text-fade"><i className="fas fa-map-marker-alt me-1" />Liverpool, UK</small>
                          </div>
                        </div>
                        <div className="ground ground-list-single">
                          <a href="#">
                            <img className="ground-avatar" src="assets/img/t-5.png" alt="..." />
                            <span className="profile-status bg-online pull-right" />
                          </a>
                          <div className="ground-content">
                            <h6><a href="#">Maryam Amiri</a></h6>
                            <small className="text-fade"><i className="fas fa-map-marker-alt me-1" />California</small>
                          </div>
                        </div>
                      </div>
                    </div>	
                  </div>
                </div>
                {/* /.row */}
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="goodup-dashboard-grouping-list with-icons">
                      <h4>Recent Activities</h4>
                      <ul>
                        <li>
                          <i className="dsd-icon-uiyo ti-layers text-purple bg-light-purple" /> Your listing <strong><a href="#">Hotel The Lalit</a></strong> has been approved!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-star text-success bg-light-success" /> Christopher K. Allen left a review <div className="grping-list-rates high" data-rating={5.0} /> on <strong><a href="#">Bluchee Burger</a></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-heart text-warning bg-light-warning" /> Someone bookmarked your <strong><a href="#">Snow Valley House</a></strong> listing!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-star text-info bg-light-info" /> Jesus A. Rhodes left a review <div className="grping-list-rates mid" data-rating="3.8" /> on <strong><a href="#">Sonal Cafe</a></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-heart text-danger bg-light-danger" /> Someone bookmarked your <strong><a href="#">Blue Bear Bar</a></strong> listing!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-star text-success bg-light-success" /> Michael H. Bright left a review <div className="grping-list-rates high" data-rating="4.7" /> on <strong><a href="#">Lucky Dhaba</a></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dsd-icon-uiyo ti-star text-purple bg-light-purple" /> Arnold A. Lynn left a review <div className="grping-list-rates low" data-rating="2.8" /> on <strong><a href="#">Madhu Sweet House</a></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="goodup-dashboard-grouping-list invoices with-icons">
                      <h4>Invoices</h4>
                      <ul>
                        <li><i className="dsd-icon-uiyo ti-files text-warning bg-light-warning" />
                          <strong>Starter Plan</strong>
                          <ul>
                            <li className="unpaid">Unpaid</li>
                            <li>Order: #LS5410</li>
                            <li>Date: 16 Sep 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dsd-icon-uiyo ti-files text-success bg-light-success" />
                          <strong>Basic Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #LS5487</li>
                            <li>Date: 19 Aug 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dsd-icon-uiyo ti-files text-danger bg-light-danger" />
                          <strong>Extended Plan</strong>
                          <ul>
                            <li className="pending">Pending</li>
                            <li>Order: #LS6413</li>
                            <li>Date: 07 Jul 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dsd-icon-uiyo ti-files text-success bg-light-success" />
                          <strong>Platinum Plan</strong>
                          <ul>
                            <li className="cancel">Cancel</li>
                            <li>Order: #LS6100</li>
                            <li>Date: 15 Jun 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dsd-icon-uiyo ti-files text-warning bg-light-warning" />
                          <strong>Extended Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #LS6257</li>
                            <li>Date: 14 05 May 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dsd-icon-uiyo ti-files text-info bg-light-info" />
                          <strong>Platinum Plan</strong>
                          <ul>
                            <li className="unpaid">Unpaid</li>
                            <li>Order: #LS6548</li>
                            <li>Date: 10 May 2022</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="javascript:void(0);" className="button gray">View Invoice</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>	
                </div>	
              </div>
              {/* footer */}
              <div className="row">
                <div className="col-md-12">
                  <div className="py-3">© 2022 Goodup. Designd By ThemezHub.</div>
                </div>
              </div>
            </div>
          </div>
          {/* ======================= dashboard Detail End ======================== */}
          <a id="tops-button" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
        </div>
        {/* ============================================================== */}
        {/* End Wrapper */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* All Jquery */}
        {/* ============================================================== */}
        {/* Morris.js charts */}
        {/* Custom Chart JavaScript */}
        {/* ============================================================== */}
        {/* This page plugins */}
        {/* ============================================================== */}		
      </div>
  )
}

export default Bdashboard
