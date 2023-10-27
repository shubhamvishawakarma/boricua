import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Lesprasanto = () => {
  const [lespresento, setlespresento] = useState([]);
  let token = secureLocalStorage.getItem("token");
  let userid = secureLocalStorage.getItem("_id");

  useEffect(() => {
    gethistory();
  }, []);

  const gethistory = async () => {
    const idddd = secureLocalStorage.getItem("_id");

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

    try {
      const res = await axios.post(
        `${apiurl[0].apiUrl}React/les_presento`,
        data,
        options
      );
      setlespresento(res.data.data);
    } catch (err) {
      //console.error("API Error:", err);
    }
  };
  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              {/* <h6 className="theme-cl mb-0">Les Presento</h6> */}
              <h2 className="ft-bold">Les Presento</h2>
              {/* <h6 className="theme-cl mb-0">Les Presento</h6>
            <h2 className="ft-bold">Explore By <span className="theme-cl">Top Locations</span></h2> */}
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row justify-content-left">
          {lespresento.map((list) => {
            return (
              <div
                onClick={() => {
                  secureLocalStorage.setItem("lessid", list.id);
                }}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
              >
                <div className="Goodup-img-location-wrap">
                  <div className="Goodup-img-location-thumb">
                    <a href="/lessdetails">
                      <img
                        src={
                          `${apiurl[0].apiUrl}assets/bori_images/event/` +
                          list?.present_image
                        }
                        className="img-fluid imgffluid"
                        alt=""
                      />
                      {/* <img height={'90px'} width={'90'}  src={
                            `${apiurl[0].apiUrl}assets/bori_images/category/` +
                            list?.category_image
                          } /> */}
                    </a>
                  </div>
                  <div className="Goodup-img-location-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      {list?.present_name}
                    </h4>
                    <a href="/lessdetails" className="Goodup-cat-arrow">
                      <i className="lni lni-arrow-right-circle" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* /row */}
      </div>
    </section>
  );
};

export default Lesprasanto;
