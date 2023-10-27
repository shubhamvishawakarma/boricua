import axios from "axios";
import React from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Navbardashboard = () => {
  let logout = async () => {
    const id = secureLocalStorage.getItem("_id");

    const data = {
      user_id: id,
    };

    axios.post(`${apiurl[0].apiUrl}React/logout_react`, data);
    secureLocalStorage.removeItem("_id");
    secureLocalStorage.removeItem("token");
    secureLocalStorage.removeItem("volunteringid");
    secureLocalStorage.removeItem("educaltioncalidd");
    secureLocalStorage.removeItem("eventid");
    secureLocalStorage.removeItem("lessid");
    secureLocalStorage.removeItem("catergoryid");
    secureLocalStorage.removeItem("listingserachid");
    secureLocalStorage.removeItem("listingid");
    secureLocalStorage.removeItem("latitude");
    secureLocalStorage.removeItem("longitude");
    secureLocalStorage.removeItem("suncategoryidd");
    secureLocalStorage.removeItem("catergoryid");
  };

  return (
    <div className="collapse" id="MobNav">
      <div className="goodup-dashboard-nav sticky-top">
        <div className="goodup-dashboard-inner">
          <ul data-submenu-title="Main Navigation">
            <li className="active">
              <a href="/dashboard">
                <i className="lni lni-dashboard me-2" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/mylisting">
                <i className="lni lni-files me-2" />
                My Listings
              </a>
            </li>
            <li>
              <a href="/addlisting">
                <i className="lni lni-add-files me-2" />
                Add Listing
              </a>
            </li>
            <li>
              <a href="/savedlisting">
                <i className="lni lni-bookmark me-2" />
                Saved Listing
              </a>
            </li>
            <li>
              <a href="/mybooking">
                <i className="lni lni-briefcase me-2" />
                My Bookings<span className="count-tag bg-warning">4</span>
              </a>
            </li>
            <li>
              <a href="/wallet">
                <i className="lni lni-mastercard me-2" />
                Wallet
              </a>
            </li>
            <li>
              <a href="/message">
                <i className="lni lni-envelope me-2" />
                Messages<span className="count-tag">4</span>
              </a>
            </li>
          </ul>
          <ul data-submenu-title="My Accounts">
            <li>
              <a href="/myprofile">
                <i className="lni lni-user me-2" />
                My Profile{" "}
              </a>
            </li>
            <li>
              <a href="/changepassword">
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
            <li onClick={logout}>
              <a href="/loginbusiness">
                <i className="lni lni-power-switch me-2" />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbardashboard;
