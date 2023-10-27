import React from 'react'
import Header from './Header'
import secureLocalStorage from 'react-secure-storage'
import Navbardashboard from './Navbardashboard'
import Dashboardimage from './Dashboardimage'

const Mybooking = () => {

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
                    <h1 className="ft-medium">My Bookings</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                        <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="#" className="theme-cl">My Bookings</a></li>
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
                          <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-shopping-basket me-2 theme-cl fs-sm" />All Bookings</h4>	
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="dashboard-bookings-wraps">
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Steven I. Gonzales<span className="bko-dates">10 July 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-2.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>James M. Gonzalez<span className="bko-dates">06 May 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-info rounded text-info">Confirmed</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-3.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Diane J. Mack<span className="bko-dates">17 Apr 2022</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-warning rounded text-warning">Unpaid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
                              </div>
                            </div>
                          </div>
                          {/* Single booking List */}
                          <div className="dsd-single-bookings-wraps">
                            <div className="dsd-single-book-thumb"><img src="assets/img/t-4.png" className="img-fluid circle" alt="" /></div>	
                            <div className="dsd-single-book-caption">
                              <div className="dsd-single-book-title"><h5>Maria J. Barber<span className="bko-dates">10 July 2021</span></h5></div>
                              <div className="ico-content">
                                <ul>
                                  <li><div className="px-2 py-1 medium bg-light-success rounded text-success">Paid</div></li>
                                  <li><div className="px-2 py-1 medium bg-light-danger rounded text-danger">Pending</div></li>
                                </ul>
                              </div>
                              <div className="dsd-single-descr">
                                <div className="dsd-single-item"><span className="dsd-item-title">Listing Item:</span><span className="dsd-item-info">Snow Valley Resorts</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Booking Date:</span><span className="dsd-item-info">10 July 2022 - 17 July 2022</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Member:</span><span className="dsd-item-info">2 Adults, 3 Child</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Mail:</span><span className="dsd-item-info">Stevenmail@gmail.com</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Phone:</span><span className="dsd-item-info">(20) 256 458 7596</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Ammount:</span><span className="dsd-item-info">$2,240</span></div>
                                <div className="dsd-single-item"><span className="dsd-item-title">Payment:</span><span className="dsd-item-info">Via Credit Card</span></div>
                              </div>
                              <div className="dsd-single-book-footer">
                                <a href="javascript:void(0);" className="btn btn-aprd mr-1"><i className="fas fa-check-circle me-1" />Approved</a>
                                <a href="javascript:void(0);" className="btn btn-reject mr-1"><i className="fas fa-trash me-1" />Reject</a>
                                <a href="javascript:void(0);" className="btn btn-message"><i className="fas fa-envelope me-1" />Message</a>
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
              <div className="row">
                <div className="col-md-12">
                  <div className="py-3">© 2022 Boricua.</div>
                </div>
              </div>
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

export default Mybooking
