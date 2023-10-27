import { Link } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import apiurl from "./config";
import { useState } from "react";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

const Jobdetails = () => {
  const [educaltiondetails, seteducaltiondetails] = useState([]);

  let educationaliddetails = secureLocalStorage.getItem("educationalid");
  useEffect(() => {
    singlelistingg();
  }, []);

  const singlelistingg = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let educationaliddetails = secureLocalStorage.getItem("educationalid");

    const data = JSON.stringify({
      job_id: educationaliddetails,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/Job_oper_details_react`, data, options)
      .then((res) => {
        seteducaltiondetails(res.data.data);
      })
      .catch((err) => {

      });
  };



  const lat = educaltiondetails?.job_lat;
  const lon = educaltiondetails?.job_long;

  return (
    <div>
      <Header />
      <section className="middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <div className="d-block mb-4">
                <a href="/" className="btn btn-md gray ft-medium rounded">
                  <i className="ti-back-left mr-1" />
                  Back
                </a>
              </div>
              <div className="d-block mb-4">
                <div className="svd-01 d-flex align-items-center">
                  <div className="jbd-flex d-flex align-items-center justify-content-start">
                    <div className="jbd-01-thumb">
                      <img
                        src="assets/img/c-1.png"
                        className="img-fluid"
                        width={90}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="jbd-01-caption ps-3">
                    <div className="tbd-title">
                      <div className="ft-medium medium">
                        <span>InfosysX</span>
                      </div>
                      <h4 className="mb-3 ft-medium fs-lg">
                        {educaltiondetails?.job_name}
                        <img
                          src="assets/img/verify.svg"
                          className="ms-1"
                          width={12}
                          alt=""
                        />
                      </h4>
                    </div>
                    <div className="jbd-list mb-2">
                      <span className="px-2 py-1 rounded theme-cl theme-bg-light me-2">
                        <i className="lni lni-briefcase me-1" />
                        Full Time
                      </span>
                      <span>
                        <i className="lni lni-map-marker mr-1" />{" "}
                        {educaltiondetails?.job_location}
                      </span>
                      <span className="px-2 py-1 rounded text-warning bg-light-warning ms-2">
                        <i className="lni lni-star me-1" />
                        Featured
                      </span>
                      <span className="rounded ms-2">
                        <i className="lni lni-money-protection me-1" />
                        $85k - 100k PA.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded mb-4">
                <div className="jbd-01">
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Job description</h5>
                    <p>{educaltiondetails?.job_description}</p>
                  </div>
                  <div className="jbd-details mb-3">
                    <h5>Requirements:</h5>
                    <div className="position-relative row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Strong core PHP Hands on experience.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Strong Expertise in CodeIgniter Framework .
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Understanding of MVC design pattern.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Expertise in PHP, MVC Frameworks and good
                              technology exposure of Codeigniter .
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Basic understanding of front-end technologies,
                              such as JavaScript, HTML5, and CSS3
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Good knowledge of relational databases, version
                              control tools and of developing web services.
                            </h6>
                          </div>
                        </div>
                        <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle bg-light-danger theme-cl p-1 small d-flex align-items-center justify-content-center">
                              <i className="fas fa-check small" />
                            </div>
                            <h6 className="mb-0 ms-3 text-muted fs-sm">
                              Proficient understanding of code versioning tools,
                              such as Git.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-4">
                    <h5 className="ft-medium fs-md">Skills Required</h5>
                    <div className="klop-dfgy">
                      <div className="details ft-medium">
                        <label className="text-muted">Role</label>
                        <span className="text-dark">
                          Database Architect / Designer
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Industry Type</label>
                        <span className="text-dark">
                          Advertising &amp; Marketing
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Functional Area</label>
                        <span className="text-dark">
                          Engineering - Software
                        </span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Employment Type</label>
                        <span className="text-dark">Full Time, Permanent</span>
                      </div>
                      <div className="details ft-medium">
                        <label className="text-muted">Role Category</label>
                        <span className="text-dark">
                          DBA / Data warehousing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="jbd-details mb-1">
                    <h5 className="ft-medium fs-md">Key Skills</h5>
                    <ul className="p-0 lkoi-skill text-left">
                      <li>
                        <span>Joomla</span>
                      </li>
                      <li>
                        <span>WordPress</span>
                      </li>
                      <li>
                        <span>Javascript</span>
                      </li>
                      <li>
                        <span>PHP</span>
                      </li>
                      <li>
                        <span>HTML5</span>
                      </li>
                      <li>
                        <span>MS SQL</span>
                      </li>
                      <li>
                        <span>SQL Development</span>
                      </li>
                      <li>
                        <span>Dynamod</span>
                      </li>
                      <li>
                        <span>Database</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="jbd-02 mt-4">
                  <div className="jbd-02-flex d-flex align-items-center justify-content-between">
                    <div className="jbl_button mb-2">
                      <a
                        href="#"
                        className="btn btn-md rounded gray fs-sm ft-medium me-2"
                      >
                        Save This Job
                      </a>
                      <a
                        href="#"
                        className="btn btn-md rounded theme-bg text-light fs-sm ft-medium"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              {/* Business Inof */}
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
                          <p>{educaltiondetails?.job_contact}</p>
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
                            <p>{educaltiondetails?.job_location}</p>
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

      <Footer />

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
                            <label className="ft-medium small mb-1">Name</label>
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
    </div>
  );
};

export default Jobdetails;
