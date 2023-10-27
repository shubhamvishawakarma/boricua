import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import apiurl from "./config";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const About = () => {
  const [aboutus, setAboutus] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(`${apiurl[0].apiUrl}React/get_about_us`)
      .then((res) => setAboutus(res.data.data));
  };

  const htmlString = [aboutus?.title];
  const htmlStringa = [aboutus?.description];
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
        <Header />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ======================= Top Breadcrubms ======================== */}
        <section
          className="about-bg bg-cover"
          style={{ background: "url(assets/img/about.jpg) no-repeat" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-11 col-sm-12">
                <div className="abt-caption">
                  <div className="abt-caption-head">
                    <h1>
                      Smart team alwasy create better thing and better
                      solutions.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================= Top Breadcrubms ======================== */}
        {/* ======================= How It Work Detail ======================== */}
        <section className="space min">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="mb-0 theme-cl">Working Process</h6>
                  <h2 className="ft-bold">How It Working</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="wrk-pro-box first">
                  <div className="wrk-pro-box-caption">
                    <h4 dangerouslySetInnerHTML={{ __html: aboutus?.title }} />
                    <p
                      dangerouslySetInnerHTML={{ __html: aboutus?.description }}
                      p
                    />
                    {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                  <div dangerouslySetInnerHTML={{ __html: htmlStringa }} /> */}

                    {/* <h4 dangerouslySetInnerHTML={{ __html: htmlString }} h4/>
                  <p dangerouslySetInnerHTML={{ __html: htmlStringa }}/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================= How It Work End ======================== */}
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

export default About;
