import React from "react";
import Header from "./Header";
import secureLocalStorage from "react-secure-storage";
import { useState } from "react";
import axios from "axios";
import apiurl from "./config";
import { useEffect } from "react";
import Navbardashboard from "./Navbardashboard";

const Dashboardimage = () => {
     const [profile, setprofile] = useState();
    
  
  
    useEffect(() => {
      const tokenn = secureLocalStorage.getItem("token");
      const idddd = secureLocalStorage.getItem("_id");
      
  
      const data = {
        user_id: idddd,
      };
  
      axios
        .post(`${apiurl[0].apiUrl}React/get_user_profile_react`, data, {
          headers: {
            Authorization: `${tokenn}`,
          },
        })
        .then((response) => {
          setprofile(response.data.data);
          
        })
        .catch((error) => {});
    }, []);
  return (
    <section
          className="bg-cover position-relative"
          style={{ background: "red url(assets/img/cover.jpg) no-repeat" }}
          data-overlay={3}
        >
          
          {/* <div className="abs-list-sec">
            <a href="/addlisting" className="add-list-btn">
              <i className="fas fa-plus me-2" />
              Add Listing
            </a>
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="dashboard-head-author-clicl">
                  <div className="dashboard-head-author-thumb">
                    {profile?.user_image ? (<img
                       src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/users/${profile?.user_image}`}
                      className="img-fluid"
                      alt=""
                    />) : (<img
                      src="assets/img/t-7.png"
                      className="img-fluid"
                      alt=""
                    />)}
                  </div>
                  <div className="dashboard-head-author-caption">
                    <div className="dashploio">
                      <h4>{profile?.first_name} {profile?.last_name}</h4>
                    </div>
                    <div className="dashploio">
                      <span className="agd-location">
                        <i className="lni lni-map-marker me-1" />
                        San Francisco, USA
                      </span>
                    </div>
                    <div className="listing-rating high">
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                      <i className="fas fa-star active" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Dashboardimage
