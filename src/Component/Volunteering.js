import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Volunteering = () => {
  const [volunteerin, setvolunteerin] = useState([]);
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
      .post(`${apiurl[0].apiUrl}React/volunteering`, data, options)
      .then((res) => {
        setvolunteerin(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };
  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-4">
              {/* <h6 className="theme-cl mb-0">Latest News</h6> */}
              <h2 className="ft-bold">Volunteering Opportunities</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-left">
          {/* Single Item */}

          {volunteerin.map((list) => {
            return (
              <div
                onClick={() => {
                  secureLocalStorage.setItem("volunteringid", list.id);
                }}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div className="gup_blg_grid_box">
                  <div className="gup_blg_grid_thumb">
                    <a href="/volunteringdetails">
                      <img
                        src={
                          `${apiurl[0].apiUrl}assets/bori_images/event/` +
                          list?.vol_image
                        }
                        height={"156px"}
                        width={"100%"}
                        className=""
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="gup_blg_grid_caption">
                    {/* <div className="blg_tag"><span>Marketing</span></div> */}
                    <div className="blg_title">
                      <h4>
                        <a href="/volunteringdetails">{list?.vol_name}</a>
                      </h4>
                    </div>
                    {/* <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div> */}
                  </div>
                  {/* <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-2.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
  );
};

export default Volunteering;
