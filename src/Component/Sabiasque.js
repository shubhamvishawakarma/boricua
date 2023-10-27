import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";
const Sabiasque = () => {
  const [education, seteducation] = useState([]);
  let token = secureLocalStorage.getItem("token");
  let userid = secureLocalStorage.getItem("_id");

  useEffect(() => {
    educational();
  }, []);

  const educational = () => {
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
      .post(`${apiurl[0].apiUrl}React/get_r_sabias`, data, options)
      .then((res) => {
        seteducation(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };

  return (
    <section className="gray py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12"></div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h2 className="ft-bold">Sabias Que</h2>
            </div>
            <div className="row justify-content-left gx-3">
              {education.map((list) => {
                return (
                  <div
                    onClick={() => {
                      secureLocalStorage.setItem("sabias", list?.id);
                    }}
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                  >
                    <div className="Goodup-grid-wrap">
                      <div className="Goodup-grid-upper">
                        {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                        {/* <div className="Goodup-pos ab-left">
                    <div className="Goodup-status open me-2">Open</div>
                    <div className="Goodup-featured-tag">Featured</div>
                  </div> */}
                        <div className="Goodup-grid-thumb">
                          <a
                            href="/sabiasdetails"
                            className="d-block text-center m-auto"
                          >
                            <img
                              src={
                                `${apiurl[0].apiUrl}assets/bori_images/event/` +
                                list?.image
                              }
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="Goodup-grid-fl-wrap">
                        <div className="Goodup-caption px-3 py-2">
                          {/* <div className="Goodup-author"><a href="/author"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></a></div> */}
                          {/* <div className="Goodup-cates"><a href="/educationaldetails">Wedding</a></div> */}
                          <h4 className="mb-0 ft-medium medium">
                            <a
                              href="/sabiasdetails"
                              className="text-dark fs-md"
                            >
                              {list?.title}
                            </a>
                          </h4>
                          {/* <div className="Goodup-middle-caption mt-3">
                      <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Liverpool, London UK</div>
                       <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 795 4526</div> 
                    </div> */}
                        </div>
                        {/* <div className="Goodup-grid-footer py-3 px-3">
                    <div className="Goodup-ft-first">
                      <div className="Goodup-rating">
                        <div className="Goodup-pr-average high">4.3</div>
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                   
                    </div>
                    
                  </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* /row */}
            {/* <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span className="fas fa-arrow-circle-right" />
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">18</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span className="fas fa-arrow-circle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sabiasque;
