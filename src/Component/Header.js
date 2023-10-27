import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

function Header() {
  const idd = secureLocalStorage.getItem("_id");
  let token = secureLocalStorage.getItem("token");

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
    secureLocalStorage.removeItem("suncategoryidd");
    secureLocalStorage.removeItem("catergoryid");
  };


  let [vendorstatus, setvendorstatus] = useState()
  let [vendor_type_status, setvendor_type_status] = useState()

 

  useEffect(() => {
    try {
      let data = {
        "vendor_id": idd
      }
      axios.post(`${apiurl[0].apiUrl}React/get_vendor_profile_react`, data, {
        headers: {
          Authorization: `${token}`,
        },
      }).then((res => {
        
        setvendorstatus(res?.data?.data?.approve)
        setvendor_type_status(res?.data?.data?.type)


      })).catch((error) => {
      })
    } catch (error) {

    }

    
  }, [vendorstatus, idd,vendor_type_status])

  return (
    <div className="header header-light dark-text">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand" href="/">
              <img src="assets/img/logoss.png" className="logo" alt="" />
            </a>
            <div className="nav-toggle" />
            <div className="mobile_nav">
              {idd == null ? (
                <ul>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2" />
                        Add Listing
                      </span>
                    </a>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <a href="/dashboard" className="theme-cl fs-lg">
                      <i className="lni lni-user" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/addlisting"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2" />
                        Add Listing
                      </span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div
            className="nav-menus-wrapper"
            style={{ transitionProperty: "none" }}
          >
            <ul className="nav-menu">
              <li>
                <a href="javascript:void(0);"> Restaurants</a>

                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="/listingsearch">Delivery</a>
                  </li>
                  {/* <li><a href="half-map-search-1.html">Delivery</a></li> */}
                  <li>
                    <a href="/listingsearch">Burgers</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Chinese</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Italian</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Reservations</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Japanese</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Mexican</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Thai</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">Home Services</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="/listingsearch">Contractors</a>
                    {/* <ul class="nav-dropdown nav-submenu">
                <li><a href="listing-search-v1.html">With Sidebar V1</a></li>
                <li><a href="listing-search-v2.html">With Sidebar V2</a></li>
                <li><a href="listing-search-v3.html">With Sidebar V3</a></li>
                <li><a href="listing-search-with-map.html">Full Width + Map</a></li>
              </ul> */}
                  </li>
                  <li>
                    <a href="/listingsearch">Electricians</a>
                    {/* <ul class="nav-dropdown nav-submenu">
                <li><a href="half-map-search-1.html">With Sidebar</a></li>
                <li><a href="listing-search-v5.html">Full Width</a></li>
                <li><a href="listing-search-with-map.html">Full Width With Map</a></li>
              </ul> */}
                  </li>
                  <li>
                    <a href="/listingsearch">Home Cleaners</a>
                    {/* <ul class="nav-dropdown nav-submenu">
                <li><a href="half-map-search-1.html">Search On Map V1</a></li>
                <li><a href="half-map-search-2.html">Search On Map V2</a></li>
                <li><a href="half-map-search-3.html">Search On Map V3</a></li>
              </ul> */}
                  </li>
                  <li>
                    <a href="/listingsearch">HVAC</a>
                    {/* <ul class="nav-dropdown nav-submenu">
                <li><a href="single-listing-detail-1.html">Single Listing V1</a></li>
                <li><a href="single-listing-detail-2.html">Single Listing V2</a></li>
                <li><a href="single-listing-detail-3.html">Single Listing V3</a></li>
                <li><a href="single-listing-detail-4.html">Single Listing V4</a></li>
                <li><a href="single-listing-detail-5.html">Single Listing V5</a></li>
                <li><a href="single-listing-detail-6.html">Single Listing V6</a></li>
                <li><a href="single-listing-detail-7.html">Single Listing V7</a></li>
                <li><a href="single-listing-detail-8.html">Single Listing V8</a></li>
              </ul> */}
                  </li>
                  <li>
                    <a href="/listingsearch">Landscaping</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Locksmiths</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Movers</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Plumbers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">Auto Services</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-dashboard me-2" />
                      Auto Repair
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-files me-2" />
                      Auto Detailing
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-add-files me-2" />
                      Body Shops
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-bookmark me-2" />
                      Car Wash
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-briefcase me-2" />
                      Car Dealers
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-mastercard me-2" />
                      Oil Change
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-envelope me-2" />
                      Parking
                    </a>
                  </li>
                  <li>
                    <a href="/listingsearch">
                      <i className="lni lni-user me-2" />
                      towing{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">More</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="/listingsearch">Dry Cleaning</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Phone Repair</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Bars</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Nightlife</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Hair Salons</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Gyms</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Massage</a>
                  </li>
                  <li>
                    <a href="/listingsearch">Shopping</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav-menu">
              <li>
                <a href="javascript:void(0);">For Business</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="/contact">Add a Business</a>
                  </li>
                  <li>
                    <a href="/contact">Claim your business</a>
                  </li>
                  <li>
                    <a href="/logintobusiness">Log in to Business Account</a>
                  </li>
                  <li>
                    {/* <a href="/businesshome">Explore for Business</a> */}
                    {vendor_type_status === "vendor" ? (vendorstatus == 1 ? (<a href="/businesshome">Business Account</a>) : (<a href="/">User not approve</a>)) : (<a href="/businesssignup">Register As Partner</a>)}
                  </li>
                </ul>
              </li>
            </ul>
            {idd == null ? (
              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    className="ft-bold"
                  >
                    <i className="fas fa-sign-in-alt me-1 theme-cl" />
                    Log In
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#signup"
                    className="ft-bold"
                  >
                    <i className="fas fa-user-plus me-1 theme-cl" />
                    Sign Up
                  </a>
                </li>

                {/* <li>
             <a href="/dashboard" className="ft-bold">
             <i class="fas fa-user-plus me-1 theme-cl"></i>Logout
             </a>
           </li> */}

                {/* <li class="add-listing">
         <a href="add-listing.html" >
           <i class="fas fa-plus me-2"></i>Add Listing
         </a>
       </li> */}
              </ul>
            ) : (
              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a href="/dashboard" className="ft-bold">
                    <i class="fas fa-user-plus me-1 theme-cl"></i>
                  </a>
                </li>

                {/* <li>
             <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="ft-bold">
                <i className="fas fa-sign-in-alt me-1 theme-cl" />Log In
             </a>
           </li>
            <li>
             <a href="#" data-bs-toggle="modal" data-bs-target="#signup" className="ft-bold">
               <i className="fas fa-user-plus me-1 theme-cl" />Sign Up
             </a>
           </li>  */}

                <li onClick={logout}>
                  <a href="/" className="ft-bold">
                    {/* <i class="fas fa-user-plus me-1 theme-cl"></i> */}
                    <i className="fas fa-sign-in-alt me-1 theme-cl" />

                    Logout
                  </a>
                </li>

                {/* <li class="add-listing">
         <a href="add-listing.html" >
           <i class="fas fa-plus me-2"></i>Add Listing
         </a>
       </li> */}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
