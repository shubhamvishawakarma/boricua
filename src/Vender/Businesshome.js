import React from 'react'
import Headerbusiness from './Headerbusiness'

import Bfooter from './Bfooter'

const Businesshome = () => {
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
          {/* ======================= Home Banner ======================== */}
          <div className="home-banner margin-bottom-0" style={{background: '#f41b3b url(assets/img/bussine.jpg) no-repeat'}} data-overlay={5}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="banner_caption text-center mb-5">
                    <h1 className="banner_title ft-bold mb-1">It’s free to be on Boricua Directory</h1>
                    <p className="fs-md ft-medium">Update your business information</p>
                    <p className="fs-md ft-medium">Receive and respond to messages</p>
                    <p className="fs-md ft-medium">Respond to reviews</p>
                    <a href className="btn btn-danger">Verify my free listing</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ======================= Home Banner ======================== */}
          {/* ======================= About Start ============================ */}
          <section className="space">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="m-spaced">
                    <div className="position-relative">
                      <div className="mb-2"><span className="bg-light-sky text-sky px-2 py-1 rounded">Why Boricua Directory?</span></div>
                      <h2 className="ft-bold mb-3">Boricua Directory for Business has resources to help you plan, start, grow, and advertise your small business</h2>
                    </div>
                    <div className="position-relative row">
                      <div className="col-lg-4 col-md-4 col-4">
                        <h3 className="ft-bold text-sky mb-0"><span className="count">80</span>+</h3>
                        <p className="ft-medium"> MILLION PEOPLE</p>
                        <p className="ft-medium">visit Boricua Directory each month to find restaurants, home services, and more</p>
                      </div>
                      <div className="col-lg-4 col-md-4 col-4">
                        <h3 className="ft-bold text-warning mb-0"><span className="count">83%</span>k+</h3>
                        <p className="ft-medium">USERS</p>
                        <p className="ft-medium">hire or buy from a business they found on Boricua Directory </p>
                      </div>
                    </div>
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
                        <div className="mb-2"><span className="bg-light-sky text-sky px-2 py-1 rounded">Business Page</span></div>
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle">Help people get to know you </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Update your business info so people can find you</li>
                        <li><i className="fa fa-angle-right" />Add photos to showcase the best of your business</li>
                        <li><i className="fa fa-angle-right" />Respond to reviews and messages as soon as they come in</li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn active" href="#">Lear More</a>
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
                        <div className="mb-2"><span className="bg-light-sky text-sky px-2 py-1 rounded">Boricua Directory Ads</span></div>
                        {/* <div class="Goodup-price-tlt"><h4>Business Page</h4></div><div class="Goodup-price-ribbon"><span class="Goodup-ribbon-offer">50% Off</span></div> */}
                      </div>
                      <div className="Goodup-price-subtitle">Potential customers with Boricua Directory Ads </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right" />Reach 2.5x more potential customers</li>
                        <li><i className="fa fa-angle-right" />Create and run your ad in minutes</li>
                        <li><i className="fa fa-angle-right" />Only pay when interested people click on your ad</li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn active" href="#">Lear More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Blog Start ============================ */}
          <section className="space min pt-0">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-4">
                    <h4 className="theme-cl mb-0">Resources</h4><br />
                    <h2 style={{}} className="ft-bold">Learn how to market your business on Boricua Directory like a pro</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* Single Item */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <a href="/bblogdetails"><img src="assets/img/b-4.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="gup_blg_grid_caption">
                      <div className="blg_title"><h4><a href="/bblogdetails">How to add a business to Boricua</a></h4></div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <a href="/bblogdetails"><img src="assets/img/b-5.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="gup_blg_grid_caption">
                      <div className="blg_title"><h4><a href="/bblogdetails">How to write a great business description for social media and review sites</a></h4></div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <a href="/bblogdetails"><img src="assets/img/b-6.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="gup_blg_grid_caption">
                      <div className="blg_title"><h4><a href="/bblogdetails">5 free things you didn’t know you could do on your Boricua Directory Page</a></h4></div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Blog Start ============================ */}
          {/* ============================ Pricing Start ==================================== */}
          {/* ============================ Pricing End ==================================== */}
          {/* ========================== Download App Section =============================== */}
          <section className="pt-0">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_2 pr-3 py-4">
                    <div className="content-box">
                      <div className="sec-title light">
                        <p className="theme-cl px-3 py-1 rounded bg-light-danger d-inline-flex">Download apps</p>
                        <h2 className="ft-bold">Download the Boricua Directory App For Easy Use</h2>
                      </div>
                      <div className="text mb-3">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                      </div>
                      <div className="position-relative row">
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0"><span className="count">10</span>k+</h3>
                          <p className="ft-medium">Active Jobs</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0"><span className="count">12</span>k+</h3>
                          <p className="ft-medium">Resumes</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0"><span className="count">07</span>k+</h3>
                          <p className="ft-medium">Employers</p>
                        </div>
                      </div>
                      <div className="btn-box clearfix mt-5">
                        <a href="index-2.html" className="download-btn play-store me-1 d-inline-flex"><img src="assets/img/ios.png" width={200} alt="" /></a>
                        <a href="index-2.html" className="download-btn play-store ms-2 mb-1 d-inline-flex"><img src="assets/img/and.png" width={200} alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image"><img src="assets/img/log.png" className="img-fluid" style={{height: '600px'}} alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ========================== Download App Section =============================== */}
          {/* ======================= Newsletter Start ============================ */}
          <section className="space bg-cover" style={{background: '#03343b url(assets/img/landing-bg.png) no-repeat'}}>
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    {/* <h6 class="text-light mb-0">Subscribr Now</h6> */}
                    <h2 className="ft-bold text-light">Business resources,
                      delivered to your inbox</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                  <form className="bg-white rounded p-1">
                    <div className="row no-gutters">
                      <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                        <div className="form-group mb-0 position-relative">
                          <input type="text" className="form-control b-0" placeholder="Enter Your Email Address" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="form-group mb-0 position-relative">
                          <button className="btn full-width btn-height theme-bg text-light fs-md" type="button">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Newsletter Start ============================ */}
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

export default Businesshome
