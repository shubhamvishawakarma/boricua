import React, { useEffect, useState } from "react";
import Headerbusiness from "./Headerbusiness";

import secureLocalStorage from "react-secure-storage";

import apiurl from "../Component/config";
import axios from "axios";

const Bimages = () => {
  const [vendorelisting, setVendorelisting] = useState([]);

  let listingidd = secureLocalStorage.getItem("listingserachid");

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

  const deletemenuimages = (item) => {
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      vendor_id: idddd,
      listing_menu_id: item,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/delete_listing_menu_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setVendorelisting(response.data.data);
      })
      .catch((error) => {});
  };

  const deletelistingimages = (item) => {
    const tokenn = secureLocalStorage.getItem("token");
    const idddd = secureLocalStorage.getItem("_id");

    const data = {
      vendor_id: idddd,
      listing_image_id: item,
    };

    axios
      .post(`${apiurl[0].apiUrl}React/delete_listing_images_react`, data, {
        headers: {
          Authorization: `${tokenn}`,
        },
      })
      .then((response) => {
        setVendorelisting(response.data.data);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Headerbusiness />
      <div className="bg-white rounded mb-4">
        <div className="jbd-01 px-4 py-4">
          <div className="jbd-details mb-4">
            <h5 className="ft-bold fs-lg">Menu Images</h5>
            <div className="d-block mt-3">
              <div className="row g-3">
                {menuImages?.map((items, index) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="Goodup-sng-menu">
                        <div className="Goodup-sng-menu-thumb">
                          <div class="Goodup-bookmark-btn">
                            <button
                              onClick={() => deletemenuimages(items?.id)}
                              style={{ background: "red" }}
                              type="button"
                            >
                              <i class="fas fa-trash  position-absolute"></i>
                            </button>
                          </div>

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

          <div className="jbd-details mb-4">
            <h5 className="ft-bold fs-lg">Listing Images</h5>
            <div className="d-block mt-3">
              <div className="row g-3">
                {eventImages?.map((items, index) => {
                  return (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="Goodup-sng-menu">
                        <div className="Goodup-sng-menu-thumb" key={index}>
                          <div class="Goodup-bookmark-btn">
                            <button
                              onClick={() => deletelistingimages(items?.id)}
                              style={{ background: "red" }}
                              type="button"
                            >
                              <i class="fas fa-trash  position-absolute"></i>
                            </button>
                          </div>
                          <img
                            width={"100%"}
                            height={"220px"}
                            src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/listing/${items?.images}`}
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
            <a href="/bmylisting">
              <button className="btn btn-danger" id="">
                Back
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bimages;
