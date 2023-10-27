import React from 'react'
import { Link } from 'react-router-dom'

const Headerbusiness = () => {
  return (
    <div className="header header-light dark-text">
            <div className="container">
              <nav id="navigation" className="navigation navigation-landscape">
                <div className="nav-header">
                  <a  className="nav-brand" href="/businesshome">
                    <img src="assets/img/logoss.png" className="logo" alt="" />
                  </a>
                  <div className="nav-toggle" />
                  <div className="mobile_nav">
                    <ul>
                      <li>
                       <a href="/bdashboard"  className="theme-cl fs-lg">
                          <i className="lni lni-user" />
                        </a> 
                         {/* <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="theme-cl fs-lg">
                          <i className="lni lni-user" />
                        </a>  */}
                      </li>
                      <li>
                        <a href="add-listing.html" className="crs_yuo12 w-auto text-white theme-bg">
                          <span className="embos_45"><i className="fas fa-plus me-2" />Add Listing</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                  <ul className="nav-menu">
                    <li><a href="javascript:void(0);">Products</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li><a href="/business">Business Page</a></li>
                        <li><a href="/upgrade">Upgarde Package</a></li>
                        <li><a href="/boricuaads">Boricua Directory Ads</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0);">Industries</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li><a href="/homelocalservices">Home and Local Services</a>
                        </li>
                        <li><a href="/homelocalservices">Restaurant and Night Life</a>
                        </li>
                        <li><a href="/homelocalservices">National and Regional Brands</a>
                        </li>
                        <li><a href="/homelocalservices">Marketing &amp; Advertising Agencies</a>
                        </li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0);">Support</a>
                    </li>
                    <li><a href="javascript:void(0);">Resources</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li><a href="/smallbusniess">Small Business Guide</a></li>
                        <li><a href="/resource">Resource Center</a></li>
                        <li><a href="/event">Events</a></li>
                        <li><a href="/event">Podcasts</a></li>
                        <li><a href="/bblog">Blog</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="nav-menu nav-menu-social align-to-right">
                     <li>
                      <a href="/bdashboard" className="ft-bold">
                      <i class="fas fa-user-plus me-1 theme-cl"></i>
                      </a>
                    </li> 

{/* <li>
                      <a href="/" className="ft-bold">
                        <i className="fas fa-sign-in-alt me-1 theme-cl" />LogOut
                      </a>
                    </li> */}
                    <li className="add-listing">
                      <a href="#">
                        Verify my free listing
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
  )
}

export default Headerbusiness
