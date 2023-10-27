import React from 'react'
import { a } from 'react-router-dom'
import Headerbusiness from './Headerbusiness'

import Bfooter from './Bfooter'

const Homelocalservices = () => {
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
     <Headerbusiness/>
      {/* End Navigation */}
      <div className="clearfix" />
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* ======================= Top Breadcrubms ======================== */}
      <section className="about-bg bg-cover" style={{background: 'url(assets/img/about.jpg) no-repeat'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-11 col-sm-12">
              <div className="abt-caption">
                <div className="abt-caption-head">
                  <h1>Grow your home and local services business.</h1>
                  <h6>Boricua Directory offers a range of solutions that can help you attract new customers and convert more leads</h6>
                  <div className="abt-bt-info"><a href="javascript:void(0);" className="btn ft-medium theme-cl bg-white rounded">Verify my free listing<i className="fas fa-arrow-right ms-2" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Top Breadcrubms ======================== */}
      {/* 	<section class="py-5 position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    
                        <div class="featured-slick mb-4">
                            <div class="featured-gallery-slide">
                                <div class="dlf-flew auto"><a href="assets/img/lg-1.png" class="mfp-gallery"><img src="assets/img/lg-1.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-2.png" class="mfp-gallery"><img src="assets/img/lg-2.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-3.png" class="mfp-gallery"><img src="assets/img/lg-3.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-4.png" class="mfp-gallery"><img src="assets/img/lg-4.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-5.png" class="mfp-gallery"><img src="assets/img/lg-5.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-6.png" class="mfp-gallery"><img src="assets/img/lg-6.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-7.png" class="mfp-gallery"><img src="assets/img/lg-7.png" class="img-fluid mx-auto" alt="" /></a></div>
                                <div class="dlf-flew auto"><a href="assets/img/lg-8.png" class="mfp-gallery"><img src="assets/img/lg-8.png" class="img-fluid mx-auto" alt="" /></a></div>
                            </div>
                        </div>
        </div>
    </div>
</div>
</section> */}
      {/* ======================= How It Work Detail ======================== */}
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                {/* <h6 class="mb-0 theme-cl">Working Process</h6> */}
                <h2 className="ft-bold">Claim and manage your page for free</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box first">
                <div className="wrk-pro-box-icon"><i className="ti-map-alt text-success" /></div>
                <div className="wrk-pro-box-caption">
                  <h4>Update your business information</h4>
                  <p>Update your contact info, hours of operation, and provide details of the amenities and services your business offers.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box sec">
                <div className="wrk-pro-box-icon"><i className="ti-user theme-cl" /></div>
                <div className="wrk-pro-box-caption">
                  <h4>Get requests for new jobs</h4>
                  <p>Potential customers can contact you directly via your Business Page to schedule an appointment, request a quote or consultation.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box thrd">
                <div className="wrk-pro-box-icon"><i className="ti-shield text-sky" /></div>
                <div className="wrk-pro-box-caption">
                  <h4>Respond to job leads from anywhere</h4>
                  <p>Get notified the moment a potential customer sends you a message on Yelp, so you can respond quickly and clinch the job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= How It Work End ======================== */}
      {/* ======================= Blog Start ============================ */}
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h2 className="ft-bold">Learn how to market your business on Boricua Directory like a pro</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                  <a href='/bblogdetails'><img src="assets/img/b-4.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to convert a lead into a sale</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                  <a href='/bblogdetails'><img src="assets/img/b-5.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_title"><h4><a href='/bblogdetails'>Choosing the right photos to market your business</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                  <a href='/bblogdetails'><img src="assets/img/b-6.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_title"><h4><a href='/bblogdetails'>5 tips for successful virtual sales consultations</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Blog Start ============================ */}
      <section className="space pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="sec_title position-relative text-center mb-4">
              <h2 className="ft-bold">Stand out from the competition and reach more people</h2>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/upg.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
              <div className="m-spaced">
                <div className="position-relative">
                  <div className="mb-1"><span className="bg-light-success text-success px-2 py-1 rounded">PAGE UPGRADES</span></div>
                  <h2 className="ft-bold mb-3">Give customers the confidence to choose you</h2>
                  <p className="mb-3">Show off your best work with project photos and descriptions, stand out visually in the search results, convert more traffic with call to action buttons, and more.</p>
                </div>
                <a href="/upgrade" className="btn btn-danger">Learn More</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/upg.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
              <div className="m-spaced">
                <div className="position-relative">
                  <div className="mb-1"><span className="bg-light-success text-success px-2 py-1 rounded">VERIFIED LICENSE</span></div>
                  <h2 className="ft-bold mb-3">Build trust with potential customers</h2>
                  <p className="mb-3">Display your trade license prominently in search results and on your business page.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/upg.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">	
              <div className="m-spaced">
                <div className="position-relative">
                  <div className="mb-1"><span className="bg-light-success text-success px-2 py-1 rounded">Boricua Directory Ads</span></div>
                  <h2 className="ft-bold mb-3">Attract more customers for your business</h2>
                  <p className="mb-3">Get in front of potential customers at the very moment they’re searching for a Home and Local services business like yours.</p>
                </div>
                <a href="/upgrade" className="btn btn-danger">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Footer Start ================================== */}
      <Bfooter/>
      {/* ============================ Footer End ================================== */}
      {/* Log In Modal */}
      <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="loginmodal">
            <div className="modal-headers">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="ti-close" />
              </button>
            </div>
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h4 className="m-0 ft-medium">Login Your Account</h4>
              </div>
              <form className="submit-form">				
                <div className="form-group">
                  <label className="mb-1">User Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Username*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Password</label>
                  <input type="password" className="form-control rounded bg-light" placeholder="Password*" />
                </div>
                <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-1">
                      <input id="dd" className="checkbox-custom" name="dd" type="checkbox" defaultChecked />
                      <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                    </div>	
                    <div className="eltio_k2">
                      <a href="#" className="theme-cl">Lost Your Password?</a>
                    </div>	
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign In</button>
                </div>
                <div className="form-group text-center mb-0">
                  <p className="extra">Or login with</p>
                  <div className="option-log">
                    <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/c-1.png" className="img-fluid" alt="" />Login with Google</a></div>
                    <div className="single-log-opt"><a href="javascript:void(0);" className="log-btn"><img src="assets/img/facebook.png" className="img-fluid" alt="" />Login with Facebook</a></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
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

export default Homelocalservices
