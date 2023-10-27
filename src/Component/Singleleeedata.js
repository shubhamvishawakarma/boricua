import ReactPlayer from "react-player";
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Singlelisting() {
  
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
          <div className="featured-gallery-slide">
            <div className="dlf-flew">
              <a href="assets/img/lg-1.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-1.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-2.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-2.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-3.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-3.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-4.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-4.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-5.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-5.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-6.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-6.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-7.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-7.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
            <div className="dlf-flew">
              <a href="assets/img/lg-8.png" className="mfp-gallery">
                <img
                  src="assets/img/lg-8.png"
                  className="img-fluid mx-auto"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="ftl-diope">
            <a
              href="/images"
              className="btn bg-white text-dark ft-medium rounded"
            >
              See 20+ Photos
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
                    Sake Cafe Sushi Bar &amp; Grill
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
                        Chicken Wings
                      </a>
                      ,
                      <a
                        href="javascript:void(0);"
                        className="text-light ft-medium ms-1"
                      >
                        Sports Bars
                      </a>
                      ,
                      <a
                        href="javascript:void(0);"
                        className="text-light ft-medium ms-1"
                      >
                        American (Traditional)
                      </a>
                      ,
                      <a
                        href="javascript:void(0);"
                        className="text-light ft-medium ms-1"
                      >
                        Seafood
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block mt-1">
                  <div className="list-lioe">
                    <div className="list-lioe-single">
                      <span className="ft-medium text-danger">Event Date & Time</span>
                      <span className="text-light ft-medium ms-2">
                        11:00 AM - 12:00 AM
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
                      <h5 className="ft-bold fs-lg">About the Business</h5>
                      <div className="d-block mt-3">
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi
                          consequatur
                        </p>
                        <p className="p-0 m-0">
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Business Menu */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Business Menu</h5>
                      <div className="d-block mt-3">
                        <div className="row g-3">
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-1.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                             {/* <div className="Goodup-sng-menu-caption">*/}
                                {/* <h4 className="ft-medium fs-md">Brigue Medium Burger</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$49</h5></div> */}
                             {/* </div>*/}
                            </div>
                          </div>
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-2.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              {/*<div className="Goodup-sng-menu-caption">*/}
                                {/* <h4 className="ft-medium fs-md">Cheese Mrig Buttor</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$129</h5></div> */}
                              {/*</div>*/}
                            </div>
                          </div>
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-3.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              {/*<div className="Goodup-sng-menu-caption">
                                {/* <h4 className="ft-medium fs-md">Potato Chips Crispy</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$79</h5></div> */}
                              {/*</div>*/}
                            </div>
                          </div>
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-4.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              {/*<div className="Goodup-sng-menu-caption">*/}
                                {/* <h4 className="ft-medium fs-md">Non Vegetarion Burger</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$60</h5></div> */}
                             {/* </div>*/}
                            </div>
                          </div>
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-5.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                             {/* <div className="Goodup-sng-menu-caption">
                                {/* <h4 className="ft-medium fs-md">Kadhai Paneer &amp; Pee</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$120</h5></div> */}
                             {/* </div>*/}
                            </div>
                          </div>
                          {/* Single Menu */}
                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src="assets/img/m-6.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              {/*<div className="Goodup-sng-menu-caption">
                                {/* <h4 className="ft-medium fs-md">Crispy Chicken Muskio</h4> */}
                                {/* <div className="lkji-oiyt"><span>Start From</span> <h5 className="theme-cl ft-bold">$99</h5></div> */}
                             {/* </div> */}
                            </div>
                          </div>
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
                 
                     
                     
                          
                            <ReactPlayer className='rounded' 
                                url={"./assets/vid-9.mp4"}
                                controls={true}
                                playing={false}
                                width={"100%"}
                                height={"100%"}
                                borderRadius={'10px'}
                                
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
                <div className="bg-white rounded mb-4">
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
                </div>
                {/* Recommended Reviews */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
                      <div className="reviews-comments-wrap">
                        {/* reviews-comments-item */}
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="assets/img/t-1.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Kayla E. Claxton</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1" />
                                27 Oct 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1" />
                              San Francisco, USA
                            </span>
                            <div className="listing-rating high">
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                            </div>
                            <div className="clearfix" />
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            {/* <div className="pull-left reviews-reaction">
                            <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                            <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                            <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                          </div> */}
                          </div>
                        </div>
                        {/*reviews-comments-item end*/}
                        {/* reviews-comments-item */}
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="assets/img/t-2.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Amy M. Taylor</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1" />2 Nov
                                May 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1" />
                              Liverpool, London UK
                            </span>
                            <div className="listing-rating mid">
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="clearfix" />
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            {/* <div className="pull-left reviews-reaction">
                            <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                            <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                            <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                          </div> */}
                          </div>
                        </div>
                        {/*reviews-comments-item end*/}
                        {/* reviews-comments-item */}
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="assets/img/t-3.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Susan C. Daggett</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1" />
                                10 Nov 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1" />
                              Denver, United State
                            </span>
                            <div className="listing-rating good">
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star active" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="clearfix" />
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            {/* <div className="pull-left reviews-reaction">
                            <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                            <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                            <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                          </div> */}
                          </div>
                        </div>
                        {/*reviews-comments-item end*/}
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span className="fas fa-arrow-circle-right" />
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              18
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span className="fas fa-arrow-circle-right" />
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location & Hours */}
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Location &amp; Hours</h5>
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="list-map-lot">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0148908503734!2d80.97350361499701!3d26.871267983145383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a9f6d1727%3A0xb87eabf63f7e4cee!2sCafe%20Repertwahr!5e0!3m2!1sen!2sin!4v1649059491407!5m2!1sen!2sin"
                                width="100%"
                                height={250}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                            </div>
                            <div className="list-map-capt">
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
                            </div>
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
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                {/* <div className="jb-apply-form bg-white rounded py-4 px-4 box-static mb-4">
                <h4 className="ft-bold mb-1">Order Food</h4>
                <div className="Goodup-09kjh">
                  <ul>
                    <li>$0.99+<span>delivery fee</span></li>
                    <li>$0<span>min</span></li>
                    <li>35-45<span>mins</span></li>
                  </ul>
                </div>
                <form className="_apply_form_form">
                  <div className="form-group">
                    <div className="side-search-item">
                      <span className="search-tag"><i className="lni lni-map-marker" /></span>
                      <input type="text" className="form-control b-0 ps-2" placeholder="Enter delivery address" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-md rounded theme-bg text-light ft-medium fs-sm full-width">Start Your Order</button>
                  </div>									
                </form>
              </div> */}

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
                            <p>https://www.Boricua.com/</p>
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
                            <p>(xxx) xxx xxx xxx</p>
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
                            <p>2919 N Flores St San Antonio, TX 78212</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="row g-3 mb-3">
                <div className="col-4"><a href="javascript:void(0);" className="adv-btn full-width"><i className="fas fa-camera" />Add Phoos</a></div>
                <div className="col-4"><a href="javascript:void(0);" className="adv-btn full-width"><i className="fas fa-share" />Share</a></div>
                <div className="col-4"><a href="javascript:void(0);" className="adv-btn full-width"><i className="fas fa-heart" />Save</a></div>
              </div> */}
              </div>
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

export default Singlelisting;
