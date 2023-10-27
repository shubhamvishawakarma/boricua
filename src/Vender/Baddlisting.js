import React, { useEffect, useState } from "react";

import Headerbusiness from "./Headerbusiness";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import "./loader.css";
import Dashboardimage from "../Component/Dashboardimage";
import apiurl from "../Component/config";

const Baddlisting = () => {
  let id = secureLocalStorage.getItem("_id");
  let token = secureLocalStorage.getItem("token");
  let [loaderstatus, setloaderstatus] = useState(true);
  let [simbolstatus, setsimbolstatusstatus] = useState(true);
  let [errorstatus, seterrorstatus] = useState(true);

  let [all_img, setall_img] = useState({
    vendor_id: id,
    owner_image: "",
    business_logo: "",
    listing_images: "",
    menu: "",
    vedio: "",
    vedio_price: 10,
  });

  let ownerimg = (e) => {
    setall_img({ ...all_img, [e.target.name]: e.target.files[0] });
  };
  let businesslogoimg = (e) => {
    setall_img({ ...all_img, [e.target.name]: e.target.files[0] });
  };
  let businessimglisting = (e) => {
    setall_img({ ...all_img, [e.target.name]: e.target.files });
  };
  let menuimg = (e) => {
    setall_img({ ...all_img, [e.target.name]: e.target.files });
  };
  let videouploads = (e) => {
    setall_img({ ...all_img, [e.target.name]: e.target.files[0] });
  };

  let Formsubmmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

    for (let i = 0; i <= all_img.listing_images.length - 1; i++) {
      formdata.append("listing_images[]", all_img.listing_images[i]);
    }
    for (let i = 0; i <= all_img.menu.length - 1; i++) {
      formdata.append("menu[]", all_img.menu[i]);
    }

    formdata.append("vendor_id", all_img.vendor_id);
    formdata.append("owner_image", all_img.owner_image);
    formdata.append("business_logo", all_img.business_logo);
    formdata.append("vedio", all_img.vedio);
    formdata.append("vedio_price", all_img.vedio_price);

    axios
      .post(`${apiurl[0].apiUrl}React/add_vendor_listing`, formdata, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.result == "true") {
          setsimbolstatusstatus(false);
          console.log("yus");
          setloaderstatus(true);
        } else if (res.data.result == "false") {
          seterrorstatus(false);
          console.log("no");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setloaderstatus(false);
  };

  return (
    <div>
      {/* Preloader - style you can find in spinners.css */}
      {/* ============================================================== */}
      <div className="preloader" />
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* Top header  */}
        {/* Start Navigation */}
        <Headerbusiness />
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* =============================== Dashboard Header ========================== */}
        <Dashboardimage />
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
          <div className="collapse" id="MobNav">
            <div className="goodup-dashboard-nav sticky-top">
              <div className="goodup-dashboard-inner">
                <ul data-submenu-title="Main Navigation">
                  <li className="active">
                    <a href="/bdashboard">
                      <i className="lni lni-dashboard me-2" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/bmylisting">
                      <i className="lni lni-files me-2" />
                      My Listings
                    </a>
                  </li>
                  <li>
                    <a href="/baddlisting">
                      <i className="lni lni-add-files me-2" />
                      Add Listing
                    </a>
                  </li>
                  <li>
                    <a href="/bsavedlisting">
                      <i className="lni lni-bookmark me-2" />
                      Saved Listing
                    </a>
                  </li>
                  <li>
                    <a href="/bmybooking">
                      <i className="lni lni-briefcase me-2" />
                      My Bookings<span className="count-tag bg-warning">4</span>
                    </a>
                  </li>
                  <li>
                    <a href="/bwallet">
                      <i className="lni lni-mastercard me-2" />
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a href="/bmessage">
                      <i className="lni lni-envelope me-2" />
                      Messages<span className="count-tag">4</span>
                    </a>
                  </li>
                </ul>
                <ul data-submenu-title="My Accounts">
                  <li>
                    <a href="/bmyprofile">
                      <i className="lni lni-user me-2" />
                      My Profile{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/bchangepassword">
                      <i className="lni lni-lock-alt me-2" />
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i className="lni lni-trash-can me-2" />
                      Delete Account
                    </a>
                  </li>
                  <li>
                    <a href="/loginbusiness">
                      <i className="lni lni-power-switch me-2" />
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="goodup-dashboard-content">
            <div className="dashboard-tlbar d-block">
              <div className="row">
                <div className="colxl-12 col-lg-12 col-md-12">
                  <h1 className="ft-medium">Add Listing</h1>
                </div>
              </div>
            </div>
            <div className="dashboard-widg-bar d-block">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="submit-form">
                    {/* Listing Info */}

                    {/* Image & Gallery Option */}
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md">
                            <i className="fa fa-camera me-2 theme-cl fs-sm" />
                            Image &amp; Gallery Option
                          </h4>
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <form action="" method="post" onSubmit={Formsubmmit}>
                          <div className="row">
                            {/* Logo */}
                            <div className="col-lg-3 col-md-6">
                              <label className="mb-1">Owner Image</label>
                              <form
                                action="https://themezhub.net/file-upload"
                                className="dropzone"
                                id="single-logo"
                              >
                                <label for="ownerimg">
                                  {" "}
                                  <i
                                    className="fas fa-upload"
                                    style={{ cursor: "pointer" }}
                                  />
                                </label>
                                <h6 className="text-success">
                                  {all_img.owner_image.length == null
                                    ? "1"
                                    : "0"}{" "}
                                  image
                                </h6>
                                <input
                                  style={{ display: "none" }}
                                  required
                                  name="owner_image"
                                  onChange={ownerimg}
                                  id="ownerimg"
                                  accept="image/*"
                                  type="file"
                                />
                              </form>
                              {/* <label className="smart-text">Maximum file size: 2 MB.</label> */}
                            </div>
                            {/* Featured Image */}
                            <div className="col-lg-3 col-md-6">
                              <label className="mb-1">Business Logo</label>
                              <form
                                action="https://themezhub.net/file-upload"
                                className="dropzone"
                                id="featured-image"
                              >
                                <label for="business_logoimg">
                                  {" "}
                                  <i
                                    className="fas fa-upload"
                                    style={{ cursor: "pointer" }}
                                  />
                                </label>
                                <h6 className="text-success">
                                  {all_img.business_logo.length == null
                                    ? "1"
                                    : "0"}{" "}
                                  image
                                </h6>
                                <input
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  required
                                  name="business_logo"
                                  onChange={businesslogoimg}
                                  id="business_logoimg"
                                  type="file"
                                />
                              </form>
                              {/* <label className="smart-text">Maximum file size: 2 MB.</label> */}
                            </div>
                            {/* Gallery */}
                            <div className="col-lg-6 col-md-12">
                              <label className="mb-1">
                                Listing Images Upload
                              </label>{" "}
                              <br />
                              <form
                                action="https://themezhub.net/file-upload"
                                className="dropzone"
                                id="gallery"
                              >
                                <label>
                                  Upload business photos (up to 20 photos)
                                </label>
                                <label for="businessimg">
                                  {" "}
                                  <i
                                    className="fas fa-upload"
                                    style={{ cursor: "pointer" }}
                                  />
                                </label>
                                <h6 className="text-success">
                                  {all_img.listing_images.length} images
                                </h6>
                                <input
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  required
                                  name="listing_images"
                                  onChange={businessimglisting}
                                  multiple
                                  id="businessimg"
                                  type="file"
                                />
                              </form>
                              {/* <label className="smart-text">Maximum file size: 2 MB.</label> */}
                            </div>
                          </div>
                          <div className="row">
                            {/* Logo */}
                            <div className="col-lg-6 col-md-6 mt-2">
                              <label className="mb-1">Manu images upload</label>
                              <form
                                action="https://themezhub.net/file-upload"
                                className="dropzone"
                                id="single-logo"
                              >
                                <label className="">
                                  Upload business photos (up to 20 photos)
                                </label>
                                <label for="menuimg">
                                  {" "}
                                  <i
                                    className="fas fa-upload"
                                    style={{ cursor: "pointer" }}
                                  />
                                </label>
                                <h6 className="text-success">
                                  {all_img.menu.length} images
                                </h6>
                                <input
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  required
                                  name="menu"
                                  onChange={menuimg}
                                  id="menuimg"
                                  multiple
                                  type="file"
                                />
                              </form>
                              {/* <label className="smart-text">Maximum file size: 2 MB.</label> */}
                            </div>
                            {/* Featured Image */}
                            <div className="col-lg-6 col-md-6 mt-2">
                              <label className="mb-1">Video file upload</label>
                              <form
                                action="https://themezhub.net/file-upload"
                                className="dropzone"
                                id="featured-image"
                              >
                                <label className="text-danger">
                                  We will charge $50 extra to list if you will
                                  upload video
                                </label>
                                <label for="img">
                                  {" "}
                                  <i
                                    className="fas fa-upload"
                                    style={{ cursor: "pointer" }}
                                  />
                                </label>
                                <h6 className="text-success">
                                  {all_img.vedio.length == null ? "1" : "0"}{" "}
                                  video
                                </h6>
                                <input
                                  accept="video/*"
                                  style={{ display: "none" }}
                                  required
                                  name="vedio"
                                  onChange={videouploads}
                                  id="img"
                                  type="file"
                                />
                              </form>
                              {/* <label className="smart-text">Maximum file size: 2 MB.</label> */}
                            </div>
                            {/* Gallery */}
                          </div>
                          <div className="text-center">
                            {loaderstatus == true ? (
                              simbolstatus == true ? (
                                <button
                                  type="submit"
                                  className="btn btn-danger m-2"
                                >
                                  Uploads
                                </button>
                              ) : errorstatus == true ? (
                                <>
                                  <h6 className="text-success m-2">Success</h6>
                                </>
                              ) : (
                                <>
                                  <h6 className="text-danger m-2">Try-Agian</h6>
                                </>
                              )
                            ) : errorstatus == true ? (
                              <button className="loader m-2"></button>
                            ) : (
                              <>
                                <h6 className="text-danger m-2">Try-Again</h6>
                              </>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="row">
              <div className="col-md-12">
                <div className="py-3">
                  Â© 2023 Boricua Directory. Designd By Logical Soft Tech
                  Private Limited.
                </div>
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
      {/* Date Booking Script */}
      {/* ============================================================== */}
      {/* This page plugins */}
      {/* ============================================================== */}
    </div>
  );
};

export default Baddlisting;
