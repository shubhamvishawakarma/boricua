import ReactPlayer from "react-player";
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { useState, useEffect } from "react";
function Educationaldetails() {
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
      style={{ padding: "55px" }}
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

  const [educaltiondetails, seteducaltiondetails] = useState([]);

  let educationalidd = secureLocalStorage.getItem("educaltioncalidd");
  useEffect(() => {
    singlelistingg();
  }, []);

  const singlelistingg = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let educationalidd = secureLocalStorage.getItem("educaltioncalidd");

    const data = JSON.stringify({
      education_id: educationalidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/educational_details_react`, data, options)
      .then((res) => {
        seteducaltiondetails(res.data.data);
      })
      .catch((err) => {
        
      });
  };

  const lat=educaltiondetails?.educational_lat
  const lon=educaltiondetails?.educational_long
  const zoom =16;
  const eventImages = educaltiondetails?.education_image;


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
        <div className="featured-slick">
          <div className="">
            <Slider {...settings}>
              {eventImages?.map((items, index) => {
                return (
                  <div className="dlf-flew" key={index}>
                    <img
                      className="img-fluid mx-auto"
                      src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/event/${items?.education_image}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </Slider>

            {/* <div className="dlf-flew">
              <a href="assets/img/lg-1.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-1.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div> */}
          </div>
          <div className="ftl-diope">
            <a
              href="/images"
              className="btn bg-white text-dark ft-medium rounded"
            >
              See More Photos
            </a>
          </div>
          <div className="Goodup-ops-bhri">
            <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
              <div className="Goodup-lkp-thumb">
                <img
                  src="assets/img/burger-king.png"
                  className="img-fluid"
                  width={90}
                  alt=""
                />
              </div>
              <div className="Goodup-lkp-caption ps-3">
                <div className="Goodup-lkp-title">
                  <h1 className="text-light mb-0 ft-bold">
                    {educaltiondetails?.educational_name}
                  </h1>
                </div>
                {/* <div className="Goodup-ft-first">
                  <div className="Goodup-rating">
                    <div className="Goodup-rates">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="Goodup-price-range">
                    <span className="ft-medium text-light">34 Reviews</span>
                    <div className="d-inline ms-2">
                      <span className="active">
                        <i className="fas fa-dollar-sign" />
                      </span>
                      <span className="active">
                        <i className="fas fa-dollar-sign" />
                      </span>
                      <span className="active">
                        <i className="fas fa-dollar-sign" />
                      </span>
                    </div>
                  </div>
                </div> */}
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
                        className="text-light ft-medium"
                      >
                        {educaltiondetails?.educational_location}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block mt-1">
                  <div className="list-lioe">
                    <div className="list-lioe-single">
                      <span className="ft-medium text-danger">Date & Time</span>
                      <span className="text-light ft-medium ms-2">
                        {educaltiondetails?.educational_start} 11:00 AM - 12:00
                        AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= Searchbar Banner ======================== */}
        {/* ============================ Listing Details Start ================================== */}
        <section className="gray py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                {/* About The Business */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">About </h5>
                      <div className="d-block mt-3">
                        <p style={{ textAlign: "justify" }}>
                          {educaltiondetails?.educational_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">About My Business</h5>
                      <div className="d-block mt-3">
                        <p style={{ textAlign: "justify" }}>
                          {educaltiondetails?.educational_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Business Menu */}

                {/* <div className="sep-devider" /> */}
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="jb-apply-form bg-white rounded py-4 px-4 box-static mb-4">
                  <div className="uli-list-info">
                    <ul>
                      <li>
                        <div className="list-uiyt">
                          <div className="list-iobk">
                            <i className="fas fa-globe" />
                          </div>
                          <div className="list-uiyt-capt">
                            <h5>Live Site</h5>
                            <p>{educaltiondetails?.edu_website}</p>
                          </div>
                        </div>
                      </li>
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
                            <p>{educaltiondetails?.edu_contact}</p>
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
                            <p>{educaltiondetails?.educational_location}</p></a>
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

        <section className="gray py-0 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                {/* About The Business */}

                {/* Business Menu */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Education Detail'S</h5>
                      <div className="d-block mt-3">
                        <div className="row g-3">
                          {eventImages?.map((items, index) => {
                            return (
                              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="Goodup-sng-menu">
                                  <div className="Goodup-sng-menu-thumb">
                                    <img
                                      src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/event/${items?.education_image}`}
                                      className=""
                                      width={"100%"}
                                      height={"166px"}
                                      alt=""
                                    />
                                  </div>
                                  {/* <div className="Goodup-sng-menu-caption">*/}
                                  {/* <h4 className="ft-medium fs-md">Brigue Medium Burger</h4> */}
                                  {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$49</h5></div> */}
                                  {/* </div>*/}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sep-devider " />
                <div className="bg-white rounded mb-0">
                  <div className="jbd-01 px-3 py-2">
                    <div className="jbd-details mb-0">
                      {/* <h5 className="ft-bold fs-lg">Business Menu</h5> */}
                      <div className="d-block mt-2">
                        <div className="row g-3">
                          <ReactPlayer
                            className="rounded"
                            url={
                              `${apiurl[0].apiUrl}assets/bori_images/event/` +
                              educaltiondetails?.educational_video
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
                {/* Amenities and More */}
                {/* <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Amenities and More</h5>
                      <div className="Goodup-all-features-list mt-3">
                        <ul>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className
                                alt=""
                              />
                              <span>Health Score 8.7 / 10</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Offers Delivery</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Offers Takeout</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Reservations</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Staff wears masks</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Vegan Options</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Vegetarian Options</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Accepts Credit Cards</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Casual</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Moderate Noise</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Offers Catering</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Good for Groups</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Good For Kids</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Good for Breakfast</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Brunch, Lunch, Dinner</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Private Lot Parking</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Waiter Service</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Free Wi-Fi</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Beer &amp; Wine</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Drive-Thru</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace deactive">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Wheelchair Accessible</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace deactive">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>TV Services</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace deactive">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Outdoor Seating</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace deactive">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Happy Hour</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace deactive">
                              <img
                                src="assets/img/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Pets Allow</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Recommended Reviews */}

                {/* Location & Hours */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Location &amp; Hours</h5>
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-xl-6 col-lg-6 col-md-12">
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
                                height={300}
                                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>
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
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <th scope="row">Mon</th>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td className="text-success">Open now</td>
                                </tr>
                                <tr>
                                  <td>Tue</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Wed</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Thu</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Fri</td>
                                  <td>5:00 PM - 6:30 PM</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Sat</td>
                                  <td>Closed</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Sun</td>
                                  <td>Closed</td>
                                  <td />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Drop Your Review */}
                {/* <div className="bg-white rounded mb-4">
                <div className="jbd-01 px-4 py-4">
                  <div className="jbd-details mb-4">
                    <h5 className="ft-bold fs-lg">Drop Your Review</h5>
                    <div className="review-form-box form-submit mt-3">
                      <form>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">Choose Rate</label>
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
                              <label className="ft-medium small mb-1">Name</label>
                              <input className="form-control rounded" type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">Email</label>
                              <input className="form-control rounded" type="email" placeholder="Your Email" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group mb-3">
                              <label className="ft-medium small mb-1">Review</label>
                              <textarea className="form-control rounded ht-140" placeholder="Review" defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                              <button type="submit" className="btn theme-bg text-light rounded">Submit Review</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
              {/* Sidebar */}
            </div>
          </div>
        </section>

        {/* ============================ Listing Details End ================================== */}
        {/* ======================= Related Listings ======================== */}

        {/* ======================= Related Listings ======================== */}
        {/* ======================= Newsletter Start ============================ */}
        {/* 			<section class="space bg-cover" style="background:#03343b url(assets/img/landing-bg.png) no-repeat;">
    <div class="container py-5">
      
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="sec_title position-relative text-center mb-5">
            <h6 class="text-light mb-0">Subscribr Now</h6>
            <h2 class="ft-bold text-light">Get All Updates & Advance Offers</h2>
          </div>
        </div>
      </div>
      
      <div class="row align-items-center justify-content-center">
        <div class="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
          <form class="bg-white rounded p-1">
            <div class="row no-gutters">
              <div class="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                <div class="form-group mb-0 position-relative">
                  <input type="text" class="form-control b-0" placeholder="Enter Your Email Address">
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                <div class="form-group mb-0 position-relative">
                  <button class="btn full-width btn-height theme-bg text-light fs-md" type="button">Subscribe</button>
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
}

export default Educationaldetails;
