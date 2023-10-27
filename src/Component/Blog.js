import React from 'react'

import Footer from './Footer'
import Header from './Header';



const Blog = () => {
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
      {/* ======================= Top Breadcrubms ======================== */}
      {/* <div className="bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className="text-light">Home</a></li>
                  <li className="breadcrumb-item"><a href="#" className="text-light">Pages</a></li>
                  <li className="breadcrumb-item active theme-cl" aria-current="page">Blog Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      {/* ======================= Top Breadcrubms ======================== */}
      {/* ======================= Blog Start ============================ */}
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="theme-cl mb-0">Latest Updates</h6>
                <h2 className="ft-bold">View Recent Updates</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Item */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                  <a href="blog-detail.html"><img src="assets/img/b-1.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Marketing</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">What Is a VPN and How Does It Work?</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-2.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
                  <a href="blog-detail.html"><img src="assets/img/b-2.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Business</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">What Is Ransomware: The Ultimate Guide?</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-3.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
                  <a href="blog-detail.html"><img src="assets/img/b-3.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Accounting</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">Can iPads Get Viruses? What You Need</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-5.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
                  <a href="blog-detail.html"><img src="assets/img/b-4.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Marketing</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">What Is a VPN and How Does It Work?</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-2.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
                  <a href="blog-detail.html"><img src="assets/img/b-5.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Business</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">What Is Ransomware: The Ultimate Guide?</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-3.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
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
                  <a href="blog-detail.html"><img src="assets/img/b-6.jpg" className="img-fluid" alt="" /></a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag"><span>Accounting</span></div>
                  <div className="blg_title"><h4><a href="blog-detail.html">Can iPads Get Viruses? What You Need</a></h4></div>
                  <div className="blg_desc"><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p></div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb"><a href="javascript:void(0);"><img src="assets/img/team-5.jpg" className="img-fluid circle" width={35} alt="" /></a></div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li><div className="elsio_ic"><i className="fa fa-eye text-success" /></div><div className="elsio_tx">10k Views</div></li>
                          <li><div className="elsio_ic"><i className="fa fa-clock text-warning" /></div><div className="elsio_tx">10 July 2021</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a href="javascript:void(0);" className="btn gray rounded ft-medium">Load More Blogs<i className="lni lni-arrow-right ms-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Blog Start ============================ */}
      {/* ============================ Footer Start ================================== */}
      <Footer/>
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
                  <label className="mb-1">Phone</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Phone*" />
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
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Log In</button>
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
      {/* Sign up Modal */}
      <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="signupmodal" aria-hidden="true">
        <div className="modal-dialog login-pop-form" role="document">
          <div className="modal-content" id="signupmodal">
            <div className="modal-headers">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="ti-close" />
              </button>
            </div>
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h4 className="m-0 ft-medium">Sign Up</h4>
              </div>
              <form className="submit-form">				
                <div className="form-group">
                  <label className="mb-1">First Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Firstname*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Last Name</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Lastname*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Phone</label>
                  <input type="text" className="form-control rounded bg-light" placeholder="Phone*" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Email</label>
                  <input type="email" className="form-control rounded bg-light" placeholder="Email*" />
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
                  <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign Up</button>
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

export default Blog
