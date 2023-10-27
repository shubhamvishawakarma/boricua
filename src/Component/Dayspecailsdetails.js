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
function Dayspecialdetails() {

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


  const [dayspecialdetails, setdayspecialdetails] = useState([]);
  const [avilablity , setavilablity]=useState([]);
  const [checkin ,setcheckin]=useState([]);
  
  let listingidd=secureLocalStorage.getItem("listingid")
  useEffect(() => {
    dayspecialdetailss();
  }, []);

  const dayspecialdetailss = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let listingidd=secureLocalStorage.getItem("listingid")

    const data = JSON.stringify({
        listing_id: listingidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/listing_details_react`, data, options)
      .then((res) => {
        setdayspecialdetails(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };


  const lat = dayspecialdetails?.vendor_lat;
  const lon = dayspecialdetails?.vendor_long;
  const zoom = 16; 

  const eventImages = dayspecialdetails?.listing_images;
  const menuImages = dayspecialdetails?.menu;




   

  useEffect(() => {
    listingavilablity();
  }, []);

  const listingavilablity = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let listingidd=secureLocalStorage.getItem("listingid")

    const data = JSON.stringify({
      listing_id: listingidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/get_listing_availability_react`, data, options)
      .then((res) => {
        setavilablity(res.data.data);
      })
      .catch((err) => {
       
      });
  };



  useEffect(() => {
    getcheckinlist();
  }, []);

  const getcheckinlist = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let listingidd=secureLocalStorage.getItem("listingid")

    const data = JSON.stringify({
      listing_id: listingidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/get_check_in_listing_react`, data, options)
      .then((res) => {
        setcheckin(res.data.data);
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
        {/* ======================= Searchbar Banner ======================== */}
        <div className="featured-slick">
          <div className="">
           
           
           
          <Slider {...settings}>
                      {eventImages?.map((items, index) => {
                        return (
                          <div className="dlf-flew"  key={index}>
                            
                              <img className="img-fluid mx-auto"
                               
                                src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/listing/${items?.images}`}
                                
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
              href="/dayspecailimages"
              className="btn bg-white text-dark ft-medium rounded"
            >
              See More Photos
            </a>
          </div>
          <div className="Goodup-ops-bhri">
            <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
              <div className="Goodup-lkp-thumb">
                <img
                  src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/listing/${dayspecialdetails?.business_logo}`}
                  className="img-fluid"
                  width={90} style={{borderRadius:'24px'}}
                  alt=""
                />
              </div>
              <div className="Goodup-lkp-caption ps-3">
                <div className="Goodup-lkp-title">
                  <h1 className="text-light mb-0 ft-bold">
                   {dayspecialdetails?.business_name}
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
                       {dayspecialdetails?.vendor_address}
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="d-block mt-1">
                  <div className="list-lioe">
                    <div className="list-lioe-single">
                      <span className="ft-medium text-danger">Date & Time</span>
                      <span className="text-light ft-medium ms-2">
                        {dayspecialdetails?.listing_date} 11:00 AM - 12:00 AM
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
                        <p style={{textAlign:'justify'}}>
                          {dayspecialdetails?.discription}
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
                        <p style={{textAlign:'justify'}}>
                          {dayspecialdetails?.about}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Specails Detail'S</h5>
                      <div className="d-block mt-3">
                        <div className="row g-3">
                          

                        {menuImages?.map((items, index) => {
                        return (

                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img
                                  src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/listing/${items?.menu}`}
                                  className="" width={'100%'} height={'166px'}
                                  alt=""
                                />
                              </div>
                           
                            </div>
                          </div>
                         );
                        })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




              
                <div className="bg-white rounded mb-4">
              
                </div>
               
               
              </div>
              {/* Sidebar */}
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
                            <p>{dayspecialdetails?.website}</p>
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
                            <p>{dayspecialdetails?.vendor_contact}</p>
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
                            <p>{dayspecialdetails?.vendor_address}</p></a>
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
               
               





              



                {/* <div className="sep-devider " /> */}
                <div className="bg-white rounded mb-0">
                <div className="jbd-01 px-3 py-2">
                    <div className="jbd-details mb-0">
                      {/* <h5 className="ft-bold fs-lg">Business Menu</h5> */}
                      <div className="d-block mt-2">
                        <div className="row g-3">
                 
                     
                     
                          
                           

<ReactPlayer
                            className="rounded"
                            url={
                              `${apiurl[0].apiUrl}assets/bori_images/listing/` +
                              dayspecialdetails?.vedio
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
              

                <div className="bg-white rounded mb-4">
        <div className="jbd-01 px-4 py-4">
          <div className="jbd-details mb-4">
            <h5 className="ft-bold fs-lg">Amenities and More</h5>
            <div className="Goodup-all-features-list mt-3">
              <ul>
                {checkin?.map((check)=>{
                  return(
                    <li><div className="Goodup-afl-pace"><img src="assets/img/verify.svg" className alt="" /><span>{check?.name}</span></div></li>
                  )
                })}
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>

















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
                                  <td>{avilablity?.Monday}</td>
                                  <td className="text-success">Open now</td>
                                </tr>
                                <tr>
                                  <td>Tue</td>
                                  <td>{avilablity?.Tuesday}</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Wed</td>
                                  <td>{avilablity?.Wednesday}</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Thu</td>
                                  <td>{avilablity?.Thursday}</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Fri</td>
                                  <td>{avilablity?.Friday}</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Sat</td>
                                  <td>{avilablity?.Saturday}</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Sun</td>
                                  <td>{avilablity?.Sunday}</td>
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

export default Dayspecialdetails;
