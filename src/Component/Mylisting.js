import React from 'react'
import Header from './Header'
import secureLocalStorage from 'react-secure-storage'
import Navbardashboard from './Navbardashboard'
import Dashboardimage from './Dashboardimage'

const Mylisting = () => {
  let logout=(()=>{
    secureLocalStorage.removeItem("_id")
    secureLocalStorage.removeItem("token")
  })

  return (
    <div>
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
        <div className="preloader" />
        {/* ============================================================== */}
        {/* Main wrapper - style you can find in pages.scss */}
        {/* ============================================================== */}
        <div id="main-wrapper">
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* Start Navigation */}
          <Header/>
          {/* End Navigation */}
          <div className="clearfix" />
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* =============================== Dashboard Header ========================== */}
          <Dashboardimage/>

          {/* =============================== Dashboard Header ========================== */}
          {/* ======================= dashboard Detail ======================== */}
          <div className="goodup-dashboard-wrap gray px-4 py-5">
            <a className="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
              <i className="fas fa-bars me-2" />Dashboard Navigation
            </a>
            <Navbardashboard/>


            <div className="goodup-dashboard-content">
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Manage Listings</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li><a href="#">Home /</a></li>
                        <li><a href="#">Dashboard /</a></li>
                        <li><a href="#" className="theme-cl">Manage Listings</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file-alt me-2 theme-cl fs-sm" />My Listings</h4>	
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="dashboard-listing-wraps">
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb"><img src="assets/img/listing/o.jpg" className="img-fluid" alt="" /></div>	
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title"><h5>Muraliwala Family Restaurant</h5></div>
                              <span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span>
                              <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">34 Reviews</span>
                                  </div>
                                </div>	
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                                <a href="javascript:void(0);" className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                                <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb"><img src="assets/img/listing/r1.jpg" className="img-fluid" alt="" /></div>	
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title"><h5>Gurukripya Family Restaurant</h5></div>
                              <span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span>
                              <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">34 Reviews</span>
                                  </div>
                                </div>	
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                                <a href="javascript:void(0);" className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                                <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb"><img src="assets/img/listing/r2.jpg" className="img-fluid" alt="" /></div>	
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title"><h5>The Gold Hotel Lalit</h5></div>
                              <span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span>
                              <div className="Goodup-call"><a href> <i className="fas fa-phone-alt" />+91 365 795 4526</a></div>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">34 Reviews</span>
                                  </div>
                                </div>	
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a href="javascript:void(0);" className="btn btn-edit mr-1"><i className="fas fa-edit me-1" />Edit</a>
                                <a href="javascript:void(0);" className="btn btn-view mr-1"><i className="fas fa-eye me-1" />View</a>
                                <a href="javascript:void(0);" className="btn btn-delete"><i className="fas fa-trash me-1" />Delete</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              {/* 	<div class="row">
						<div class="col-md-12">
							<div class="py-3">© 2023 Boricua</div>
						</div>
					</div> */}
            </div>
          </div>
          {/* ======================= dashboard Detail End ======================== */}
          <a id="tops-button" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
        </div>
        {/* ============================================================== */}
        {/* End Wrapper */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* All Jquery */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* This page plugins */}
        {/* ============================================================== */}		
      </div>
  )
}

export default Mylisting
