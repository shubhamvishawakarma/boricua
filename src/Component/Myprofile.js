import React from "react";
import Header from "./Header";
import secureLocalStorage from "react-secure-storage";
import { useState } from "react";
import axios from "axios";
import apiurl from "./config";
import { useEffect } from "react";
import Navbardashboard from "./Navbardashboard";
import Dashboardimage from "./Dashboardimage";

const Myprofile = () => {
  const [profile, setprofile] = useState([]);

  const [selectedProfileImage, setSelectedProfileImage] = useState();

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    getprofile();
  });

  const getprofile = () => {
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
  };

  const useridd = secureLocalStorage.getItem("_id");
  const tokenn = secureLocalStorage.getItem("token");

  const handleProfileImageSelect = (event) => {
    setSelectedProfileImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("user_image", selectedProfileImage);

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("user_id", useridd);

    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/update_user_profile`,
        formData,

        {
          headers: {
            Authorization: `${tokenn}`,
          },
        }
      );

      setSelectedProfileImage("");

      setfirst_name("");
      setlast_name("");

      setSuccessMessage("Profile updated successfully!");
      getprofile();
    } catch (error) {}
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
        <Header />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
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
          <Navbardashboard />
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
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 order-xl-last order-lg-last order-md-last">
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

                        {/* <img
                          src="assets/img/t-4.png"
                          className="img-fluid rounded"
                          alt=""
                        /> */}
                      </div>
                      {/* <div className="upload-photo-btn">
                        <div className="Uploadphoto">
                          <span>
                            <i className="fas fa-upload" /> Upload Photo
                          </span>
                          <input type="file" className="upload" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12">
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
                                type="text"
                                className="form-control rounded"
                                placeholder="91 256 584 7895"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
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
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
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
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Address</label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="USA 20TH Berlin Market NY"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label className="mb-1">Zip Code</label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder={profile?.zip}
                              />
                            </div>
                          </div>

                          <div className="upload-photo-btn">
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
                          </div>

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

export default Myprofile;
