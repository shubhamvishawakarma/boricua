import ReactPlayer from "react-player";
import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { useState, useEffect } from "react";
function Singlelisting() {
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

  const [dayspecialdetails, setdayspecialdetails] = useState([]);
  const [avilablity, setavilablity] = useState([]);
  const [checkin, setcheckin] = useState([]);
  const [getratingcomment, setgetratingcomment] = useState([]);

  let listingidd = secureLocalStorage.getItem("listingserachid");
  useEffect(() => {
    dayspecialdetailss();
  }, []);

  const dayspecialdetailss = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let listingidd = secureLocalStorage.getItem("listingserachid");

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
    let listingidd = secureLocalStorage.getItem("listingserachid");

    const data = JSON.stringify({
      listing_id: listingidd,
    });

    axios
      .post(
        `${apiurl[0].apiUrl}React/get_listing_availability_react`,
        data,
        options
      )
      .then((res) => {
        setavilablity(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
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
    let listingidd = secureLocalStorage.getItem("listingid");

    const data = JSON.stringify({
      listing_id: listingidd,
    });

    axios
      .post(
        `${apiurl[0].apiUrl}React/get_check_in_listing_react`,
        data,
        options
      )
      .then((res) => {
        setcheckin(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };

  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const Navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [lists, setLists] = useState([]);
  const [selectedProfileImage, setSelectedProfileImage] = useState([]);
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleProfileImageSelect = (event) => {
    setSelectedProfileImage(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tokenn = secureLocalStorage.getItem("token");

    const idddd = secureLocalStorage.getItem("_id");
    const listingidd = secureLocalStorage.getItem("listingserachid");
    const formData = new FormData();

    for (let i = 0; i < selectedProfileImage.length; i++) {
      formData.append("image[]", selectedProfileImage[i]);
    }

    formData.append("listing_id", listingidd);
    formData.append("user_id", idddd);
    formData.append("rating", password);
    formData.append("description", phone);
    formData.append("type", type);

    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/add_review`,
        formData,
        {
          headers: {
            Authorization: `${tokenn}`,
          },
        }
      );

      window.location.reload(navigate("/singlelisting"));
      //  Navigate("/singlelisting");
    } catch (error) {}
  };

  const handleRatingClick = (rating) => {
    setPassword(rating);
  };

  useEffect(() => {
    getlistingratingcomment();
  }, []);

  const getlistingratingcomment = () => {
    const tokenn = secureLocalStorage.getItem("token");

    let listingidd = secureLocalStorage.getItem("listingserachid");
    let idddd = secureLocalStorage.getItem("_id");
    const data = {
      user_id: idddd,
      listing_id: listingidd,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/get_listing_rating_comment_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setgetratingcomment(response.data.data);
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
        <Header />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* ======================= Searchbar Banner ======================== */}
        <div className="featured-slick">
        <div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
          <div className="">
            <Slider {...settings}>
              {eventImages?.map((items, index) => {
                return (
                  <div className="dlf-flew" key={index}>
                    <img
                      className="img-fluid mx-auto"
                      src={`${apiurl[0].apiUrl}assets/bori_images/listing/${items?.images}`}
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
              href="/singlelistingimages"
              className="btn bg-white text-dark ft-medium rounded"
            >
              See More Photos
            </a>
          </div>
          <div className="Goodup-ops-bhri">
            <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
              <div className="Goodup-lkp-thumb">
                {/* <img
                  src="assets/img/burger-king.png"
                  className="img-fluid"
                  width={90}
                  alt=""
                /> */}
                <img
                  style={{ borderRadius: "24px" }}
                  src={`${apiurl[0].apiUrl}assets/bori_images/listing/${dayspecialdetails?.business_logo}`}
                  className="img-fluid"
                  width={90}
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
                        <p style={{ textAlign: "justify" }}>
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
                        <p style={{ textAlign: "justify" }}>
                          {dayspecialdetails?.about}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Listing Detail'S</h5>
                      <div className="d-block mt-3">
                        <div className="row g-3">
                          {menuImages?.map((items, index) => {
                            return (
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="Goodup-sng-menu">
                                  <div className="Goodup-sng-menu-thumb">
                                    <img
                                      src={`${apiurl[0].apiUrl}assets/bori_images/listing/${items?.menu}`}
                                      className=""
                                      width={"100%"}
                                      height={"166px"}
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

                <div className="bg-white rounded mb-4"></div>
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

                            <a
                              href={`https://www.google.com/maps/dir//${lat},${lon}/@${lat},${lon},16z?entry=ttu`}
                            >
                              <p>{dayspecialdetails?.vendor_address}</p>
                            </a>

                            {/* <a href="https://www.google.com/maps/dir//{lat},{lon}/@{lat},{lon},16z?entry=ttu">
                            <p >{dayspecialdetails?.vendor_address} </p></a> */}
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
                          {checkin?.map((check) => {
                            return (
                              <li>
                                <div className="Goodup-afl-pace">
                                  <img
                                    src="assets/img/verify.svg"
                                    className
                                    alt=""
                                  />
                                  <span>{check?.name}</span>
                                </div>
                              </li>
                            );
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
                      <h6 className="ft-bold fs-lg">
                        Reviews-{dayspecialdetails?.rating_count}{" "}
                        <i
                          style={{ color: "#ff9800" }}
                          class="fas fa-star active "
                        ></i>
                        {dayspecialdetails?.rating}{" "}
                      </h6>

                      <div className="reviews-comments-wrap">
                        {/* reviews-comments-item */}

                        {getratingcomment?.map((items) => {
                          return (
                            <div className="reviews-comments-item">
                              <div className="review-comments-avatar">
                                <img
                                  src={
                                    `${apiurl[0].apiUrl}assets/bori_images/users/` +
                                    items?.user_image
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                                <img
                                  src={
                                    `${apiurl[0].apiUrl}assets/bori_images/users/` +
                                    items?.user_image
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="reviews-comments-item-text">
                                <h4>
                                  <a href="#">{items?.first_name}</a>

                                  <span className="reviews-comments-item-date">
                                    <i className="ti-calendar theme-cl me-1" />
                                    {items?.rating_time}
                                  </span>
                                </h4>
                                {/* <span className="agd-location">
                                  <i className="lni lni-map-marker me-1" />
                                  San Francisco, USA
                                </span> */}

                                <div className="listing-rating high">
                                  {items?.image?.map((imgg) => {
                                    return (
                                      <img
                                        style={{
                                          height: "100px",
                                          width: "100px",
                                          borderRadius: "10px",
                                          padding: "2px",
                                        }}
                                        src={
                                          `https://logicaltest.website/Anju/Boricua/assets/bori_images/rating/` +
                                          imgg
                                        }
                                        className="img-fluid"
                                        alt=""
                                      />
                                    );
                                  })}

                                  {/* <i className="fas fa-star active" />
                                  <i className="fas fa-star active" />
                                  <i className="fas fa-star active" />
                                  <i className="fas fa-star active" />
                                  <i className="fas fa-star active" /> */}
                                </div>
                                <div className="clearfix" />
                                <p>"{items?.description}"</p>
                                {/* <div className="pull-left reviews-reaction">
                                <a href="#" className="comment-like active"><i className="ti-thumb-up" /> 12</a>
                                <a href="#" className="comment-dislike active"><i className="ti-thumb-down" /> 1</a>
                                <a href="#" className="comment-love active"><i className="ti-heart" /> 07</a>
                              </div> */}
                              </div>
                            </div>
                          );
                        })}
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

        <Footer />
        {/* ============================ Footer End ================================== */}
        {/* Rating model */}

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
                      <form onSubmit={handleSubmit}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">Type</label>
                            <select
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              className="form-control rounded"
                            >
                              <option>Choose Type</option>
                              <option> Food</option>
                              <option> Service</option>
                              <option> Ambinace</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group mb-3">
                              <label for="pwd">Give Rating:</label>
                              <div className="rating">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                  <span key={rating}>
                                    <i
                                      className={` fa-star ${
                                        rating <= password
                                          ? "fas fa-star"
                                          : "fa-star-o"
                                      }`}
                                      aria-hidden="true"
                                      style={{
                                        color: "gold",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleRatingClick(rating)}
                                    ></i>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">
                              Images
                            </label>
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleProfileImageSelect}
                              className="form-control rounded"
                              placeholder="Choose images*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">
                              Description
                            </label>
                            <textarea
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="form-control rounded ht-140"
                              placeholder="Description"
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
