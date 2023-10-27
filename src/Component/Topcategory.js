import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";

const Topcategory = () => {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    categoryget();
  }, []);

  const categoryget = () => {
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
      .post(`${apiurl[0].apiUrl}React/category`, data, options)
      .then((res) => {
        setcategory(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };

  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">Popular Categories</h6>
              <h2 className="ft-bold">Browse Top Categories</h2>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row align-items-left">
          {category.slice(0, 12).map((list) => {
            return (
              <div
                onClick={() => {
                  secureLocalStorage.setItem("catergoryid", list.id);
                }}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
              >
                <div className="cats-wrap text-center">
                  <a href="/subcategory" className="Goodup-catg-wrap">
                    {/* <div class="Goodup-catg-city">26 Cities</div> */}
                    <div className="catg-icon">
                      <img
                        height={"50px"}
                        width={"50"}
                        style={{ marginBottom: "30px" }}
                        src={
                          `${apiurl[0].apiUrl}assets/bori_images/category/` +
                          list?.category_image
                        }
                      />

                      {/* <i className="fas fa-utensils" /> */}
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        {list?.category_name.slice(0, 18)}
                      </h4>
                      {/* <span className="text-muted">172 Listings</span> */}
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ float: "right" }} className="btn-container">
          <a href="/morecategory">
            <button className="btn btn-danger" id="">
              More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Topcategory;
