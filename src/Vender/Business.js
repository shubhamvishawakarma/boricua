import React from 'react'
import { Link } from 'react-router-dom'
import Headerbusiness from './Headerbusiness'

import Bfooter from './Bfooter'

const Business = () => {
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
                      <h2 className="ft-bold mb-3">Be found by new customers—for free.</h2>
                      <h6 className="mb-3">When people can find your up-to-date page on Yelp, they’re more likely to buy from you.</h6>
                      <h6 className="mb-3">In fact, 83% of Yelp users say they hire or buy from a business they found on Yelp</h6>
                    </div>
                    <a href className="btn btn-danger">Verify my free listing</a>
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
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <img src="assets/img/add1.jpg" style={{height: '300px', width: '200px'}} />
                      </div>
                      <div className="Goodup-price-title">
                        {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Business Page</span></div> */}
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle"><h4>First, catch the eye of new customers </h4></div>
                      <div className="Goodup-price-subtitle">80+ million people visit Boricua Directory each month.Make it easier for local customers to find you by keeping your business page current.</div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Adding your business services</li>
                        <li><i className="fa fa-angle-right" />Sharing unique attributes of your business</li>
                        <li><i className="fa fa-angle-right" />Posting photos with informative captions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <img src="assets/img/add.jpg" style={{height: '300px', width: '200px'}} />
                      </div>
                      <div className="Goodup-price-title">
                        {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Boricua Directory Ads</span></div> */}
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle"><h4>Then, give them the info they need </h4></div>
                      <div className="Goodup-price-subtitle">Just having your business name on your Yelp Page isn’t enough. Help customers get to know your business by sharing important information, like: </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Up-to-date business hours, including holiday hour changes</li>
                        <li><i className="fa fa-angle-right" />The story and history of your business, so customers can get to know you better</li>
                        <li><i className="fa fa-angle-right" />Link to additional information, your website, and more, so customers can explore as much as they’d like</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <img src="assets/img/add.jpg" style={{height: '300px', width: '200px'}} />
                      </div>
                      <div className="Goodup-price-title">
                        {/* <div class="mb-2"><span class="bg-light-sky text-sky px-2 py-1 rounded">Boricua Directory Ads</span></div> */}
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle"><h4>Finally, connect </h4></div>
                      <div className="Goodup-price-subtitle">A business page both shows off your expertise and gives you ways to directly interact with customers.</div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Let them contact you by adding your phone number and address</li>
                        <li><i className="fa fa-angle-right" />Receive messages or requests for calls, quotes, and more</li>
                        <li><i className="fa fa-angle-right" />Respond to reviews and show customers you value their opinion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Listing Categories ======================== */}
          <section className="space min gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h2 className="ft-bold">A Boricua Directory Page includes:</h2>
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
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Exposure in search results</h4>
                        <span className="text-muted">Select the categories, services, and service area that are most relevant to your business so the right people can find you while searching</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-building" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Contact information</h4>
                        <span className="text-muted">Add your phone number and address to easily connect with customers</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-shopping-basket" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Two-way customer messaging</h4>
                        <span className="text-muted">Get direct messages or requests for phone calls, quotes, consultations, or other information from potential customers</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-screwdriver" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Hours of operation</h4>
                        <span className="text-muted">Add your regular business hours, and easily make updates for holidays, vacations, or other special dates</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-basketball-ball" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Unlimited photos and videos</h4>
                        <span className="text-muted">Post photos and videos that showcase your expertise like a thousand words ca</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href to='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-utensils" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Unique business details</h4>
                        <span className="text-muted">Showcase your specialties, amenities, business story, and even a little bit about yourself</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-book-open" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Ratings and reviews</h4>
                        <span className="text-muted">Build a reputation on Yelp by receiving and responding to ratings and reviews from past, present, and future customers</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="cats-wrap text-center">
                  <a href='/listingsearch' className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon"><i className="fas fa-house-damage" /></div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">Links to more information</h4>
                        <span className="text-muted">Give people even more detail about your business by linking to your website or menu (or both!)</span>
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
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-4">
                    <h1 className="ft-bold mb-0">FAQ's Section</h1>
                    <h3 className="ft-medium pt-1 mb-3">Frequently Asked Questions</h3>
                  </div>
                </div>
              </div>
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

export default Business
