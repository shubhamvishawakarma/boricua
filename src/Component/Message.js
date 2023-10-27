import React from 'react'
import Header from './Header'
import secureLocalStorage from 'react-secure-storage'
import Navbardashboard from './Navbardashboard'
import Dashboardimage from './Dashboardimage'

const Message = () => {

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

export default Message
