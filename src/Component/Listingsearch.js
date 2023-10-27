import React from "react";
import { Link } from "react-router-dom";
import Header2 from "./Header2";
import Header from "./Header";
import Footer from "./Footer";
import secureLocalStorage from "react-secure-storage";

import axios from "axios";
import { useState, useEffect } from "react";

import apiurl from "./config";
const Listingsearch = () => {
  const [subcategory, setsubcategory] = useState();

  useEffect(() => {
    subcategoryget();
  }, []);

  const subcategoryget = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let categoryidd = secureLocalStorage.getItem("catergoryid");
    let suncategoryiddd = secureLocalStorage.getItem("suncategoryidd");

    const data = JSON.stringify({
      category_id: categoryidd,
      sub_category_id: suncategoryiddd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/subcate_filter_react`, data, options)
      .then((res) => {
        setsubcategory(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };

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
        {/* <Header/> */}
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* ============================ Search Tag & Filter Start ================================== */}
        <Header2 />
        <div className="clearfix" />
        {/* ============================ Search Tag & Filter End ================================== */}
        {/* ============================ Main Section Start ================================== */}
        <section className="gray py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                {/* Sidebar End */}
              </div>
              {/* Item Wrap Start */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                {/* row */}
                <div className="row justify-content-left gx-3">
                  {subcategory?.map((list) => {
                    return (
                      <div
                        onClick={() => {
                          secureLocalStorage.setItem(
                            "listingserachid",
                            list.id
                          );
                        }}
                        className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                      >
                        <div className="Goodup-grid-wrap">
                          <div className="Goodup-grid-upper">
                            {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                            {/* <div className="Goodup-pos ab-left">
          <div className="Goodup-status open me-2">Open</div>
          <div className="Goodup-featured-tag">Featured</div>
        </div> */}
                            <div className="Goodup-grid-thumb">
                              <a
                                href="/singlelisting"
                                className="d-block text-center m-auto"
                              >
                                <img
                                  src={
                                    `${apiurl[0].apiUrl}assets/bori_images/listing/` +
                                    list?.business_logo
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="Goodup-grid-fl-wrap">
                            <div className="Goodup-caption px-3 py-2">
                              {/* <div className="Goodup-author"><a href="/author"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></a></div> */}
                              <div className="Goodup-cates">
                                <a href="/singlelisting">
                                  {list?.business_name}
                                </a>
                              </div>
                              <h4 className="mb-0 ft-medium medium">
                                <a
                                  href="/singlelisting"
                                  className="text-dark fs-md"
                                >
                                  {list?.category_name}
                                </a>
                              </h4>
                              <div className="Goodup-middle-caption mt-3">
                                <div className="Goodup-location">
                                  <i className="fas fa-map-marker-alt" />
                                  {list?.vendor_address}
                                </div>
                                {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 795 4526</div> */}
                              </div>
                            </div>
                            <div className="Goodup-grid-footer py-3 px-3">
                              <div className="Goodup-ft-first">
                                <div className="Goodup-rating">
                                  <div className="Goodup-pr-average high">
                                    {list?.rating}
                                  </div>
                                  <div className="Goodup-rates">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </div>
                                </div>
                                {/* <div className="Goodup-price-range">
              <span className="active"><i className="fas fa-dollar-sign" /></span>
              <span className="active"><i className="fas fa-dollar-sign" /></span>
              <span className="active"><i className="fas fa-dollar-sign" /></span>
              <span className="active"><i className="fas fa-dollar-sign" /></span>
            </div> */}
                              </div>
                              {/* <div className="Goodup-ft-last">
            <span className="small">2 min ago</span>
          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* /row */}
                {/* <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="fas fa-arrow-circle-right" />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item active"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">18</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="fas fa-arrow-circle-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Main Section End ================================== */}
        {/* ======================= Newsletter Start ============================ */}
        {/* <section className="space bg-cover" style={{background: '#03343b url(assets/img/landing-bg.png) no-repeat'}}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-light mb-0">Subscribr Now</h6>
                <h2 className="ft-bold text-light">Get All Updates &amp; Advance Offers</h2>
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
      </section> */}
        {/* ======================= Newsletter Start ============================ */}
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
                    <label className="mb-1">User Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Username*"
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
                      Sign In
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

export default Listingsearch;
