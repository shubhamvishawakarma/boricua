import React from 'react'
import Headerbusiness from './Headerbusiness'
import { Link } from 'react-router-dom'

import Bfooter from './Bfooter'

const Resource = () => {
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
      {/* ======================= About Start ============================ */}
      <section className="space">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="m-spaced">
                <div className="position-relative">
                  <h2 className="ft-bold mb-3">Business resource center</h2>
                  <h4 className="ft-bold mb-3">Is your business on Boricua Directory?</h4>
                  <p className="mb-3">If not, let’s change that. Adding your business is free and easy.</p>
                </div>
                <a href className="btn btn-danger">Verify My Free Listing</a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="position-relative">
                <img src="assets/img/busi.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= About Start ============================ */}
      {/* ======================= Blog Start ============================ */}
      <section className="space min pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h4 className="theme-cl mb-0">Articles</h4><br />
                <h2 style={{}} className="ft-bold">Help your business thrive with these tools, resources, and tips.</h2>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to add a business to Boricua</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to write a great business description for social media and review sites</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>5 free things you didn’t know you could do on your Boricua Directory Page</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                <a href='/bblogdetails'><img src="assets/img/b-4.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to add a business to Boricua</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to write a great business description for social media and review sites</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>5 free things you didn’t know you could do on your Boricua Directory Page</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Blog Start ============================ */}
      {/* ======================= Blog Start ============================ */}
      <section className="space min pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h4 className="theme-cl mb-0">Podcasts</h4><br />
                <h2 style={{}} className="ft-bold">Hear our exclusive conversations with reviewers and business owners.</h2>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to add a business to Boricua</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to write a great business description for social media and review sites</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>5 free things you didn’t know you could do on your Boricua Directory Page</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                <a href='/bblogdetails'><img src="assets/img/b-4.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to add a business to Boricua</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>How to write a great business description for social media and review sites</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
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
                  <div className="blg_title"><h4><a href='/bblogdetails'>5 free things you didn’t know you could do on your Boricua Directory Page</a></h4></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);">Learn More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Blog Start ============================ */}
      {/* ============================ Pricing Start ==================================== */}
      {/* ============================ Pricing End ==================================== */}
      {/* ========================== Download App Section =============================== */}
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_2 pr-3 py-4">
                <div className="content-box">
                  <div className="sec-title light">
                    <p className="theme-cl px-3 py-1 rounded bg-light-danger d-inline-flex">Download apps</p>
                    <h2 className="ft-bold">Download the Boricua Directory App For Easy Use</h2>
                  </div>
                  <div className="text mb-3">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </div>
                  <div className="position-relative row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0"><span className="count">10</span>k+</h3>
                      <p className="ft-medium">Active Jobs</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0"><span className="count">12</span>k+</h3>
                      <p className="ft-medium">Resumes</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold theme-cl mb-0"><span className="count">07</span>k+</h3>
                      <p className="ft-medium">Employers</p>
                    </div>
                  </div>
                  <div className="btn-box clearfix mt-5">
                    <a href="index-2.html" className="download-btn play-store me-1 d-inline-flex"><img src="assets/img/ios.png" width={200} alt="" /></a>
                    <a href="index-2.html" className="download-btn play-store ms-2 mb-1 d-inline-flex"><img src="assets/img/and.png" width={200} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image"><img src="assets/img/log.png" className="img-fluid" style={{height: '600px'}} alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================== Download App Section =============================== */}
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

export default Resource
