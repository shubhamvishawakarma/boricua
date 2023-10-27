import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Blogdetails = () => {
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
          {/* ============================ Page Title Start================================== */}
          <section className="page-title gray">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="breadcrumbs-wrap">
                    <h2 className="mb-0 ft-medium">List of Advance Features and Support</h2>
                    {/* <nav className="transparent">
                      <ol className="breadcrumb p-0">
                        <li className="breadcrumb-item"><a href="#">Home /</a></li>
                        <li className="active theme-cl" aria-current="page">Blog Detail</li>
                      </ol>
                    </nav> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ============================ Page Title End ================================== */}
          {/* ============================ Blog Detail Start ================================== */}
          <section>
            <div className="container">
              {/* row Start */}
              <div className="row">
                {/* Blog Detail */}
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="article_detail_wrapss single_article_wrap format-standard">
                    <div className="article_body_wrap">
                      <div className="article_featured_image">
                        <img className="img-fluid" src="assets/img/b-6.jpg" alt="" />
                      </div>
                      <div className="article_top_info">
                        <ul className="article_middle_info">
                          <li><a href="#"><span className="icons"><i className="ti-user" /></span>by Mach K. Mortin</a></li>
                          <li><a href="#"><span className="icons"><i className="ti-comment-alt" /></span>45 Comments</a></li>
                        </ul>
                      </div>
                      <h2 className="post-title">List of Advance Features and Support with Goodup</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                      <blockquote>
                        <span className="icon"><i className="fas fa-quote-left" /></span>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tem
                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                        <h5 className="name">- Litha K. Mortin</h5>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        dolorem. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                        iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                    </div>
                  </div>
                  {/* Author Detail */}
                  <div className="article_detail_wrapss single_article_wrap format-standard">
                    <div className="article_posts_thumb">
                      <span className="img"><img className="img-fluid" src="assets/img/user-1.jpg" alt="" /></span>
                      <h3 className="pa-name">Rosalina William</h3>
                      <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                      <p className="pa-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                  </div>
                  {/* Blog Comment */}
                  
                </div>
                {/* Single blog Grid */}
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* Searchbard */}
                  <div className="single_widgets widget_search">
                    <h4 className="title">Search</h4>
                    <form action="#" className="sidebar-search-form">
                      <input type="search" name="search" placeholder="Search.." />
                      <button type="submit"><i className="ti-search" /></button>
                    </form>
                  </div>
                  {/* Categories */}
                  <div className="single_widgets widget_category">
                    <h4 className="title">Categories</h4>
                    <ul>
                      <li><a href="#">Lifestyle <span>09</span></a></li>
                      <li><a href="#">Travel <span>12</span></a></li>
                      <li><a href="#">Fashion <span>19</span></a>
                      </li><li><a href="#">Branding <span>17</span></a></li>
                      <li><a href="#">Music <span>10</span></a></li>
                    </ul>
                  </div>
                  {/* Trending Posts */}
                  <div className="single_widgets widget_thumb_post">
                    <h4 className="title">Trending Posts</h4>
                    <ul>
                      <li>
                        <span className="left">
                          <img src="assets/img/b-1.jpg" alt="" className />
                        </span>
                        <span className="right">
                          <a className="feed-title" href="#">Top Hotels in California</a> 
                          <span className="post-date"><i className="ti-calendar" />10 Min ago</span>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <img src="assets/img/b-2.jpg" alt="" className />
                        </span>
                        <span className="right">
                          <a className="feed-title" href="#">How to get top services in your town?</a> 
                          <span className="post-date"><i className="ti-calendar" />2 Hours ago</span>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <img src="assets/img/b-3.jpg" alt="" className />
                        </span>
                        <span className="right">
                          <a className="feed-title" href="#">How to connect laptop with your iphone?</a> 
                          <span className="post-date"><i className="ti-calendar" />4 Hours ago</span>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <img src="assets/img/b-4.jpg" alt="" className />
                        </span>
                        <span className="right">
                          <a className="feed-title" href="#">Search best cafe in your town and city</a> 
                          <span className="post-date"><i className="ti-calendar" />7 Hours ago</span>
                        </span>
                      </li>
                      <li>
                        <span className="left">
                          <img src="assets/img/b-5.jpg" alt="" className />
                        </span>
                        <span className="right">
                          <a className="feed-title" href="#">How to photo shoot with local iphone aras</a> 
                          <span className="post-date"><i className="ti-calendar" />3 Days ago</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Tags Cloud */}
                  <div className="single_widgets widget_tags">
                    <h4 className="title">Tags Cloud</h4>
                    <ul>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Fashion</a></li>
                      <li><a href="#">Branding</a></li>
                      <li><a href="#">Music</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /row */}					
            </div>
          </section>
          {/* ============================ Blog Detail End ================================== */}
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

export default Blogdetails
