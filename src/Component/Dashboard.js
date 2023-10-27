import React from "react";
import Header from "./Header";
import secureLocalStorage from "react-secure-storage";
import { useState } from "react";
import axios from "axios";
import apiurl from "./config";
import { useEffect } from "react";
import Navbardashboard from "./Navbardashboard";

const Dashboard = () => {
  const [profile, setprofile] = useState();
  console.log("profile",profile)
  let logout = () => {
    secureLocalStorage.removeItem("_id");
    secureLocalStorage.removeItem("token");
  };

  useEffect(() => {
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");
    

    const data = {
      user_id: idddd,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/get_user_profile_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setprofile(response.data.data);
        
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      {/* ============================================================== */}
      {/* Preloader - style you can find in spinners.css */}
      {/* ============================================================== */}
      {/* <div className="preloader" /> */}
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
        {/* ============================================================== */}
        {/* =============================== Dashboard Header ========================== */}
        <section
          className="bg-cover position-relative"
          style={{ background: "red url(assets/img/cover.jpg) no-repeat" }}
          data-overlay={3}
        >
          <div className="abs-list-sec">
            <a href="/addlisting" className="add-list-btn">
              <i className="fas fa-plus me-2" />
              Add Listing
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="dashboard-head-author-clicl">
                  <div className="dashboard-head-author-thumb">
                    {profile?.user_image ? (<img
                       src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/users/${profile?.user_image}`}
                      className="img-fluid"
                      alt=""
                    />) : (<img
                      src="assets/img/t-7.png"
                      className="img-fluid"
                      alt=""
                    />)}
                  </div>
                  <div className="dashboard-head-author-caption">
                    <div className="dashploio">
                      <h4>{profile?.first_name} {profile?.last_name}</h4>
                    </div>
                    <div className="dashploio">
                      <span className="agd-location">
                        <i className="lni lni-map-marker me-1" />
                        San Francisco, USA
                      </span>
                    </div>
                    <div className="listing-rating high">
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =============================== Dashboard Header ========================== */}
        {/* ======================= dashboard Detail ======================== */}
        <div className="goodup-dashboard-wrap gray px-4 py-5">
          <a
            className="mobNavigation"
            data-bs-toggle="collapse"
            href="#MobNav"
            role="button"
            aria-expanded="false"
            aria-controls="MobNav"
          >
            <i className="fas fa-bars me-2" />
            Dashboard Navigation
          </a>
          <Navbardashboard/>
          <div className="goodup-dashboard-content">
            <div className="dashboard-tlbar d-block mb-5">
              <div className="row">
                <div className="colxl-12 col-lg-12 col-md-12">
                  <h1 className="ft-medium">Hello, {profile?.first_name} {profile?.last_name}</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item text-muted">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#" className="theme-cl">
                          Dashboard
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="dashboard-widg-bar d-block">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 mb-3">
                  <div
                    className="alert bg-inverse text-light d-flex align-items-center"
                    role="alert"
                  >
                    <p className="p-0 m-0 ft-medium full-width">
                      Your listing{" "}
                      <a href="#" className="text-success">
                        Wedding Willa Resort
                      </a>{" "}
                      has been approved!
                    </p>
                    <button
                      type="button"
                      className="btn-close text-light"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="dsd-boxed-widget py-5 px-4 bg-danger rounded">
                    <h2 className="ft-medium mb-1 fs-xl text-light count">
                      46
                    </h2>
                    <p className="p-0 m-0 text-light fs-md">Active Listings</p>
                    <i className="lni lni-empty-file" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="dsd-boxed-widget py-5 px-4 bg-success rounded">
                    <h2 className="ft-medium mb-1 fs-xl text-light count">
                      2615
                    </h2>
                    <p className="p-0 m-0 text-light fs-md">Views Listing</p>
                    <i className="lni lni-eye" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="dsd-boxed-widget py-5 px-4 bg-warning rounded">
                    <h2 className="ft-medium mb-1 fs-xl text-light count">
                      312
                    </h2>
                    <p className="p-0 m-0 text-light fs-md">Total Reviews</p>
                    <i className="lni lni-comments" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="dsd-boxed-widget py-5 px-4 bg-purple rounded">
                    <h2 className="ft-medium mb-1 fs-xl text-light count">
                      410
                    </h2>
                    <p className="p-0 m-0 text-light fs-md">Total Bookings</p>
                    <i className="lni lni-wallet" />
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-md-8 col-sm-12">
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <h4 className="mb-0">View Chart</h4>
                    </div>
                    <div className="dash-card-body">
                      <div
                        className="chart"
                        id="revenue-chart"
                        style={{ height: "365px" }}
                      />
                    </div>
                  </div>
                </div>
                {/* Donut Chart */}
                <div className="col-md-4 col-sm-12">
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <h4>Followers</h4>
                    </div>
                    <div className="ground-list ground-hover-list">
                      <div className="ground ground-list-single">
                        <a href="#">
                          <img
                            className="ground-avatar"
                            src="assets/img/t-1.png"
                            alt="..."
                          />
                          <span className="profile-status bg-online pull-right" />
                        </a>
                        <div className="ground-content">
                          <h6>
                            <a href="#">Maryam Amiri</a>
                          </h6>
                          <small className="text-fade">
                            <i className="fas fa-map-marker-alt me-1" />
                            New York, USA
                          </small>
                        </div>
                      </div>
                      <div className="ground ground-list-single">
                        <a href="#">
                          <img
                            className="ground-avatar"
                            src="assets/img/t-2.png"
                            alt="..."
                          />
                          <span className="profile-status bg-offline pull-right" />
                        </a>
                        <div className="ground-content">
                          <h6>
                            <a href="#">Maryam Amiri</a>
                          </h6>
                          <small className="text-fade">
                            <i className="fas fa-map-marker-alt me-1" />
                            Canada, USA
                          </small>
                        </div>
                      </div>
                      <div className="ground ground-list-single">
                        <a href="#">
                          <img
                            className="ground-avatar"
                            src="assets/img/t-3.png"
                            alt="..."
                          />
                          <span className="profile-status bg-working pull-right" />
                        </a>
                        <div className="ground-content">
                          <h6>
                            <a href="#">Maryam Amiri</a>
                          </h6>
                          <small className="text-fade">
                            <i className="fas fa-map-marker-alt me-1" />
                            Denver, USA
                          </small>
                        </div>
                      </div>
                      <div className="ground ground-list-single">
                        <a href="#">
                          <img
                            className="ground-avatar"
                            src="assets/img/t-4.png"
                            alt="..."
                          />
                          <span className="profile-status bg-busy pull-right" />
                        </a>
                        <div className="ground-content">
                          <h6>
                            <a href="#">Maryam Amiri</a>
                          </h6>
                          <small className="text-fade">
                            <i className="fas fa-map-marker-alt me-1" />
                            Liverpool, UK
                          </small>
                        </div>
                      </div>
                      <div className="ground ground-list-single">
                        <a href="#">
                          <img
                            className="ground-avatar"
                            src="assets/img/t-5.png"
                            alt="..."
                          />
                          <span className="profile-status bg-online pull-right" />
                        </a>
                        <div className="ground-content">
                          <h6>
                            <a href="#">Maryam Amiri</a>
                          </h6>
                          <small className="text-fade">
                            <i className="fas fa-map-marker-alt me-1" />
                            California
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="goodup-dashboard-grouping-list with-icons">
                    <h4>Recent Activities</h4>
                    <ul>
                      <li>
                        <i className="dsd-icon-uiyo ti-layers text-purple bg-light-purple" />{" "}
                        Your listing{" "}
                        <strong>
                          <a href="#">Hotel The Lalit</a>
                        </strong>{" "}
                        has been approved!
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-star text-success bg-light-success" />{" "}
                        Christopher K. Allen left a review{" "}
                        <div
                          className="grping-list-rates high"
                          data-rating={5.0}
                        />{" "}
                        on{" "}
                        <strong>
                          <a href="#">Bluchee Burger</a>
                        </strong>
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-heart text-warning bg-light-warning" />{" "}
                        Someone bookmarked your{" "}
                        <strong>
                          <a href="#">Snow Valley House</a>
                        </strong>{" "}
                        listing!
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-star text-info bg-light-info" />{" "}
                        Jesus A. Rhodes left a review{" "}
                        <div
                          className="grping-list-rates mid"
                          data-rating="3.8"
                        />{" "}
                        on{" "}
                        <strong>
                          <a href="#">Sonal Cafe</a>
                        </strong>
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-heart text-danger bg-light-danger" />{" "}
                        Someone bookmarked your{" "}
                        <strong>
                          <a href="#">Blue Bear Bar</a>
                        </strong>{" "}
                        listing!
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-star text-success bg-light-success" />{" "}
                        Michael H. Bright left a review{" "}
                        <div
                          className="grping-list-rates high"
                          data-rating="4.7"
                        />{" "}
                        on{" "}
                        <strong>
                          <a href="#">Lucky Dhaba</a>
                        </strong>
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-star text-purple bg-light-purple" />{" "}
                        Arnold A. Lynn left a review{" "}
                        <div
                          className="grping-list-rates low"
                          data-rating="2.8"
                        />{" "}
                        on{" "}
                        <strong>
                          <a href="#">Madhu Sweet House</a>
                        </strong>
                        <a href="#" className="close-list-item">
                          <i className="fa fa-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="goodup-dashboard-grouping-list invoices with-icons">
                    <h4>Invoices</h4>
                    <ul>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-warning bg-light-warning" />
                        <strong>Starter Plan</strong>
                        <ul>
                          <li className="unpaid">Unpaid</li>
                          <li>Order: #LS5410</li>
                          <li>Date: 16 Sep 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-success bg-light-success" />
                        <strong>Basic Plan</strong>
                        <ul>
                          <li className="paid">Paid</li>
                          <li>Order: #LS5487</li>
                          <li>Date: 19 Aug 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-danger bg-light-danger" />
                        <strong>Extended Plan</strong>
                        <ul>
                          <li className="pending">Pending</li>
                          <li>Order: #LS6413</li>
                          <li>Date: 07 Jul 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-success bg-light-success" />
                        <strong>Platinum Plan</strong>
                        <ul>
                          <li className="cancel">Cancel</li>
                          <li>Order: #LS6100</li>
                          <li>Date: 15 Jun 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-warning bg-light-warning" />
                        <strong>Extended Plan</strong>
                        <ul>
                          <li className="paid">Paid</li>
                          <li>Order: #LS6257</li>
                          <li>Date: 14 05 May 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="dsd-icon-uiyo ti-files text-info bg-light-info" />
                        <strong>Platinum Plan</strong>
                        <ul>
                          <li className="unpaid">Unpaid</li>
                          <li>Order: #LS6548</li>
                          <li>Date: 10 May 2022</li>
                        </ul>
                        <div className="buttons-to-right">
                          <a href="javascript:void(0);" className="button gray">
                            View Invoice
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="row">
              <div className="col-md-12">
                <div className="py-3">© 2023 Boricua.</div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= dashboard Detail End ======================== */}
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
      {/* Morris.js charts */}
      {/* Custom Chart JavaScript */}
      {/* ============================================================== */}
      {/* This page plugins */}
      {/* ============================================================== */}
    </div>
  );
};

export default Dashboard;
