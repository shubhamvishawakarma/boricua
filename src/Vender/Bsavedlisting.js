import React from 'react'

import Headerbusiness from './Headerbusiness'

const Bsavedlisting = () => {
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
        {/* <div class="abs-list-sec"><a href="dashboard-add-listing.html" class="add-list-btn"><i class="fas fa-plus me-2"></i>Add Listing</a></div> */}
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
                <h1 className="ft-medium">Saved Listings</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li><a href="#">Home /</a></li>
                    <li><a href="#">Dashboard /</a></li>
                    <li><a href="#" className="theme-cl">Bookmark Listings</a></li>
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
                      <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file-alt me-2 theme-cl fs-sm" />My Listings</h4>	
                    </div>
                  </div>
                  <div className="dashboard-list-wraps-body py-3 px-3">
                    <div className="dashboard-listing-wraps">
                      {/* Single Listing Item */}
                      <div className="dsd-single-listing-wraps">
                        <div className="dsd-single-lst-thumb"><img src="assets/img/listing/o.jpg" className="img-fluid" alt="" /></div>	
                        <div className="dsd-single-lst-caption">
                          <div className="dsd-single-lst-title"><h5>Muraliwala Family Restaurant</h5></div>
                          <span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span>
                          <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                          <div className="ico-content">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-rating">
                                <div className="Goodup-rates">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <div className="Goodup-price-range">
                                <span className="ft-medium">34 Reviews</span>
                              </div>
                            </div>	
                          </div>
                          <div className="dsd-single-lst-footer">
                            <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                            <a href="javascript:void(0);" className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                            <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
                          </div>
                        </div>
                      </div>
                      {/* Single Listing Item */}
                      <div className="dsd-single-listing-wraps">
                        <div className="dsd-single-lst-thumb"><img src="assets/img/listing/r1.jpg" className="img-fluid" alt="" /></div>	
                        <div className="dsd-single-lst-caption">
                          <div className="dsd-single-lst-title"><h5>Gurukripya Family Restaurant</h5></div>
                          <span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span>
                          <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                          <div className="ico-content">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-rating">
                                <div className="Goodup-rates">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <div className="Goodup-price-range">
                                <span className="ft-medium">34 Reviews</span>
                              </div>
                            </div>	
                          </div>
                          <div className="dsd-single-lst-footer">
                            <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                            <a href="javascript:void(0);" className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                            <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
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
          {/* <div class="row">
                    <div class="col-md-12">
                        <div class="py-3">© 2022 Goodup. Designd By ThemezHub.</div>
                    </div>
                </div> */}
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

export default Bsavedlisting
