import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import apiurl from './config'
import secureLocalStorage from 'react-secure-storage'

const Dealsoftheday = () => {
const [deals , setdeals]=useState([])
let token = secureLocalStorage.getItem("token");
let userid = secureLocalStorage.getItem("_id");

  useEffect(()=>{
    Dealsoftheday()
  },[])
const Dealsoftheday=(()=>{

  const options = {
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  };

  let lati= secureLocalStorage.getItem("latitude");
    let longi= secureLocalStorage.getItem("longitude");
  const data=JSON.stringify({
     lat: lati ? lati : "",
      long: longi ? longi : "",
  })
  axios.post(`${apiurl[0].apiUrl}React/deal_of_the_day`,data,options).then((res)=>{
    setdeals(res.data.data)
  }).catch((error)=>{

  })
})




  return (
    <section className="space min">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="sec_title position-relative text-center mb-5">
            {/* <h6 className="theme-cl mb-0">Featured Listings</h6> */}
             <h2 className="ft-bold">Specials</h2>
          </div>
        </div>
      </div>
      {/* row */}
      <div className="row align-items-center">
        
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="tab-content" id="myTabContent">
            {/* Places */}
            <div className="tab-pane fade show active" id="places" role="tabpanel" aria-labelledby="places-tab">
              <div className="row justify-content-left">
                {/* Single */}

                

                {deals.map((list)=>{
                  return(

                    <div onClick={(()=>{secureLocalStorage.setItem("listingid",list.id)})} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      {/* <div class="Goodup-pos ab-left">
              <div class="Goodup-status open me-2">Open</div>
              <div class="Goodup-featured-tag">Featured</div>
            </div> */}
                      <div className="Goodup-grid-thumb" >
                      <a href="/dayspecialdetails" className="d-block text-center m-auto"><img src={
                          `${apiurl[0].apiUrl}assets/bori_images/listing/` +
                          list?.business_logo
                        } className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><a href="single-listing-detail-1.html"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        {/* <div className="Goodup-cates"><a href='/dayspecialdetails'>Restaurants</a></div> */}
                        <h4 className="mb-0 ft-medium medium"><a href="/dayspecialdetails" className="text-dark fs-md">{list?.business_name}</a></h4>
                        {/* <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Liverpool, London UK</div>
                          <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke"><span className="ft-bold d14ixhs">Open</span> til 8:00 PM</p>
                          </div>
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
                  )
                })}
                

               
               
              
              </div>
            </div>
            {/* /Places */}
            {/* Events */}
            <div className="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">
              <div className="row justify-content-center">
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/dayspecialdetails" className="d-block text-center m-auto"><img src="assets/img/listing/o.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Amagansett Go Around</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />Meltron Silver, UK</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Sport &amp; Football
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">9 Fab 09:30 - 10:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-2.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Amateur Barber Night</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />California, USA</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Sport &amp; Football
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">10 Fab 09:00 - 10:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-3.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Apex Muker Trys</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />Montreal, Australia</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            It Services
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">12 Apr 14:30 - 15:45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-4.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Ragni Book Launching</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />Old Denver, USA</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Education
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">18 Oct 10:00 - 11:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-5.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Madhu Spa Salon</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />104 Washington, USA</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Spa &amp; Salon
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">12 Sep 10:00 - 10:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-6.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Blue Light Cafe</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />California, Canada</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Party &amp; Cafe
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">17 Jul 12:00 - 14:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-7.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Allante Mall Opening</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />Liverpool, London</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Shopping
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">10 June 10:00 - 11:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="event-detail.html" className="d-block text-center m-auto"><img src="assets/img/listing/l-8.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-overlay-caps">
                        <h4 className="mb-0 ft-medium medium"><a href="event-detail.html" className="text-white fs-md">Antisocial Darwinism</a></h4>
                        <div className="Goodup-location text-white"><i className="fas fa-map-marker-alt me-1" />San Francisco, USA</div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-catsin">
                            Social Network
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <span className="small">15 May 10:00 - 11:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Events */}
            {/* Doctor */}
            <div className="tab-pane fade" id="doctor" role="tabpanel" aria-labelledby="doctor-tab">
              <div className="row justify-content-center">
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-1.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Heather D. Birch</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-2.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Joyce G. Howell</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-3.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Juliana J. GGoodupry</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-4.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Elizabeth J. Vergara</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-5.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Michelle R. McIntyre</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-6.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Mary F. Holliday</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-7.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Dennis K. Bales</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="doctor-grid-view">
                    <div className="doctor-grid-thumb">
                      <a href="single-listing-detail-4.html"><img src="assets/img/doc-8.jpg" className="img-fluid" alt="" /></a>
                    </div>
                    <div className="doctor-grid-caption">
                      <div className="doc-title-wrap"><h4 className="doc-title verified"><a href="single-listing-detail-4.html">Dr. Donald S. Herring</a></h4></div>
                      <span className="doc-designation">MBBS, MS - General Surgery, MCh</span>
                      <div className="doc-inner-wrap">
                        <div className="doc-ratting-boxes">
                          <ul className="doc ratting-view">
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star filled" /></li>
                            <li><i className="fas fa-star" /></li>
                          </ul>
                          <span className="doctor-review-list">(44 Reviews)</span>
                        </div>
                        <div className="doc-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />G87P, Birmingham, UK</div>
                      </div>
                    </div>
                    <div className="doctor-grid-footer">
                      <div className="doc-foot-first"><span className="av-status available">Available Today</span></div>
                      <div className="doc-foot-last"><a href="#" className="btn doc-book-btn">Book Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor */}
            {/* car */}
            <div className="tab-pane fade" id="car" role="tabpanel" aria-labelledby="car-tab">
              <div className="row justify-content-center">
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-1.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>30,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Hyundai</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta</a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Petrol</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2018</span></li>
                              <li><i className="fas fa-blender-phone" /><span>20 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>500 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-2.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>22,500</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Tata</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Diesel</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2017</span></li>
                              <li><i className="fas fa-blender-phone" /><span>22 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>512 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-3.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>40,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Maruti</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta</a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Petrol</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2013</span></li>
                              <li><i className="fas fa-blender-phone" /><span>26 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>700 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-4.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>32,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Hyundai</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Diesel</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2017</span></li>
                              <li><i className="fas fa-blender-phone" /><span>18 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>450 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-5.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>50,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Nexon</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta</a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Petrol</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2020</span></li>
                              <li><i className="fas fa-blender-phone" /><span>22 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>600 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-6.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>35,500</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Maruti</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta</a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Diesel</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2012</span></li>
                              <li><i className="fas fa-blender-phone" /><span>21 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>520 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-7.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>25,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Tata</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Diesel</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2016</span></li>
                              <li><i className="fas fa-blender-phone" /><span>24 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>450 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-7.html" className="d-block text-center m-auto"><img src="assets/img/car/c-8.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>34,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates multi"><a href="search-car.html" className="cats-1">Maruti</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-7.html" className="text-dark fs-md">New Hyundai Creta</a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-gas-pump" /><span>Petrol</span></li>
                              <li><i className="far fa-calendar-alt" /><span>2019</span></li>
                              <li><i className="fas fa-blender-phone" /><span>23 KM/L</span></li>
                              <li><i className="fab fa-accusoft" /><span>540 CC</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /car */}
            {/* Real */}
            <div className="tab-pane fade" id="real" role="tabpanel" aria-labelledby="real-tab">
              <div className="row justify-content-center">
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">For Rent</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-1.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>30,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.8</span><a href="search-property.html" className="cats-1">Apartment</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Liverpool London, LC345AC<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />San Francisco, USA</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status me-2">For Sale</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-2.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>44,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-2.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.7</span><a href="search-property.html" className="cats-1">Condos</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Montreal Canada, HAQC445<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />Liverpool, London UK</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">For Rent</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-3.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>37,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-3.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.5</span><a href="search-property.html" className="cats-1">Villa</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Huwai Denever USA, AWE789O<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />California, Canada</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status me-2">For Sale</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-4.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>45,000K</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-4.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.9</span><a href="search-property.html" className="cats-1">House</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Alameda Canada, SHQT45O<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />104 Washington, USA</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">For Rent</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-5.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>35,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-5.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.6</span><a href="search-property.html" className="cats-1">Building</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Henever Canada, QWUI98<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />Old Denver, USA</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">For Rent</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-6.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>42,000</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-6.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.2</span><a href="search-property.html" className="cats-1">Apartment</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Barghimbar USA, ERIO098<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />Montreal, Australia</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status me-2">For Sale</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-7.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>31,950</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-7.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.5</span><a href="search-property.html" className="cats-1">Villa</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Burbank Canada, ECH15462<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />California, USA</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">For Rent</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-5.html" className="d-block text-center m-auto"><img src="assets/img/real/r-1.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-prt-price">$<span>46,999</span></div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="author-detail.html"><img src="assets/img/t-8.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates multi"><span className="Goodup-apr-rates"><i className="fas fa-star" />4.7</span><a href="search-property.html" className="cats-1">Work Space</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="single-listing-detail-5.html" className="text-dark fs-md">Emeryville Green Vally<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-2">
                          <div className="Goodup-options-list">
                            <ul className="no-list-style">
                              <li><i className="fas fa-bed" /><span>3 Beds</span></li>
                              <li><i className="fas fa-bath" /><span>2 Baths</span></li>
                              <li><i className="fas fa-clone" /><span>1.2k sqft</span></li>
                              <li><i className="fas fa-calendar" /><span>3 Days Ago</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-2 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt me-1 theme-cl" />Meltron Silver, UK</div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-envelope position-absolute" /></button></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Real */}
            {/* Hotels */}
            <div className="tab-pane fade" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
              <div className="row justify-content-center">
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/1.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status offer me-2">-20% Off</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/2.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/3.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/4.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status offer me-2">-20% Off</div><div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/5.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status offer me-2">-20% Off</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/6.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-featured-tag">Featured</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/7.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status offer me-2">-20% Off</div>
                      </div>
                      <div className="Goodup-grid-thumb">
                        <a href="single-listing-detail-8.html" className="d-block text-center m-auto"><img src="assets/img/rooms/8.jpg" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">4.2</div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="Goodup-all-review"><span>42 Reviews</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price"><span>$199</span>per night</div>
                        <h4 className="mb-0 ft-medium medium mb-0"><a href="single-listing-detail-8.html" className="text-dark fs-md">3112 Comfort Deluxe Space<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-distance">1.5 km to Town Center</div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                            <div className="Goodup-facility-list">
                              <ul className="no-list-style">
                                <li><i className="fas fa-wifi" /></li>
                                <li><i className="fas fa-swimming-pool" /></li>
                                <li><i className="fas fa-parking" /></li>
                                <li><i className="fas fa-dog" /></li>
                                <li><i className="fas fa-fan" /></li>
                                <li><i className="fas fa-wine-glass-alt" /></li>
                              </ul>
                            </div>
                          </div>
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">Book Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Hotels */}
            {/* jobs */}
            <div className="tab-pane fade" id="jobs" role="tabpanel" aria-labelledby="jobs-tab">
              <div className="row justify-content-center">
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-1.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">Application Designer</a></h4>
                        <div className="_times_jb">$70k - 80k</div>
                        <div className="_jb_types fulltime_lite">Full Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">Just now</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-2.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">IOS Developer</a></h4>
                        <div className="_times_jb">$55k - 80k</div>
                        <div className="_jb_types parttime_lite">Part Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">10 min ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-3.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">Web Developer</a></h4>
                        <div className="_times_jb">$50k - 60k</div>
                        <div className="_jb_types internship_lite">Internship</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">02 min ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-4.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">Product Designer</a></h4>
                        <div className="_times_jb">$40k - 60k</div>
                        <div className="_jb_types parttime_lite">Part Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">05 min ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-5.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">UI/UX Designer</a></h4>
                        <div className="_times_jb">$60k - 80k</div>
                        <div className="_jb_types remote">Remote</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">10 min ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-6.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">SEO Expert</a></h4>
                        <div className="_times_jb">$30k - 50k</div>
                        <div className="_jb_types fulltime_lite">Full Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">20 min ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-7.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">Magento Developer</a></h4>
                        <div className="_times_jb">$50k - 60k</div>
                        <div className="_jb_types internship_lite">Internship</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">1 hour ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-8.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">WordPress Developer</a></h4>
                        <div className="_times_jb">$40k - 60k</div>
                        <div className="_jb_types fulltime_lite">Full Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">6 hour ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-9.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">PHP Developer</a></h4>
                        <div className="_times_jb">$25k - 40k</div>
                        <div className="_jb_types remote">Remote</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">3 hour ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-10.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">Content Writer</a></h4>
                        <div className="_times_jb">$30k - 40k</div>
                        <div className="_jb_types fulltime_lite">Full Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">5 hour ago</div>
                    </div>
                  </div>
                </div>
                {/* Single Jobs */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="_jb_list72">
                    <div className="jobs-like bookmark">
                      <label className="toggler toggler-danger"><input type="checkbox" /><i className="fa fa-bookmark" /></label>
                    </div>
                    <div className="_jb_list72_flex">
                      <div className="_jb_list72_first">
                        <div className="_jb_list72_yhumb">
                          <img src="assets/img/c-11.png" className="img-fluid" alt="" />	
                        </div>
                      </div>
                      <div className="_jb_list72_last">
                        <h4 className="_jb_title"><a href="single-listing-detail-6.html">UI/UX Designer</a></h4>
                        <div className="_times_jb">$30k - 55k</div>
                        <div className="_jb_types parttime_lite">Part Time</div>
                      </div>
                    </div>
                    <div className="_jb_list72_foot">
                      <div className="_times_jb">7 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /jobs */}
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
  </section>
  )
}

export default Dealsoftheday
