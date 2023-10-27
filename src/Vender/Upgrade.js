import React from 'react'
import Headerbusiness from './Headerbusiness'
import { Link } from 'react-router-dom'

import Bfooter from './Bfooter'

const Upgrade = () => {
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
          {/* ======================= About Start ============================ */}
          <section className="space">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="m-spaced">
                    <div className="position-relative">
                      {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Why Boricua Directory?</span></div> */}
                      <h2 className="ft-bold mb-3">Upgrade your page, convert more customers</h2>
                      <h6 className="ft-bold mb-3">Make a stronger impression to better connect with and convert great new customers visiting your business page.</h6>
                    </div>
                    <a href className="btn btn-danger">Upgrade Now</a>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                  <div className="position-relative">
                    <img src="assets/img/business.png" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= About Start ============================ */}
          <section className="space min gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    {/* <h6 class="theme-cl mb-0">Our Pricing</h6> */}
                    <h2 className="ft-bold">Boricua Directory makes it easy to connect with new customers and grow your business</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <img src="assets/img/add1.jpg" style={{height: '300px', width: '200px'}} />
                      </div>
                      <div className="Goodup-price-title">
                        {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Business Page</span></div> */}
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle"><h4>Make yourself stand out</h4></div>
                      <div className="Goodup-price-subtitle">No one can sell your business better than you. The Upgrade Package gives you tools so you can decide how to best showcase your business:</div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Highlight your most unique attributes</li>
                        <li><i className="fa fa-angle-right" />Put your best foot forward by customizing which photos are featured and where</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <img src="assets/img/add.jpg" style={{height: '300px', width: '200px'}} />
                      </div>
                      <div className="Goodup-price-title">
                        {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Boricua Directory Ads</span></div> */}
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle"><h4>Keep the focus of new customers</h4></div>
                      <div className="Goodup-price-subtitle">With the Upgrade Package, your page feels more professional, keeping customers engaged longer. In fact, 95% of Yelp users said they’d choose the business with Upgrade Package features over the one without when shown both side-by-side in search </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Promote seasonal and special offers with the Call to Action tool</li>
                        <li><i className="fa fa-angle-right" />Show users your great branding by adding your logo to your page</li>
                        <li><i className="fa fa-angle-right" />Creates posts on your page to keep customers updated on your business</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" />
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"><a href className="btn btn-danger">Upgrade Today</a></div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" />
              </div>
            </div>
          </section>
          {/* ======================= Listing Categories ======================== */}
          <section className="space min gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h2 className="ft-bold">Features built for your business</h2>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                    <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-stethoscope" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Business Highlights</h4>
                        <span className="text-muted">Add eye-catching badges to highlight what makes your business unique</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-building" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Remove Competitor Ads</h4>
                        <span className="text-muted">eep other businesses from having ads appear on your page</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-shopping-basket" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Call to Action</h4>
                        <span className="text-muted">Convert page views into calls, messages and visits with a fully customizable call to action button</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-screwdriver" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Logo</h4>
                        <span className="text-muted">Look more professional and promote your brand by showing your logo on your page</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-basketball-ball" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Boricua Directory Connect</h4>
                        <span className="text-muted">Create posts and share updates about your business that can be promoted by Boricua Directory</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
          </section>
          {/* ======================= Listing Categories End ======================== */}
          {/* ======================= FAQ's Detail ======================== */}
          <section className="middle">
            <div className="container">
              {/* 	
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-4">
								<h1 class="ft-bold mb-0">FAQ's Section</h1>
								<h3 class="ft-medium pt-1 mb-3">Frequently Asked Questions</h3>
							</div>
						</div>
					</div> */}
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                  <div className="d-block position-relative mb-4">
                    <h4 className="ft-medium">Got a question?</h4>
                    <div id="accordion" className="accordion">
                      <div className="card">
                        <div className="card-header" id="h1">
                          <h5 className="mb-0">
                            <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#ord1" aria-expanded="true" aria-controls="ord1">
                              Is a Boricua Directory Business Page free?
                            </button>
                          </h5>
                        </div>
                        <div id="ord1" className="collapse show" aria-labelledby="h1" data-parent="#accordion">
                          <div className="card-body">
                            Yes. There is no charge to create a Boricua Directory Business Page..
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="h2">
                          <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#ord2" aria-expanded="false" aria-controls="ord2">
                              How do I create a business page on Boricua Directory?
                            </button>
                          </h5>
                        </div>
                        <div id="ord2" className="collapse" aria-labelledby="h2" data-parent="#accordion">
                          <div className="card-body">
                            Go to biz.BoricuaDirectory.com/claim and simply enter your business name to get started.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="h3">
                          <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#ord3" aria-expanded="false" aria-controls="ord3">
                              How much does it cost to put your business on Boricua Directory?
                            </button>
                          </h5>
                        </div>
                        <div id="ord3" className="collapse" aria-labelledby="h3" data-parent="#accordion">
                          <div className="card-body">
                            A “claimed” Business Page is one that has been claimed by the owner or representative of the business through our verification process. Claiming is free, and a claimed page does not mean that the business is a paid advertiser with Boricua Directory.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= FAQ's End ======================== */}
          {/* ============================ Footer Start ================================== */}
         <Bfooter/>
          {/* ============================ Footer End ================================== */}
          {/* Log In Modal */}
          <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
            <div className="modal-dialog login-pop-form" role="document">
              <div className="modal-content" id="loginmodal">
                <div className="modal-headers">
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span className="ti-close" />
                  </button>
                </div>
                <div className="modal-body p-5">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Login Your Account</h4>
                  </div>
                  <form className="submit-form">				
                    <div className="form-group">
                      <label className="mb-1">User Name</label>
                      <input type="text" className="form-control rounded bg-light" placeholder="Username*" />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input type="password" className="form-control rounded bg-light" placeholder="Password*" />
                    </div>
                    <div className="form-group">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-1">
                          <input id="dd" className="checkbox-custom" name="dd" type="checkbox" defaultChecked />
                          <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                        </div>	
                        <div className="eltio_k2">
                          <a href="#" className="theme-cl">Lost Your Password?</a>
                        </div>	
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign In</button>
                    </div>
                    <div className="form-group text-center mb-0">
                      <p className="extra">Or login with</p>
                      <div className="option-log">
                        <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/c-1.png" className="img-fluid" alt="" />Login with Google</a></div>
                        <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/facebook.png" className="img-fluid" alt="" />Login with Facebook</a></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Modal */}
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

export default Upgrade
