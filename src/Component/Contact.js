import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
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
     <Header/>
      {/* End Navigation */}
      <div className="clearfix" />
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* ======================= Top Breadcrubms ======================== */}
      {/* <div className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className="text-light">Home</a></li>
                  <li className="breadcrumb-item"><a href="#" className="text-light">Pages</a></li>
                  <li className="breadcrumb-item active theme-cl" aria-current="page">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      {/* ======================= Top Breadcrubms ======================== */}
      {/* ======================= Contact Page Detail ======================== */}
      <section className="gray">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center">
                <h2 className="off_title">Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <form className="row submit-form py-4 px-3 rounded bg-white mb-4">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">Your Name *</label>
                    <input type="text" className="form-control" defaultValue="Your Name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">Your Email *</label>
                    <input type="text" className="form-control" defaultValue="Your Email" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">Mobile</label>
                    <input type="text" className="form-control" defaultValue="+91 256 548 7542" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">Subject</label>
                    <input type="text" className="form-control" defaultValue="Type Your Subject" />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">Message</label>
                    <textarea className="form-control ht-80" defaultValue={"Your Message..."} />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <button type="button" className="btn theme-bg text-light">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="bg-white rounded p-3 mb-2">
                    <h4 className="ft-medium mb-3 theme-cl">Address info:</h4>
                    <p>1354 Green Street Nashville Drive Dodge City,<br /> KS 67801 United States</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="bg-white rounded p-3 mb-2">
                    <h4 className="ft-medium mb-3 theme-cl">Call Us:</h4>
                    <h6 className="ft-medium mb-1">Customer Care:</h6>
                    <p className="mb-2">+91 458 753 6924</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="bg-white rounded p-3 mb-2">
                    <h4 className="ft-medium mb-3 theme-cl">Drop A Mail:</h4>
                    <p>Drop mail we will contact you within 24 hours.</p>
                    <p className="lh-1 text-dark">dhananjaypreet@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Contact Page End ======================== */}
      {/* ======================= Newsletter Start ============================ */}
      {/* <section class="space bg-cover" style="background:#03343b url(assets/img/landing-bg.png) no-repeat;">
            <div class="container py-5">
                
                <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="sec_title position-relative text-center mb-5">
                            <h6 class="text-light mb-0">Subscribr Now</h6>
                            <h2 class="ft-bold text-light">Get All Updates & Advance Offers</h2>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                        <form class="bg-white rounded p-1">
                            <div class="row no-gutters">
                                <div class="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                    <div class="form-group mb-0 position-relative">
                                        <input type="text" class="form-control b-0" placeholder="Enter Your Email Address">
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                                    <div class="form-group mb-0 position-relative">
                                        <button class="btn full-width btn-height theme-bg text-light fs-md" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section> */}
      {/* ======================= Newsletter Start ============================ */}
      {/* ============================ Footer Start ================================== */}
    <Footer/>
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
                  <label className="mb-1">Phone</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Phone*" />
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
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Log In</button>
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
      {/* Sign up Modal */}
      <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="signupmodal" aria-hidden="true">
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="signupmodal">
            <div className="modal-headers">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="ti-close" />
              </button>
            </div>
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h4 className="m-0 ft-medium">Sign Up</h4>
              </div>
              <form className="submit-form">				
                <div className="form-group">
                  <label className="mb-1">First Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Firstname*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Last Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Lastname*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Phone</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Phone*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Email</label>
                  <input type="email" className="form-control rounded bg-light" placeholder="Email*" />
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
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign Up</button>
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

export default Contact
