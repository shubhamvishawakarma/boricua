import React from 'react'

import Headerbusiness from './Headerbusiness'

const Bmybooking = () => {
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
          <section className="bg-cover position-relative" style={{background: 'red url(assets/img/cover.jpg) no-repeat'}} data-overlay={3}>
            <div className="abs-list-sec"><a href="/baddlisting" className="add-list-btn"><i className="fas fa-plus me-2" />Add Listing</a></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="dashboard-head-author-clicl">
                    <div className="dashboard-head-author-thumb">
                      <img src="assets/img/t-7.png" className="img-fluid" alt="" />
                    </div>
                    <div className="dashboard-head-author-caption">
                      <div className="dashploio"><h4>Charles D. Robinson</h4></div>
                      <div className="dashploio"><span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span></div>
                      <div className="listing-rating high"><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                    <h1 className="ft-medium">My Bookings</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                        <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="#" className="theme-cl">My Bookings</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-shopping-basket me-2 theme-cl fs-sm" />All Bookings</h4>	
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="dashboard-bookings-wraps">
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Steven I. Gonzales<span className="bko-dates">10 July 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-2.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>James M. Gonzalez<span className="bko-dates">06 May 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-info rounded text-info">Confirmed</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-3.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Diane J. Mack<span className="bko-dates">17 Apr 2022</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-warning rounded text-warning">Unpaid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-4.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Maria J. Barber<span className="bko-dates">10 July 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
        {/* ============================================================== */}
        {/* This page plugins */}
        {/* ============================================================== */}		
      </div>
  )
}

export default Bmybooking
