import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Job = () => {
  const [educationall, seteducationall] = useState([]);
  let token = secureLocalStorage.getItem("token");
  let userid = secureLocalStorage.getItem("_id");

  useEffect(() => {
    volunteerinn();
  }, []);

  const volunteerinn = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let lati = secureLocalStorage.getItem("latitude");
    let longi = secureLocalStorage.getItem("longitude");
    const data = JSON.stringify({
      lat: lati ? lati : "",
      long: longi ? longi : "",
    });

    axios
      .post(`${apiurl[0].apiUrl}React/educational`, data, options)
      .then((res) => {
        seteducationall(res.data.data);
      })
      .catch((err) => {
        
      });
  };
  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              {/* <h6 className="theme-cl mb-0">Featured Listings</h6> */}
              <h2 className="ft-bold">Employment Opportunities</h2>
            </div>
          </div>
        </div>
        {/* row */}
        <div
          className="tab-pane fade active show"
          id="jobs"
          role="tabpanel"
          aria-labelledby="jobs-tab"
        >
          <div className="row justify-content-left">
            {/* Single Jobs */}

            {educationall.map((list) => {
              return (
                <div
                  onClick={() => {
                    secureLocalStorage.setItem("educationalid", list.id);
                  }}
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger">
                        <input type="checkbox" />
                        <i className="fa fa-bookmark" />
                      </label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img
                            width={"63px"}
                            height={"63px"}
                            style={{ borderRadius: "31px" }}
                            src={
                              `${apiurl[0].apiUrl}assets/bori_images/event/` +
                              list?.education_image
                            }
                            className=""
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title">
                          <a href="/jobdetails">{list?.educational_name}</a>
                        </h4>
                        <div className="_times_jb">$70k - 80k</div>
                        <div className="_jb_types fulltime_lite">Full Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">Just now</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* /row */}
      </div>
    </section>
  );
};

export default Job;
