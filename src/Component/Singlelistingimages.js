import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import secureLocalStorage from "react-secure-storage";
import apiurl from "./config";
import axios from "axios";

const Singlelistingimages = () => {
  const [dayspecialdetails, setdayspecialdetails] = useState([]);

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

  const eventImages = dayspecialdetails?.listing_images;
  const menuImages = dayspecialdetails?.menu;

  return (
    <div>
      <Header />
      <div className="bg-white rounded mb-4">
        <div className="jbd-01 px-4 py-4">
          <div className="jbd-details mb-4">
            <h5 className="ft-bold fs-lg">Images</h5>
            <div className="d-block mt-3">
              <div className="row g-3">
                {menuImages?.map((items, index) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="Goodup-sng-menu">
                        <div className="Goodup-sng-menu-thumb">
                          <img
                            width={"100%"}
                            height={"220px"}
                            src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/listing/${items?.menu}`}
                            className=""
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
          <div style={{ float: "right" }} className="btn-container">
            <a href="/singlelisting">
              <button className="btn btn-danger" id="">
                Back
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singlelistingimages;
