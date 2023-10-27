import React, { useEffect, useState } from "react";

import Headerbusiness from "./Headerbusiness";
import apiurl from "../Component/config";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Dashboardimage from "../Component/Dashboardimage";

const Bmylisting = () => {
  const [vendorelisting, setVendorelisting] = useState([]);

  const [avilablity, setavilablity] = useState([]);
  const [getratingcomment, setgetratingcomment] = useState([]);
  const [getcheckinuncheck, setgetcheckinuncheck] = useState([]);

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
    autoplay: true,
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

  useEffect(() => {
    getvendorlisting();
  });

  const getvendorlisting = () => {
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      vendor_id: idddd,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/get_vendor_listing_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setVendorelisting(response.data.data);
      })
      .catch((error) => {});
  };

  const eventImages = vendorelisting?.listing_images;
  const menuImages = vendorelisting?.menu;

  const lat = vendorelisting?.vendor_details?.vendor_lat;
  const lon = vendorelisting?.vendor_details?.vendor_long;
  const zoom = 16;

  const [selectedProfileImage, setSelectedProfileImage] = useState([]);
  const [selectedProfileImagelisting, setSelectedProfileImagelisting] =
    useState([]);
  const mylistingid = secureLocalStorage.getItem("mylistingid");

  const handleProfileImageSelect = (event) => {
    setSelectedProfileImage(event.target.files);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const formData = new FormData();

    for (let i = 0; i < selectedProfileImage.length; i++) {
      formData.append("menu[]", selectedProfileImage[i]);
    }

    formData.append("listing_id", mylistingid);
    formData.append("vendor_id", idddd);

    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/add_more_listing_menu`,
        formData,
        {
          headers: {
            Authorization: `${tokenn}`,
          },
        }
      );

      setSelectedProfileImage([]);

      getvendorlisting();
    } catch (error) {}
  };

  const handleProfileImageSelectlisting = (event) => {
    setSelectedProfileImagelisting(event.target.files);
  };

  const handleFormSubmitlisting = async (event) => {
    event.preventDefault();
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const formData = new FormData();

    for (let i = 0; i < selectedProfileImagelisting.length; i++) {
      formData.append("listing_images[]", selectedProfileImagelisting[i]);
    }

    formData.append("listing_id", mylistingid);
    formData.append("vendor_id", idddd);

    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/add_more_listing_images`,
        formData,
        {
          headers: {
            Authorization: `${tokenn}`,
          },
        }
      );

      setSelectedProfileImagelisting([]);

      getvendorlisting();
    } catch (error) {}
  };

  useEffect(() => {
    getlistingratingcomment();
  }, []);

  const getlistingratingcomment = () => {
    const tokenn = secureLocalStorage.getItem("token");

    let idddd = secureLocalStorage.getItem("_id");
    const data = {
      user_id: idddd,
      listing_id: mylistingid,
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

  const [mondaystart, setmondaystart] = useState("");
  const [mondayend, setmondayend] = useState("");

  const [tuesdaystart, settuesdaystart] = useState("");
  const [tuesdayend, settuesdayend] = useState("");

  const [wednesdaystart, setwednesdaystart] = useState("");
  const [wednesdayend, setwednesdayend] = useState("");

  const [thursdaystart, setthursdaystart] = useState("");
  const [thursdayend, setthursdayend] = useState("");

  const [fridaystart, setfridaystart] = useState("");
  const [fridayend, setfridayend] = useState("");

  const [saturdaystart, setsaturdaystart] = useState("");
  const [saturdayend, setsaturdayend] = useState("");

  const [sundaystart, setsundaystart] = useState("");
  const [sundayend, setsundayend] = useState("");

  const handleavialablitiy = async (evt) => {
    evt.preventDefault();
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      listing_id: mylistingid,
      vendor_id: idddd,

      Monday:
        mondaystart && mondayend ? `${mondaystart} To ${mondayend}` : "Closed",
      Tuesday:
        tuesdaystart && tuesdayend
          ? `${tuesdaystart} To ${tuesdayend}`
          : "Closed",

      Wednesday:
        wednesdaystart && wednesdayend
          ? `${wednesdaystart} To ${wednesdayend}`
          : "Closed",
      Thursday:
        thursdaystart && thursdayend
          ? `${thursdaystart} To ${thursdayend}`
          : "Closed",
      Friday:
        fridaystart && fridayend ? `${fridaystart} To ${fridayend}` : "Closed",
      Saturday:
        saturdaystart && saturdayend
          ? `${saturdaystart} To ${saturdayend}`
          : "Closed",
      Sunday:
        sundaystart && sundayend ? `${sundaystart} To ${sundayend}` : "Closed",
    };

    axios
      .post(`${apiurl[0].apiUrl}React/add_listing_availability_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        listingavilablity();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    listingavilablity();
  }, []);

  const listingavilablity = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };

    const data = JSON.stringify({
      listing_id: mylistingid,
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
    getcheckinuncheckreact();
  }, []);

  const getcheckinuncheckreact = () => {
    const tokenn = secureLocalStorage.getItem("token");

    let idddd = secureLocalStorage.getItem("_id");
    const data = {
      vendor_id: idddd,
      listing_id: mylistingid,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/get_check_in_uncheck_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setgetcheckinuncheck(response.data);
      })
      .catch((error) => {});
  };

  const [selectedCheckIds, setSelectedCheckIds] = useState([]);

  const handleCheckboxChange = (event, id) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCheckIds((prevIds) => [...prevIds, id]);
    } else {
      setSelectedCheckIds((prevIds) =>
        prevIds.filter((checkId) => checkId !== id)
      );
    }
  };

  const updatecheckinlistingreact = () => {
    const tokenn = secureLocalStorage.getItem("token");
    let idddd = secureLocalStorage.getItem("_id");

    const selectedIds = selectedCheckIds;

    const data = {
      vendor_id: idddd,
      listing_id: mylistingid,
      check_in_listing: selectedIds.toString(),
    };

    axios
      .post(`${apiurl[0].apiUrl}React/update_check_in_listing_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setgetcheckinuncheck(response.data);
        getcheckinuncheckreact();
      })
      .catch((error) => {});
  };

  return (
    <div>
      {/* ============================================================== */}
      <div className="preloader" />
      {/* ============================================================== */}

      <div id="main-wrapper">
        {/* Top header  */}

        <Headerbusiness />
        {/* End Navigation */}
        <div className="clearfix" />

        {/* Top header  */}
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

          <div className="goodup-dashboard-content">
            <div className="dashboard-tlbar d-block mb-5">
              <div className="row">
                <div className="colxl-12 col-lg-12 col-md-12">
                  <h1 className="ft-medium">Manage Listings</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li>
                        <a href="#">Home /</a>
                      </li>
                      {/* <li>
                        <a href="#">Dashboard /</a>
                      </li> */}
                      <li>
                        <a href="#" className="theme-cl">
                          Manage Listings
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="dashboard-widg-bar d-block">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md">
                          <i className="fa fa-file-alt me-2 theme-cl fs-sm" />
                          My Listing
                        </h4>
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="dashboard-listing-wraps">
                        {/* Single Listing Item */}
                        <div className="dsd-single-listing-wraps">
                          {menuImages?.map((items, index) => {
                            return (
                              <div className="dsd-single-lst-thumb1">
                                <img
                                  src={`${apiurl[0].apiUrl}assets/bori_images/listing/${items?.menu}`}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            );
                          })}

                          <div className="dsd-single-lst-caption">
                            <div className="dsd-single-lst-title">
                              <h5>
                                {vendorelisting?.vendor_details?.business_name}
                              </h5>
                            </div>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1" />
                              {vendorelisting?.vendor_details?.vendor_address}
                            </span>
                            {/* <div className="Goodup-call">
                              <a href>
                                {" "}
                                <i className="fas fa-phone-alt" />
                                {vendorelisting?.vendor_details?.vendor_contact}
                              </a>
                            </div> */}
                            <div className="ico-content">
                              <div className="Goodup-ft-first">
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
                                  <span className="ft-medium">34 Reviews</span>
                                </div>
                              </div>
                            </div>
                            <div className="dsd-single-lst-footer">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#signup"
                                onClick={() => {
                                  secureLocalStorage.setItem(
                                    "mylistingid",
                                    vendorelisting?.id
                                  );
                                }}
                                href="javascript:void(0);"
                                className="btn btn-edit mr-1"
                              >
                                <i className="fas fa-edit me-1"></i>
                                Menu Image
                              </a>

                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#signup1"
                                onClick={() => {
                                  secureLocalStorage.setItem(
                                    "mylistingid",
                                    vendorelisting?.id
                                  );
                                }}
                                href="javascript:void(0);"
                                className="btn btn-edit mr-1"
                              >
                                <i className="fas fa-edit me-1"></i>
                                Listing Image
                              </a>

                              <a href="/bimages" className="btn btn-delete">
                                <i className="fas fa-eye me-1" />
                                View
                              </a>

                              {/* <a
                                href="javascript:void(0);"
                                className="btn btn-delete"
                              >
                                <i className="fas fa-trash me-1" />
                                Listing-image
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

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
                                            src={`${apiurl[0].apiUrl}assets/bori_images/listing/${items?.images}`}
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
                                  <h5 className="ft-bold fs-lg">
                                    About the Listing
                                  </h5>
                                  <div className="d-block mt-3">
                                    <p style={{ textAlign: "justify" }}>
                                      {vendorelisting?.vendor_details?.about}
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
                            ></div>
                          </div>
                          {/* Sidebar */}
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="jb-apply-form bg-white rounded py-4 px-4 border mb-4">
                              <div className="uli-list-info">
                                <ul>
                                  {/* <a href={vendorelisting?.website} target="_blank" rel="noopener noreferrer">
  
</a>  */}
                                  <a
                                    href={
                                      vendorelisting?.vendor_details?.website
                                    }
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
                                          <p>
                                            {
                                              vendorelisting?.vendor_details
                                                ?.website
                                            }
                                          </p>
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
                                        <p>
                                          {
                                            vendorelisting?.vendor_details
                                              ?.contact
                                          }
                                        </p>
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
                                          <p>
                                            {
                                              vendorelisting?.vendor_details
                                                ?.vendor_address
                                            }
                                          </p>
                                        </a>
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
                                          `${apiurl[0].apiUrl}assets/bori_images/listing/` +
                                          vendorelisting?.vedio
                                        }
                                        controls={true}
                                        playing={false}
                                        width={"100%"}
                                        height={"100%"}
                                        borderRadius={"10px"}
                                        config={{
                                          file: {
                                            attributes: {
                                              controlsList: "nodownload",
                                            },
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
                                  <h5 className="ft-bold fs-lg mb-3">
                                    Location{" "}
                                  </h5>
                                  <div className="Goodup-lot-wrap d-block">
                                    <div className="row g-4">
                                      <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="list-map-lot">
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                                <div className="dashboard-list-wraps-flx">
                                  <h4 className="mb-0 ft-medium fs-md">
                                    <i className="fa fa-clock me-2 theme-cl fs-sm" />
                                    Working Hours
                                  </h4>
                                </div>
                              </div>
                              <table className="table table-borderless">
                                <tbody>
                                  <tr>
                                    <th scope="row">Monday</th>

                                    <td>{avilablity?.Monday}</td>
                                    <td className="text-success">Open now</td>
                                  </tr>
                                  <tr>
                                    <td>Tuesday</td>
                                    <td>{avilablity?.Tuesday}</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Wednesday</td>
                                    <td>{avilablity?.Wednesday}</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Thursday</td>
                                    <td>{avilablity?.Thursday}</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Friday</td>
                                    <td>{avilablity?.Friday}</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Saturday</td>
                                    <td>{avilablity?.Saturday}</td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>Sunday</td>
                                    <td>{avilablity?.Sunday}</td>
                                    <td />
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="dashboard-list-wraps bg-white rounded mb-4">
                              <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                                <div className="dashboard-list-wraps-flx">
                                  <h4 className="mb-0 ft-medium fs-md">
                                    <i className="fa fa-clock me-2 theme-cl fs-sm" />
                                    Working Hours
                                  </h4>
                                </div>
                              </div>
                              <div className="dashboard-list-wraps-body py-3 px-3">
                                <div className="row">
                                  <form onClick={handleavialablitiy}>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Monday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={mondaystart}
                                            onChange={(e) => {
                                              setmondaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={mondayend}
                                            onChange={(e) => {
                                              setmondayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Tuesday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={tuesdaystart}
                                            onChange={(e) => {
                                              settuesdaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={tuesdayend}
                                            onChange={(e) => {
                                              settuesdayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Wednesday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={wednesdaystart}
                                            onChange={(e) => {
                                              setwednesdaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={wednesdayend}
                                            onChange={(e) => {
                                              setwednesdayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Thursday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={thursdaystart}
                                            onChange={(e) => {
                                              setthursdaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={thursdayend}
                                            onChange={(e) => {
                                              setthursdayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Friday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={fridaystart}
                                            onChange={(e) => {
                                              setfridaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={fridayend}
                                            onChange={(e) => {
                                              setfridayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Saturday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={saturdaystart}
                                            onChange={(e) => {
                                              setsaturdaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={saturdayend}
                                            onChange={(e) => {
                                              setsaturdayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <label className="control-label col-lg-2 col-md-2">
                                          Sunday
                                        </label>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={sundaystart}
                                            onChange={(e) => {
                                              setsundaystart(e.target.value);
                                            }}
                                            className="form-control chosen-select"
                                          >
                                            <option>Opening Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-5 col-md-5">
                                          <select
                                            value={sundayend}
                                            onChange={(e) => {
                                              setsundayend(e.target.value);
                                            }}
                                            className="form-control"
                                          >
                                            <option>Closing Time</option>
                                            <option>1 :00 AM</option>
                                            <option>2 :00 AM</option>
                                            <option>3 :00 AM</option>
                                            <option>4 :00 AM</option>
                                            <option>5 :00 AM</option>
                                            <option>6 :00 AM</option>
                                            <option>7 :00 AM</option>
                                            <option>8 :00 AM</option>
                                            <option>9 :00 AM</option>
                                            <option>10 :00 AM</option>
                                            <option>11 :00 AM</option>
                                            <option>12 :00 AM</option>
                                            <option>1 :00 PM</option>
                                            <option>2 :00 PM</option>
                                            <option>3 :00 PM</option>
                                            <option>4 :00 PM</option>
                                            <option>5 :00 PM</option>
                                            <option>6 :00 PM</option>
                                            <option>7 :00 PM</option>
                                            <option>8 :00 PM</option>
                                            <option>9 :00 PM</option>
                                            <option>10 :00 PM</option>
                                            <option>11 :00 PM</option>
                                            <option>12 :00 PM</option>
                                            <option>Closed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group mt-4">
                                      {/* <input id="t24" className="checkbox-custom" name="24-1" type="checkbox" />
                          <label htmlFor="t24" className="checkbox-custom-label">This Business open 7x24</label> */}
                                    </div>

                                    <button
                                      type="submit"
                                      className="btn theme-cl rounded theme-bg-light ft-medium"
                                    >
                                      Submit
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="dashboard-list-wraps bg-white rounded mb-4">
                              <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                                <div className="dashboard-list-wraps-flx">
                                  <h4 className="mb-0 ft-medium fs-md">
                                    <i className="lni lni-coffee-cup me-2 theme-cl fs-sm" />
                                    Amenties Options
                                  </h4>
                                </div>
                              </div>
                              <div className="dashboard-list-wraps-body py-3 px-3">
                                <div className="row">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="Goodup-all-features-list">
                                      {getcheckinuncheck?.data?.map((item) => {
                                        return (
                                          <div className="btn  rounded  ft-medium">
                                            {item?.status == 1 ? item.name : ""}
                                          </div>
                                        );
                                      })}

                                      <ul>
                                        {getcheckinuncheck?.data?.map(
                                          (item) => {
                                            return (
                                              <li key={item.id}>
                                                <input
                                                  className="checkbox-custom"
                                                  type="checkbox"
                                                  id={`checkbox-${item.id}`}
                                                  checked={selectedCheckIds.includes(
                                                    item.id
                                                  )}
                                                  onChange={(e) =>
                                                    handleCheckboxChange(
                                                      e,
                                                      item.id
                                                    )
                                                  }
                                                />
                                                <label
                                                  htmlFor={`checkbox-${item.id}`}
                                                  className="checkbox-custom-label"
                                                >
                                                  {item?.name}
                                                </label>
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>

                                      <button
                                        type="submit"
                                        onClick={updatecheckinlistingreact}
                                        className="btn theme-cl rounded theme-bg-light ft-medium"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded mb-4">
                              <div className="jbd-01 px-4 py-4">
                                <div className="jbd-details mb-4">
                                  <h5 className="ft-bold fs-lg">
                                    Recommended Reviews
                                  </h5>
                                  <h6 className="ft-bold fs-lg">
                                    Reviews-{vendorelisting?.rating_count}{" "}
                                    <i
                                      style={{ color: "#ff9800" }}
                                      class="fas fa-star active "
                                    ></i>
                                    {vendorelisting?.rating}{" "}
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
                                              <a href="#">
                                                {items?.first_name}
                                              </a>

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
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
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

      <div
        className="modal fade"
        id="signup"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signupmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="signupmodal">
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
                <h4 className="m-0 ft-medium">Select Menu Images</h4>
              </div>

              <form onSubmit={handleFormSubmit} className="submit-form">
                <div className="form-group">
                  <label className="mb-1">Choose Images</label>

                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleProfileImageSelect}
                    className="form-control rounded bg-light"
                    placeholder="Choose images*"
                  />
                  <br />

                  <button
                    style={{ width: "100%" }}
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn theme-bg rounded text-light"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signup1"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signupmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="signupmodal">
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
                <h4 className="m-0 ft-medium">Select Listings Images</h4>
              </div>

              <form onSubmit={handleFormSubmitlisting} className="submit-form">
                <div className="form-group">
                  <label className="mb-1">Choose Images</label>

                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleProfileImageSelectlisting}
                    className="form-control rounded bg-light"
                    placeholder="Choose images*"
                  />
                  <br />

                  <button
                    style={{ width: "100%" }}
                    data-bs-dismiss="modal"
                    type="submit"
                    className="btn theme-bg rounded text-light"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmylisting;
