import React, { useState } from "react";
import Header from "./Header";
import secureLocalStorage from "react-secure-storage";
import Navbardashboard from "./Navbardashboard";
import Dashboardimage from "./Dashboardimage";
import apiurl from "./config";
import axios from "axios";

const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [output, setOutput] = useState("");

  const _id = secureLocalStorage.getItem("_id");
  const tokenn = secureLocalStorage.getItem("token");
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      user_id: _id,
      old_password: password,
      new_password: newPassword,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/change_password_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        if (response.data.result === true) {
          setOutput(response.data.msg);
        } else if
        (response.data.result === false)
        {
          
          setOutput(response.data.msg);
        }
else{
  setOutput(response.data.msg)
}

       


        setPassword("");
        setNewPassword("");
      })
      .catch((err) => {

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
                  <h1 className="ft-medium">Change Password</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li>
                        <a href="#">Home /</a>
                      </li>
                      <li>
                        <a href="#">Settings /</a>
                      </li>
                      <li>
                        <a href="#" className="theme-cl">
                          Change Password
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="dashboard-widg-bar d-block">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="_dashboard_content bg-white rounded mb-4">
                    <div className="_dashboard_content_header br-bottom py-3 px-3">
                      <div className="_dashboard__header_flex">
                        <h4 className="mb-0 ft-medium fs-md">
                          <i className="fa fa-lock me-2 theme-cl fs-sm" />
                          Change Password
                        </h4>
                      </div>
                    </div>
                    <div className="_dashboard_content_body py-3 px-3">
                      <font style={{color:'blue'}}>{output}</font> 
                      <form onClick={handleSubmit} className="row submit-form">
                        <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label>Old Password</label>
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="text"
                              className="form-control rounded"
                              placeholder
                            />
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label>New Password</label>
                            <input
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              type="text"
                              className="form-control rounded"
                              placeholder
                            />
                          </div>
                        </div>
                        {/* <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="text" className="form-control rounded" placeholder />
                            </div>
                          </div> */}
                        <div className="col-xl-12 col-lg-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-md ft-medium text-light rounded theme-bg"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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

export default Changepassword;
