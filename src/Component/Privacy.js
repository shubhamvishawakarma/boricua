import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import apiurl from "./config";
import { useState, useEffect } from "react";
import axios from "axios";
const Privacy = () => {
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`${apiurl[0].apiUrl}React/get_privacy_policy`)
      .then((res) => setPolicyData(res.data.data));
  };
  return (
    <div>
      <div className="preloader" />

      <div id="main-wrapper">
        <Header />
        <div className="clearfix" />

        <div className="gray py-3">
          <div className="container">
            <div className="row">
              <div className="colxl-12 col-lg-12 col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="#">Home /</a>
                    </li>
                    {/* <li><a href="#">Pages /</a></li> */}
                    <li>Privacy</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= Top Breadcrubms ======================== */}
        {/* ======================= About Us Detail ======================== */}
        <section className="middle">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-11 col-lg-12 col-md-6 col-sm-12">
                {/* {policyData.map((faq)=>{
                    return( */}
                <div className="abt_caption">
                  <h2
                    className="ft-medium mb-4"
                    dangerouslySetInnerHTML={{ __html: policyData?.title }}
                  />

                  <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{
                      __html: policyData?.description,
                    }}
                  />
                </div>
                {/* )
                  })} */}
              </div>
            </div>
          </div>
        </section>
        {/* ======================= About Us End ======================== */}
        {/* ============================ Footer Start ================================== */}
        <Footer />
        {/* ============================ Footer End ================================== */}
        {/* Log In Modal */}
        <div
          className="modal fade"
          id="login"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
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
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/c-1.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        {/* Sign up Modal */}
        <div
          className="modal fade"
          id="signup"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signupmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="signupmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
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
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Firstname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Last Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Lastname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="email"
                      className="form-control rounded bg-light"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/c-1.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
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
  );
};

export default Privacy;
