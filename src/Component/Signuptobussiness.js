import React from 'react'
import Footer from './Footer'

const Signuptobussiness = () => {
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
      <div className="header header-light dark-text">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand" href="home-2.html">
                <img src="assets/img/logoss.png" className="logo" alt="" />
              </a>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="theme-cl fs-lg">
                      <i className="lni lni-user" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="ft-bold">
                      <i className="fas fa-sign-in-alt me-1 theme-cl" />Log In
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#signup" className="crs_yuo12 w-auto text-black ">
                      <span className="embos_45"><i className="fas fa-user-plus me-1 theme-cl" />Sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
              <ul className="nav-menu">
                <li><a href="javascript:void(0);">Restaurants</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="half-map-search-1.html">Delivery</a></li>
                    <li><a href="half-map-search-1.html">Burgers</a></li>
                    <li><a href="half-map-search-1.html">Chinese</a></li>
                    <li><a href="half-map-search-1.html">Italian</a></li>
                    <li><a href="half-map-search-1.html">Reservations</a></li>
                    <li><a href="half-map-search-1.html">Japanese</a></li>
                    <li><a href="half-map-search-1.html">Mexican</a></li>
                    <li><a href="half-map-search-1.html">Thai</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);">Home Services</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="half-map-search-1.html">Contractors</a>
                      {/* <ul class="nav-dropdown nav-submenu">
                                            <li><a href="listing-search-v1.html">With Sidebar V1</a></li>
                                            <li><a href="listing-search-v2.html">With Sidebar V2</a></li>
                                            <li><a href="listing-search-v3.html">With Sidebar V3</a></li>
                                            <li><a href="listing-search-with-map.html">Full Width + Map</a></li>
                                        </ul> */}
                    </li>
                    <li><a href="half-map-search-1.html">Electricians</a>
                      {/* <ul class="nav-dropdown nav-submenu">
                                            <li><a href="half-map-search-1.html">With Sidebar</a></li>
                                            <li><a href="listing-search-v5.html">Full Width</a></li>
                                            <li><a href="listing-search-with-map.html">Full Width With Map</a></li>
                                        </ul> */}
                    </li>
                    <li><a href="half-map-search-1.html">Home Cleaners</a>
                      {/* <ul class="nav-dropdown nav-submenu">
                                            <li><a href="half-map-search-1.html">Search On Map V1</a></li>
                                            <li><a href="half-map-search-2.html">Search On Map V2</a></li>
                                            <li><a href="half-map-search-3.html">Search On Map V3</a></li>
                                        </ul> */}
                    </li>
                    <li><a href="half-map-search-1.html">HVAC</a>
                      {/* <ul class="nav-dropdown nav-submenu">
                                            <li><a href="single-listing-detail-2.html">Single Listing V1</a></li>
                                            <li><a href="single-listing-detail-2.html">Single Listing V2</a></li>
                                            <li><a href="single-listing-detail-3.html">Single Listing V3</a></li>
                                            <li><a href="single-listing-detail-4.html">Single Listing V4</a></li>
                                            <li><a href="single-listing-detail-5.html">Single Listing V5</a></li>
                                            <li><a href="single-listing-detail-6.html">Single Listing V6</a></li>
                                            <li><a href="single-listing-detail-7.html">Single Listing V7</a></li>
                                            <li><a href="single-listing-detail-8.html">Single Listing V8</a></li>
                                        </ul> */}
                    </li>
                    <li><a href="half-map-search-1.html">Landscaping</a>
                    </li><li><a href="half-map-search-1.html">Locksmiths</a>
                    </li><li><a href="half-map-search-1.html">Movers</a>
                    </li><li><a href="half-map-search-1.html">Plumbers</a>
                    </li></ul>
                </li>
                <li><a href="javascript:void(0);">Auto Services</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="half-map-search-1.html"><i className="lni lni-dashboard me-2" />Auto Repair</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-files me-2" />Auto Detailing</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-add-files me-2" />Body Shops</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-bookmark me-2" />Car Wash</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-briefcase me-2" />Car Dealers</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-mastercard me-2" />Oil Change</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-envelope me-2" />Parking</a></li>
                    <li><a href="half-map-search-1.html"><i className="lni lni-user me-2" />towing </a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);">More</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="half-map-search-1.html">Dry Cleaning</a></li>
                    <li><a href="half-map-search-1.html">Phone Repair</a></li>
                    <li><a href="half-map-search-1.html">Bars</a></li>
                    <li><a href="half-map-search-1.html">Nightlife</a></li>
                    <li><a href="half-map-search-1.html">Hair Salons</a></li>
                    <li><a href="half-map-search-1.html">Gyms</a></li>
                    <li><a href="half-map-search-1.html">Massage</a></li>
                    <li><a href="half-map-search-1.html">Shopping</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav-menu">
                <li><a href="javascript:void(0);">Business</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="contact.html">Add a Business</a></li>
                    <li><a href="contact.html">Claim your business</a></li>
                    <li><a href="contact.html">Log in to Business Account</a></li>
                    <li><a href="contact.html">Explore for Business</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="ft-bold">
                    <i className="fas fa-sign-in-alt me-1 theme-cl" />Log In
                  </a>
                </li>
                <li>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#signup" className="crs_yuo12 w-auto text-black ">
                    <span className="embos_45"><i className="fas fa-user-plus me-1 theme-cl" />Sign Up</span>
                  </a>
                </li>
                {/* <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#signup" class="ft-bold">
                                    <i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up
                                </a>
                            </li> */}
                {/* <li class="add-listing">
                                <a href="add-listing.html" >
                                    <i class="fas fa-plus me-2"></i>Add Listing
                                </a>
                            </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navigation */}
      <div className="clearfix" />
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* ======================= Login Detail ======================== */}
      <section className="gray">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="signup-screen-wrap">
                <div className="signup-screen-single light">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Create An Business Account</h4>
                  </div>
                  <form className="submit-form">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Business Name</label>
                          <input type="text" className="form-control rounded" placeholder="Business Name" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Phone</label>
                          <input type="number" className="form-control rounded" placeholder="Enter Phone Number" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Email ID</label>
                          <input type="text" className="form-control rounded" placeholder="Enter Email" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Category</label>
                          <select className="form-control">
                            <option>Category</option>
                            <option>Food</option>
                            <option>Services</option>
                            <option>Artistic </option>
                            <option>roof</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">Address</label>
                          <input type="text" className="form-control rounded" placeholder="Enter Address" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Website</label>
                      <input type="text" className="form-control rounded" placeholder="Website" />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">About business</label>
                      <input type="text" className="form-control rounded" placeholder="About Business" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-md full-width bg-sky text-light rounded ft-medium">Sign Up</button>
                    </div>
                    <div className="form-group text-center mb-0">
                      <p className="extra">Or Signup with</p>
                      <div className="option-log">
                        <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/c-1.png" className="img-fluid" alt="" />Login with Google</a></div>
                        <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/facebook.png" className="img-fluid" alt="" />Login with Facebook</a></div>
                      </div>
                    </div>
                    <div className="form-group text-center mt-4 mb-0">
                      <p className="mb-0">Have You Already An account? <a href="/logintobusiness" className="ft-medium text-success">Sign In</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Login End ======================== */}
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

export default Signuptobussiness
