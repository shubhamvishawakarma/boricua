import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Logintobusiness = () => {
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
          {/* ======================= Login Detail ======================== */}
          <section className="gray">
            <div className="container">
              <div className="row align-items-start justify-content-center">
                <div className="col-xl-5 col-lg-8 col-md-12">
                  <div className="signup-screen-wrap">
                    <div className="signup-screen-single">
                      <div className="text-center mb-4">
                        <h4 className="m-0 ft-medium">Login Your Account</h4>
                      </div>
                      <form className="submit-form">				
                        <div className="form-group">
                          <label className="mb-1">Phone</label>
                          <input type="text" className="form-control rounded" placeholder="Enter Phone*" />
                        </div>
                        <div className="form-group">
                          <label className="mb-1">Password</label>
                          <input type="password" className="form-control rounded" placeholder="Password*" />
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
                        <div className="form-group text-center mt-4 mb-0">
                          <p className="mb-0">You Don't have any account? <a href="/signuptobussiness" className="ft-medium text-success">Sign Up</a></p>
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

export default Logintobusiness
