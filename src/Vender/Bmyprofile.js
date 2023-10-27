import React from "react";

import Headerbusiness from "./Headerbusiness";
import { useState } from "react";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import apiurl from "../Component/config";
import Dashboardimage from '../Component/Dashboardimage';
const Bmyprofile = () => {
  const [profile, setprofile] = useState([]);

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [land_mark, setland_mark] = useState("");
  const [web_site, setweb_site] = useState("");
  const [des_cription, setdes_cription] = useState("");
  const [vendor_address, setvendor_address] = useState("");
  const [abo_ut, setabo_ut] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    getprofile();
  });

  const getprofile = () => {
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      vendor_id: idddd,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/get_vendor_profile_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
         
        },
      })
      .then((response) => {
        setprofile(response.data.data);
      })
      .catch((error) => {});
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      vendor_id: idddd,
      first_name: first_name,
      last_name: last_name,
      landmark: land_mark,
      website: web_site,
      discription: des_cription,
      vendor_address: vendor_address,
      about: abo_ut,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/vendor_update_profile_react`, data, {
        headers: {
           Authorization: `${tokenn}`,
          
        },
      })
      .then((response) => {
        setfirst_name("");
        setlast_name("");
        setland_mark("");
        setweb_site("");
        setdes_cription("");
        setvendor_address("");
        setabo_ut("");

        setSuccessMessage("Profile updated successfully!");
        getprofile();
      })
      .catch((error) => {});
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
        <Headerbusiness />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* =============================== Dashboard Header ========================== */}
       
        <Dashboardimage/>
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
            <div className="dashboard-tlbar d-block mb-5">
              <div className="row">
                <div className="colxl-12 col-lg-12 col-md-12">
                  <h1 className="ft-medium">Profile Info</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li>
                        <a href="#">Home /</a>
                      </li>
                      <li>
                        <a href="#">Dashboard /</a>
                      </li>
                      <li>
                        <a href="#" className="theme-cl">
                          My Profile
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="dashboard-widg-bar d-block">
              <div className="row">
                {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 order-xl-last order-lg-last order-md-last">
                  <div className="d-flex bg-white rounded px-3 py-3 mb-3">
                    <div className="dash-figure">
                      <div className="dash-figure-thumb">
                        {profile?.user_image ? (
                          <img
                            src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/users/${profile?.user_image}`}
                            className="img-fluid rounded"
                            alt=""
                          />
                        ) : (
                          <img
                            src="assets/img/t-4.png"
                            className="img-fluid rounded"
                            alt=""
                          />
                        )}

                      
                      </div>
                    
                    </div>
                  </div>
                </div> */}

                <div className="col-xl-12 col-lg-12 col-md-8 col-sm-12">
                  <font style={{ color: "blue" }}>{successMessage}</font>
                  <form className="submit-form" onSubmit={handleFormSubmit}>
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md">
                            <i className="fa fa-user-check me-2 theme-cl fs-sm" />
                            My Profile
                          </h4>
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">First Name</label>
                              <input
                                type="text"
                                value={first_name}
                                onChange={(e) => setfirst_name(e.target.value)}
                                className="form-control rounded"
                                placeholder={profile?.first_name}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Last Name</label>
                              <input
                                value={last_name}
                                onChange={(e) => setlast_name(e.target.value)}
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.last_name}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Email ID</label>
                              <input
                                type="text"
                                disabled
                                className="form-control rounded"
                                placeholder={profile?.user_email}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Mobile</label>
                              <input
                                disabled
                                type="number"
                                className="form-control rounded"
                                placeholder={profile?.vendor_contact}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Land Mark</label>
                              <input
                                value={land_mark}
                                onChange={(e) => setland_mark(e.target.value)}
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.landmark}
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Website</label>
                              <input
                                value={web_site}
                                onChange={(e) => setweb_site(e.target.value)}
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.website}
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Description</label>
                              <textarea
                                value={des_cription}
                                onChange={(e) =>
                                  setdes_cription(e.target.value)
                                }
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.discription}
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Vendor Address</label>
                              <textarea
                                value={vendor_address}
                                onChange={(e) =>
                                  setvendor_address(e.target.value)
                                }
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.vendor_address}
                              />
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">About The Listing</label>
                              <textarea
                                value={abo_ut}
                                onChange={(e) => setabo_ut(e.target.value)}
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.about}
                              />
                            </div>
                          </div>

                          {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">State</label>
                              <select className="form-control">
                                <option>Uttar Pradesh</option>
                                <option>Uttrakhand</option>
                                <option>Gujrat</option>
                                <option>Mumbai</option>
                                <option>Karnatak</option>
                                <option>Goa</option>
                                <option>Punjab</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">City</label>
                              <select className="form-control">
                                <option>Aligarh</option>
                                <option>Allahabad</option>
                                <option>Agra</option>
                                <option>Gonda</option>
                                <option>Lucknow</option>
                                <option>Meeruth</option>
                                <option>Gaziabad</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Address</label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.vendor_address}
                              />
                            </div>
                          </div> */}
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Zip Code</label>
                              <input
                                disabled
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.zip}
                              />
                            </div>
                          </div>

                          {/* <div className="upload-photo-btn">
                            <div className="Uploadphoto">
                              <span>
                                <i className="fas fa-upload" /> Upload Photo
                              </span>
                              <input
                                onChange={handleProfileImageSelect}
                                type="file"
                                className="upload"
                              />
                            </div>
                          </div> */}

                          {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">About Notes</label>
                              <textarea
                                className="form-control rounded ht-150"
                                placeholder="Describe your self"
                                defaultValue={""}
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md">
                            <i className="fa fa-user-friends me-2 theme-cl fs-sm" />
                            My Social Links
                          </h4>
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">
                                <i className="ti-facebook theme-cl me-1" />
                                Facebook
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="https://facebook.com/"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">
                                <i className="ti-twitter theme-cl me-1" />
                                Twitter
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="https://twitter.com/"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">
                                <i className="ti-instagram theme-cl me-1" />
                                Instagram
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="https://instagram.com/"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">
                                <i className="ti-linkedin theme-cl me-1" />
                                Linkedin
                              </label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="https://linkedin.com/"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn theme-bg rounded text-light"
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* footer */}
            {/* <div class="row">
						<div class="col-md-12">
							<div class="py-3">© 2022 Goodup. Designd By ThemezHub.</div>
						</div>
					</div> */}
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
      {/* ============================================================== */}
      {/* This page plugins */}
      {/* ============================================================== */}
    </div>
  );
};

export default Bmyprofile;
