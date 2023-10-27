import React, { useState } from "react";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import axios from "axios";
import apiurl from "./config";

const Header2 = () => {
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setAddress(value);
    secureLocalStorage.setItem("valuee", value);

    secureLocalStorage.setItem("lat", JSON.stringify(latLng));
  };
  let latlongg = secureLocalStorage.getItem("lat");
  let parsevalue = JSON.parse(latlongg);
  const [details, setDetails] = useState(parsevalue);

  const idd = secureLocalStorage.getItem("_id");

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

  return (
    <div>
      <div className="header header-light dark-text head-border">
        <div className="container-fluid px-4">
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
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
                        className="theme-cl fs-lg"
                      >
                        <i className="lni lni-user" />
                      </Link>
                    </li>
                    <li>
                      <a
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
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
            <div className="nav-menus-wrapper">
              <form className="main-search-wrap fl-wrap half-column">
                <div className="main-search-item">
                  <span className="search-tag">Find</span>
                  <input
                    type="text"
                    className="form-control radius"
                    placeholder="Nail salons, plumbers, takeout..."
                  />
                </div>
                <div className="main-search-item">
                  <span className="search-tag">Where</span>
                  {/* <input type="text" className="form-control" placeholder="San Francisco, CA" /> */}

                  <PlacesAutocomplete
                    value={address}
                    onChange={(newValue) => setAddress(newValue)}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          style={{ width: "100%" }}
                          className="form-control"
                          {...getInputProps({
                            placeholder: "Enter Address",
                          })}
                        />
                        <div>
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => {
                            const style = {
                              backgroundColor: suggestion.active
                                ? "#41b6e6"
                                : "#fff",
                            };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  style,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </div>
                <div className="main-search-button">
                  <a href="/halfmapsearch"></a>
                  <button
                    type="submit"
                    className="btn full-width theme-bg text-white"
                  >
                    <a href="/halfmapsearch">
                      <i className="fas fa-search" />
                    </a>
                  </button>
                </div>
              </form>
              {idd == null ? (
                <ul className="nav-menu nav-menu-social align-to-right">
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="ft-bold"
                    >
                      <i className="fas fa-sign-in-alt me-1 theme-cl" />
                      Log In
                    </Link>
                  </li>
                  {/* <li class=""><Link to="#" data-bs-toggle="modal" data-bs-target="#login" class="crs_yuo12 w-auto text-black "><span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span></Link></li> */}

                  {/* <li class="">
										<Link to="#" data-bs-toggle="modal" data-bs-target="#signup" class="crs_yuo12 w-auto text-black ">
											<span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span>
										</Link>
									</li> */}
                </ul>
              ) : (
                <ul className="nav-menu nav-menu-social align-to-right">
                  <li onClick={logout}>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="ft-bold"
                    >
                      <i className="fas fa-sign-in-alt me-1 theme-cl" />
                      LogOut
                    </Link>
                  </li>
                  {/* <li class=""><Link to="#" data-bs-toggle="modal" data-bs-target="#login" class="crs_yuo12 w-auto text-black "><span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span></Link></li> */}

                  {/* <li class="">
										<Link to="#" data-bs-toggle="modal" data-bs-target="#signup" class="crs_yuo12 w-auto text-black ">
											<span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span>
										</Link>
									</li> */}
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
      <section className="cats-filters py-3">
        <div className="container-fluid px-4">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-9 col-md-9 col-12">
              <div className="Goodup-all-drp">
                <div className="Goodup-single-drp small">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Restaurants
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/fast-delivery.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Delivery
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/burger.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Burgers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/booking.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Reservations
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/house.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Japanese
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/chinese-food.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Chinese
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/mexican-hat.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Mekician
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/dish.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Italian
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/tom-yum.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Thai
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Goodup-single-drp small">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home Services
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/hammer.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Contractors
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/coconut-tree.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Landscaping
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/broken-cable.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Electricians
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/padlock.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Locksmiths
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/basket.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Home Cleaning
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/delivery-truck.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Movers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/home.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          HVAC
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/plumbering.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Plumbers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Goodup-single-drp small">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Auto Services
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/wrench.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Auto Repairs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/rental-car.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Car Dealers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/sketch.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Auto Detailing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/oil.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Oil Change
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/shopping-bag.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Body Shops
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/parking.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Parking
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/car-wash.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Car Wash
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/tow-truck.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Towing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="Goodup-single-drp small">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/towel-hanger.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Dry Cleaning
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/salon.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Hair salons
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/smartphone.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Phone Repair
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/weights.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Gyms
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/cocktail.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Bars &amp; cafe
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/spa.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Massage
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/poinsettia.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Nightlife
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/halfmapsearch">
                          <img
                            src="assets/img/icons/online-shopping.png"
                            className="img-fluid"
                            width={20}
                            alt=""
                          />
                          Shopping
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn active" onclick="openSearch()">Filters<i className="filt-count">3</i></button>
            </div>
          </div> */}
                {/* <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn bg-dark text-light">Update</button>
            </div>
          </div> */}
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-3 col-12">
        <div className="text-right"><button className="map-btn" onclick="removeClass()">Map<i className="fas fa-map ms-1" /></button></div>
      </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header2;
