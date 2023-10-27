import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Eventmain = () => {
  const [event, setevent] = useState([]);
  let token = secureLocalStorage.getItem("token");
  let userid = secureLocalStorage.getItem("_id");

  useEffect(() => {
    eventt();
  }, []);

  const eventt = () => {
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
      .post(`${apiurl[0].apiUrl}React/event`, data, options)
      .then((res) => {
        setevent(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };
  return (
    <div>
      <section className="space">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="m-spaced">
                <div className="position-relative">
                  <h2 className="ft-bold mb-3">Events</h2>
                  <h4 className="ft-bold mb-3">
                    Is your business on Boricua Directory?
                  </h4>
                  <p className="mb-3">
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                    Register for upcoming business events.
                  </p>
                  <p className="mb-3">
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                    Watch on-demand videos.
                  </p>
                  <p className="mb-3">
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                    Learn from business owners, industry experts, and more
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/event.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= About Start ============================ */}
      {/* ======================= Blog Start ============================ */}
      <section className="space min pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h2 className="ft-bold">Events</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-left">
            {/* Single Item */}

            {event.map((list) => {
              return (
                <div
                  onClick={() => {
                    secureLocalStorage.setItem("eventid", list?.id);
                  }}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <a href="/eventdetails">
                        <img
                          src={
                            `${apiurl[0].apiUrl}assets/bori_images/event/` +
                            list?.event_image
                          }
                          className=""
                          width={"100%"}
                          height={"166px"}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="gup_blg_grid_caption">
                      <div className="blg_title">
                        <h4>
                          <a href="/eventdetails">{list?.event_name}</a>
                        </h4>
                      </div>
                    </div>
                    {/* <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                           <div className="crs_tutor">
                            <div className="crs_tutor_thumb"><a href="javascript:void(0);">Watch Now</a></div>
                          </div> 
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventmain;
