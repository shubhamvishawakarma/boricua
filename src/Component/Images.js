import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import secureLocalStorage from 'react-secure-storage'
import apiurl from './config'
import axios from 'axios'

const Images = () => {
  const [educaltiondetails, seteducaltiondetails] = useState([]);

  let educationalidd=secureLocalStorage.getItem("educaltioncalidd")
  useEffect(() => {
    singlelistingg();
  }, []);

  const singlelistingg = () => {
    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };
    let educationalidd=secureLocalStorage.getItem("educaltioncalidd")

    const data = JSON.stringify({
      education_id: educationalidd,
    });

    axios
      .post(`${apiurl[0].apiUrl}React/educational_details_react`, data, options)
      .then((res) => {
        seteducaltiondetails(res.data.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  };

  const eventImages = educaltiondetails?.education_image;

  return (
    <div>
        <Header/>
         <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Images</h5>
                      <div className="d-block mt-3">
                        <div className="row g-3">
                          


                        {eventImages?.map((items, index) => {
                        return (

                          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                            <div className="Goodup-sng-menu">
                              <div className="Goodup-sng-menu-thumb">
                                <img width={'100%'} height={'220px'}
                                  src={`https://logicaltest.website/Anju/Boricua/assets/bori_images/event/${items?.education_image}`}

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
          <a href="/educationaldetails">
            <button className="btn btn-danger" id="">
              Back
            </button>
          </a>
        </div>
                  </div>
                  
                </div>
                <Footer/>
    </div>
  )
}

export default Images
