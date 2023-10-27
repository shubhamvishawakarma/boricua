import React from 'react'

import Headerbusiness from './Headerbusiness'

const Bmessage = () => {
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
          {/* =============================== Dashboard Header ========================== */}
          <section className="bg-cover position-relative" style={{background: 'red url(assets/img/cover.jpg) no-repeat'}} data-overlay={3}>
            {/* <div class="abs-list-sec"><a href="dashboard-add-listing.html" class="add-list-btn"><i class="fas fa-plus me-2"></i>Add Listing</a></div> */}
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="dashboard-head-author-clicl">
                    <div className="dashboard-head-author-thumb">
                      <img src="assets/img/t-7.png" className="img-fluid" alt="" />
                    </div>
                    <div className="dashboard-head-author-caption">
                      <div className="dashploio"><h4>Charles D. Robinson</h4></div>
                      <div className="dashploio"><span className="agd-location"><i className="lni lni-map-marker me-1" />San Francisco, USA</span></div>
                      <div className="listing-rating high"><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /><i className="fas fa-star active" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============================== Dashboard Header ========================== */}
          {/* ======================= dashboard Detail ======================== */}
          <div className="goodup-dashboard-wrap gray px-4 py-5">
            <a className="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
              <i className="fas fa-bars me-2" />Dashboard Navigation
            </a>
            <div className="collapse" id="MobNav">
              <div className="goodup-dashboard-nav sticky-top">
                <div className="goodup-dashboard-inner">
                  <ul data-submenu-title="Main Navigation">
                    <li className="active"><a href="/bdashboard"><i className="lni lni-dashboard me-2" />Dashboard</a></li>
                    <li><a href="/bmylisting"><i className="lni lni-files me-2" />My Listings</a></li>
                    <li><a href="/baddlisting"><i className="lni lni-add-files me-2" />Add Listing</a></li>
                    <li><a href="/bsavedlisting"><i className="lni lni-bookmark me-2" />Saved Listing</a></li>
                    <li><a href="/bmybooking"><i className="lni lni-briefcase me-2" />My Bookings<span className="count-tag bg-warning">4</span></a></li>
                    <li><a href="/bwallet"><i className="lni lni-mastercard me-2" />Wallet</a></li>
                    <li><a href="/bmessage"><i className="lni lni-envelope me-2" />Messages<span className="count-tag">4</span></a></li>
                  </ul>
                  <ul data-submenu-title="My Accounts">
                    <li><a href="/bmyprofile"><i className="lni lni-user me-2" />My Profile </a></li>
                    <li><a href="/bchangepassword"><i className="lni lni-lock-alt me-2" />Change Password</a></li>
                    <li><a href="javascript:void(0);"><i className="lni lni-trash-can me-2" />Delete Account</a></li>
                    <li><a href="/loginbusiness"><i className="lni lni-power-switch me-2" />Log Out</a></li>
                  </ul>
                </div>					
              </div>
            </div>
            <div className="goodup-dashboard-content">
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Messages</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li><a href="#">Home /</a></li>
                        <li><a href="#">Dashboard /</a></li>
                        <li><a href="#" className="theme-cl">Messages</a></li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="_dashboard_content bg-white rounded mb-4">
                      <div className="_dashboard_content_body">
                        {/* Convershion */}
                        <div className="messages-container margin-top-0">
                          <div className="messages-headline">
                            <h4>Connor Griffin</h4>
                            <a href="#" className="message-action"><i className="ti-trash" /> Delete Conversation</a>
                          </div>
                          <div className="messages-container-inner">
                            {/* Messages */}
                            <div className="dash-msg-inbox">
                              <ul>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-1.png" alt="" /><span className="_user_status online" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Tilly Bartlett</h5>
                                        <span>36 min ago</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year.. </p>
                                    </div>
                                  </a>
                                </li>
                                <li className="active-message">
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-2.png" alt="" /><span className="_user_status offline" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>George Howarth</h5>
                                        <span>2 hours ago</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-3.png" alt="" /><span className="_user_status busy" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Harriet Ball</h5>
                                        <span>Yesterday</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-4.png" alt="" /><span className="_user_status online" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Sienna Bruce</h5>
                                        <span>02.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-5.png" alt="" /><span className="_user_status busy" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Leo Stewart</h5>
                                        <span>03.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-6.png" alt="" /><span className="_user_status online" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Shaurya Preet</h5>
                                        <span>05.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-7.png" alt="" /><span className="_user_status offline" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Dan Preet</h5>
                                        <span>04.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-8.png" alt="" /><span className="_user_status online" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Maddison</h5>
                                        <span>31.05.2019</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-4.png" alt="" /><span className="_user_status busy" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Maddison</h5>
                                        <span>27.05.2019</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-5.png" alt="" /><span className="_user_status busy" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Eleanor Lloyd</h5>
                                        <span>24.05.2019</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-1.png" alt="" /><span className="_user_status offline" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Anna Curtis</h5>
                                        <span>05.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="dash-msg-avatar"><img src="assets/img/t-2.png" alt="" /><span className="_user_status online" /></div>
                                    <div className="message-by">
                                      <div className="message-by-headline">
                                        <h5>Tyler Fraser</h5>
                                        <span>07.01.2020</span>
                                      </div>
                                      <p>Hello, I am a web designer with 5 year..</p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* Messages / End */}
                            {/* Message Content */}
                            <div className="dash-msg-content">
                              <div className="message-plunch">
                                <div className="dash-msg-avatar"><img src="assets/img/user-1.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>Hello, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin</p></div>
                              </div>
                              <div className="message-plunch me">
                                <div className="dash-msg-avatar"><img src="assets/img/user-8.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>looked up one of the more obscure Latin words, consectetur, from a Lorem</p></div>
                              </div>
                              <div className="message-plunch">
                                <div className="dash-msg-avatar"><img src="assets/img/user-1.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p></div>
                              </div>
                              <div className="message-plunch me">
                                <div className="dash-msg-avatar"><img src="assets/img/user-8.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>please consider donating a small sum to help pay for the hosting and bandwidth bill.</p></div>
                              </div>
                              <div className="message-plunch">
                                <div className="dash-msg-avatar"><img src="assets/img/user-1.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p></div>
                              </div>
                              <div className="message-plunch me">
                                <div className="dash-msg-avatar"><img src="assets/img/user-8.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></div>
                              </div>
                              <div className="message-plunch">
                                <div className="dash-msg-avatar"><img src="assets/img/user-1.jpg" alt="" /></div>
                                <div className="dash-msg-text"><p>But I must explain to you how all this mistaken idea of denouncing pleasure</p></div>
                              </div>
                              {/* Reply Area */}
                              <div className="clearfix" />
                              <div className="message-reply">
                                <textarea cols={40} rows={3} className="form-control with-light" placeholder="Your Message" defaultValue={""} />
                                <button type="submit" className="btn theme-bg text-white">Send Message</button>
                              </div>
                            </div>
                            {/* Message Content */}
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
							<div class="py-3">© 2022 Goodup. Designd By ThemezHub.</div>
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

export default Bmessage
