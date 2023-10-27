import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReactPlayer from "react-player";
import axios from "axios";

import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Eventdetails = () => {
  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow"
      onClick={props.onClick}
      type="button"
      data-role="none"
      class="slick-prev slick-arrow"
      aria-label="Previous"
      role="button"
      style={{ padding: "25px" }}
    >
      Previous
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow"
      onClick={props.onClick}
      type="button"
      data-role="none"
      class="slick-next slick-arrow"
      aria-label="Next"
      role="button"
      style={{ padding: "55px"}}
    >
      Next <i className="ti-calendar" />
    </button>
  );

  const settings = {
    autoplay: false,
    infinite: true,
    // dots:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [singlelisting, setsinglelisting] = useState([]);

  let eventidd = secureLocalStorage.getItem("eventid");


  useEffect(() => {
    singlelistingg();
  }, []);

  const singlelistingg = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let eventidd = secureLocalStorage.getItem("eventid");

    const data = JSON.stringify({
      event_id: eventidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/event_details_react`, data, options)
      .then((res) => {
        setsinglelisting(res.data.data);
      })
      .catch((err) => {
       
      });
  };

  
  const lat = singlelisting?.event_lat;
  const lon = singlelisting?.event_long;
  const zoom = 16; 

  const eventImages = singlelisting?.event_image;

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
        {/* ======================= Searchbar Banner ======================== */}
       

        <section className="featured-wraps gray">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="Goodup-ops-bhriol">
                  <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
                    <div className="Goodup-lkp-thumb">
                      {/* <img
                        src="assets/img/burger-king.png"
                        className="img-fluid"
                        width={90}
                        alt=""
                      /> */}
{/* <img
                        src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/event/${singlelisting?.sub_category_image}`}
                        className="img-fluid"
                        width={90}
                        alt=""
                      /> */}

                    </div>
                    <div className="Goodup-lkp-caption ps-3">
                      <div className="Goodup-lkp-title">
                        <h1 className="mb-0 ft-bold">
                          {singlelisting?.event_name}
                        </h1>
                      </div>

                      <div className="d-block mt-3">
                        <div className="list-lioe">
                          <div className="list-lioe-single">
                            <span className="ft-medium text-info">
                              <i class="fas fa-map-marker-alt"></i> Location
                            </span>
                          </div>
                          <div className="list-lioe-single ms-2 ps-3 seperate">
                            <a
                              href="javascript:void(0);"
                              className="text-dark ft-medium"
                            >
                              {singlelisting?.event_location}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-block mt-1">
                        <div className="list-lioe">
                          <div className="list-lioe-single">
                            <span className="ft-medium text-danger">
                              Event Date & Time
                            </span>
                            <span className="ft-medium ms-2">
                              {singlelisting?.event_date} -{" "}
                              {singlelisting?.event_time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ======================= Searchbar Banner ======================== */}
        {/* ============================ Listing Details Start ================================== */}
        <section className="py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className=" mb-4">
                  <div className=" slick-initialized slick-slider">
                    <Slider {...settings}>
                      {eventImages?.map((items, index) => {
                        return (
                          <div className="" key={index}>
                            <a href="#" className="">
                              <img
                                width={"100%"}
                                height={"210px"}
                                src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/event/${items?.evt_image}`}
                                className=""
                                alt=""
                              />
                            </a>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                {/* About The Business */}
                <div className="d-block">
                  <div className="jbd-01">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">About the Event</h5>
                      <div className="d-block mt-3">
                        <p style={{ textAlign: "justify" }}>
                          {singlelisting?.event_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sep-devider" />
                {/* Business Menu */}
                <div
                  className=" rounded mb-0"
                  style={{ background: "#f4f4f7" }}
                >
                
                </div>

                
               
              
              </div>
              {/* Sidebar */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
             
                <div className="jb-apply-form bg-white rounded py-4 px-4 border mb-4">
                  <div className="uli-list-info">
                    <ul>
                      {/* <a href={singlelisting?.website} target="_blank" rel="noopener noreferrer">
  
</a>  */}
                      <a
                        href={singlelisting?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li>
                          <div className="list-uiyt">
                            <div className="list-iobk">
                              <i className="fas fa-globe" />
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Live Site</h5>
                              <p>{singlelisting?.website}</p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <Link to="#">
                        <li>
                          <div
                            className="list-uiyt"
                            data-bs-toggle="modal"
                            data-bs-target="#review"
                          >
                            <div className="list-iobk">
                              <i class="fa fa-star"></i>
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Add Review</h5>
                              <p>Reviews</p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <li>
                        <div className="list-uiyt">
                          <div className="list-iobk">
                            <i className="fas fa-phone" />
                          </div>
                          <div className="list-uiyt-capt">
                            <h5>Call Us</h5>
                            <p>{singlelisting?.contact}</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list-uiyt">
                          <div className="list-iobk">
                            <i className="fas fa-map-marker-alt" />
                          </div>
                          <div className="list-uiyt-capt">
                            <h5>Get Directions</h5>
                            <a href={`https://www.google.com/maps/dir//${lat},${lon}/@${lat},${lon},16z?entry=ttu`}>
                            <p>{singlelisting?.event_location}</p></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>


















        <section className="py-0 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
               
                {/* About The Business */}
                
                {/* <div className="sep-devider" /> */}
                {/* Business Menu */}
                <div
                  className=" rounded mb-0"
                  style={{ background: "#f4f4f7" }}
                >
                  <div className="jbd-01 px-3 py-2">
                    <div className="jbd-details mb-0">
                      {/* <h5 className="ft-bold fs-lg">Business Menu</h5> */}
                      <div className="d-block mt-2">
                        <div className="row g-3">
                          <ReactPlayer
                            className="rounded"
                            url={
                              `${apiurl[0].apiUrl}assets/bori_images/event/` +
                              singlelisting?.event_video
                            }
                            controls={true}
                            playing={false}
                            width={"100%"}
                            height={"100%"}
                            borderRadius={"10px"}
                            config={{
                              file: {
                                attributes: { controlsList: "nodownload" },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              

                <div className="sep-devider" />
                {/* Location & Hours */}
                <div className="d-block">
                  <div className="jbd-01">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg mb-3">Location </h5>
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="list-map-lot">
                              {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0148908503734!2d80.97350361499701!3d26.871267983145383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a9f6d1727%3A0xb87eabf63f7e4cee!2sCafe%20Repertwahr!5e0!3m2!1sen!2sin!4v1649059491407!5m2!1sen!2sin"
                                width="100%"
                                height={250}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              /> */}

<iframe
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>

{/* <iframe
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe> */}


                            </div>
                            {/* <div className="list-map-capt">
                              <div className="lio-pact">
                                <span className="ft-medium text-info">
                                  2919 N Flores St
                                </span>
                              </div>
                              <div className="lio-pact">
                                <span className="hkio-oilp ft-bold">
                                  San Antonio, TX 78212
                                </span>
                              </div>
                              <div className="lio-pact">
                                <p className="ft-medium">Alta Vista</p>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sep-devider" />
         
              </div>
              
             
            </div>
          </div>
        </section>
        {/* ============================ Listing Details End ================================== */}
        {/* ======================= Related Listings ======================== */}

        {/* ======================= Related Listings ======================== */}
        {/* ======================= Newsletter Start ============================ */}

        {/* ======================= Newsletter Start ============================ */}
        {/* ============================ Footer Start ================================== */}
        <Footer />
        {/* ============================ Footer End ================================== */}
        {/* Log In Modal */}

        <div
          className="modal fade"
          id="review"
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
              <div className="bg-white rounded mb-4">
                <div className="jbd-01 px-4 py-4">
                  <div className="jbd-details mb-4">
                    <h5 className="ft-bold fs-lg">Drop Your Review</h5>
                    <div className="review-form-box form-submit mt-3">
                      <form>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">
                                Choose Rate
                              </label>
                              <select className="form-control rounded">
                                <option>Choose Rating</option>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">
                                Name
                              </label>
                              <input
                                className="form-control rounded"
                                type="text"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">
                                Email
                              </label>
                              <input
                                className="form-control rounded"
                                type="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">
                                Review
                              </label>
                              <textarea
                                className="form-control rounded ht-140"
                                placeholder="Review"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn theme-bg text-light rounded"
                              >
                                Submit Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default Eventdetails;
