import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Checkout = () => {
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
      <div className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className="text-light">Home</a></li>
                  <li className="breadcrumb-item"><a href="#" className="text-light">Page</a></li>
                  <li className="breadcrumb-item active theme-cl" aria-current="page">Booking Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= Top Breadcrubms ======================== */}
      {/* ======================= Booking page Design ======================== */}
      <section className="gray space min">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="d-block"><h4 className="ft-medium">Personal Detail</h4></div>
              <div className="single-form-item bg-white rounded px-3 py-3 mb-4">
                <div className="row submit-form">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="mb-1">First Name</label>
                      <input type="text" className="form-control rounded" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="mb-1">Last name</label>
                      <input type="text" className="form-control rounded" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <input type="text" className="form-control rounded" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label className="mb-1">Mobile</label>
                      <input type="text" className="form-control rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block"><h4 className="ft-medium">Payment Methode</h4></div>
              <div className="single-form-item">
                <div className="accordion accordion-flush" id="acdflush">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="paypalhead">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#colpaypal" aria-expanded="true" aria-controls="colpaypal">
                        Pay via PayPal<img src="assets/img/paypal.png" className="img-fluid" alt="" />
                      </button>
                    </h2>
                    <div id="colpaypal" className="accordion-collapse collapse show" aria-labelledby="paypalhead" data-bs-parent="#acdflush">
                      <div className="accordion-body">
                        <p>You will be redirected to PayPal to complete payment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="creditheading">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#colcredit" aria-expanded="false" aria-controls="colcredit">
                        Pay Via Credit Card<img src="assets/img/debit.png" className="img-fluid" alt="" />
                      </button>
                    </h2>
                    <div id="colcredit" className="accordion-collapse collapse" aria-labelledby="creditheading" data-bs-parent="#acdflush">
                      <div className="accordion-body">
                        <div className="row submit-form">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Card Holder Name</label>
                              <input type="text" className="form-control rounded" placeholder="Dhananjay Preet" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Card Number</label>
                              <input type="text" className="form-control rounded" placeholder="5468 2153 1007 7077" />
                            </div>
                          </div>									
                          <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="form-group">
                              <label className="mb-1">Expire Month</label>
                              <input type="text" className="form-control rounded" placeholder="MM" />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="form-group">
                              <label className="mb-1">Expire Year</label>
                              <input type="text" className="form-control rounded" placeholder="YY" />
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">CVC</label>
                              <input type="text" className="form-control rounded" placeholder="***" />
                            </div>
                          </div>										
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-form-item mb-4">
                <div className="d-block"><button type="button" className="btn theme-bg text-light ft-medium rounded">Confirm &amp; Pay</button></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="biiling-wrap mb-4">
                <div className="billing-item">
                  <div className="Goodup-grid-wrap mb-0">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/o.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">5.0</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>10 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="billing-item-head">
                  <h5 className="ft-medium mb-1">Muraliwala Family Restaurant</h5>
                  <div className="Goodup-location"><i className="fas fa-map-marker-alt text-muted me-2" />Indore, India</div>
                </div>
                <div className="billing-item-middle">
                  <div className="billing-its-title"><h4>Booking Details</h4></div>
                  <div className="billing-item-lists">
                    <ul>
                      <li><span className="prt-title">Sub Total</span><span className="prt-value">$ 125</span></li>
                      <li><span className="prt-title">Tax</span><span className="prt-value">$ 25</span></li>
                    </ul>
                  </div>
                </div>
                <div className="billing-item-foot">
                  <div className="blg-fgty">
                    <h5 className="ft-medium">Cost:</h5>
                    <h6 className="theme-cl ft-bold">$150 USD</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Booking page Design End ======================== */}
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

export default Checkout
