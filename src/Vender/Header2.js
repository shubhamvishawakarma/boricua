import React from 'react'
import { Link } from 'react-router-dom'
const Header2 = () => {
  return (
    <div>
    <div className="header header-light dark-text head-border">
    <div className="container-fluid px-4">
      <nav id="navigation" className="navigation navigation-landscape">
        <div className="nav-header">
          <a className="nav-brand" href='/'>
            <img src="assets/img/logoss.png" className="logo" alt="" />
          </a>
          <div className="nav-toggle" />
          <div className="mobile_nav">
            <ul>
              <li>
                <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="theme-cl fs-lg">
                  <i className="lni lni-user" />
                </a>
              </li>
              <li>
                <a href="add-listing.html" className="crs_yuo12 w-auto text-white theme-bg">
                  <span className="embos_45"><i className="fas fa-plus me-2" />Add Listing</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menus-wrapper">
          <form className="main-search-wrap fl-wrap half-column">
            <div className="main-search-item">
              <span className="search-tag">Find</span>
              <input type="text" className="form-control radius" placeholder="Nail salons, plumbers, takeout..." />
            </div>
            <div className="main-search-item">
              <span className="search-tag">Where</span>
              <input type="text" className="form-control" placeholder="San Francisco, CA" />
            </div>
            <div className="main-search-button">
              <a href="/listingsearch">
              </a><button className="btn full-width theme-bg text-white" type="button"><a href="/listingsearch"><i className="fas fa-search" /></a></button>
            </div>
          </form>
          <ul className="nav-menu nav-menu-social align-to-right">
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#login" className="ft-bold">
                <i className="fas fa-sign-in-alt me-1 theme-cl" />Log In
              </a>
            </li>
            <li class=""><a href="#" data-bs-toggle="modal" data-bs-target="#login" class="crs_yuo12 w-auto text-black "><span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span></a></li>


            {/* <li class="">
										<a href="#" data-bs-toggle="modal" data-bs-target="#signup" class="crs_yuo12 w-auto text-black ">
											<span class="embos_45"><i class="fas fa-user-plus me-1 theme-cl"></i>Sign Up</span>
										</a>
									</li> */}
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <section className="cats-filters py-3">
  <div className="container-fluid px-4">
    <div className="row justify-content-between align-items-center">
      <div className="col-xl-9 col-lg-9 col-md-9 col-12">
        <div className="Goodup-all-drp">
          <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Restaurants</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/fast-delivery.png" className="img-fluid" width={20} alt="" />Delivery</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/burger.png" className="img-fluid" width={20} alt="" />Burgers</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/booking.png" className="img-fluid" width={20} alt="" />Reservations</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/house.png" className="img-fluid" width={20} alt="" />Japanese</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/chinese-food.png" className="img-fluid" width={20} alt="" />Chinese</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/mexican-hat.png" className="img-fluid" width={20} alt="" />Mekician</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/dish.png" className="img-fluid" width={20} alt="" />Italian</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/tom-yum.png" className="img-fluid" width={20} alt="" />Thai</a></li>
              </ul>
            </div>
          </div>
          <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Home Services</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/hammer.png" className="img-fluid" width={20} alt="" />Contractors</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/coconut-tree.png" className="img-fluid" width={20} alt="" />Landscaping</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/broken-cable.png" className="img-fluid" width={20} alt="" />Electricians</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/padlock.png" className="img-fluid" width={20} alt="" />Locksmiths</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/basket.png" className="img-fluid" width={20} alt="" />Home Cleaning</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/delivery-truck.png" className="img-fluid" width={20} alt="" />Movers</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/home.png" className="img-fluid" width={20} alt="" />HVAC</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/plumbering.png" className="img-fluid" width={20} alt="" />Plumbers</a></li>
              </ul>
            </div>
          </div>
          <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Auto Services</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/wrench.png" className="img-fluid" width={20} alt="" />Auto Repairs</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/rental-car.png" className="img-fluid" width={20} alt="" />Car Dealers</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/sketch.png" className="img-fluid" width={20} alt="" />Auto Detailing</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/oil.png" className="img-fluid" width={20} alt="" />Oil Change</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/shopping-bag.png" className="img-fluid" width={20} alt="" />Body Shops</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/parking.png" className="img-fluid" width={20} alt="" />Parking</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/car-wash.png" className="img-fluid" width={20} alt="" />Car Wash</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/tow-truck.png" className="img-fluid" width={20} alt="" />Towing</a></li>
              </ul>
            </div>
          </div>
          <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/towel-hanger.png" className="img-fluid" width={20} alt="" />Dry Cleaning</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/salon.png" className="img-fluid" width={20} alt="" />Hair salons</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/smartphone.png" className="img-fluid" width={20} alt="" />Phone Repair</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/weights.png" className="img-fluid" width={20} alt="" />Gyms</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/cocktail.png" className="img-fluid" width={20} alt="" />Bars &amp; cafe</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/spa.png" className="img-fluid" width={20} alt="" />Massage</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/poinsettia.png" className="img-fluid" width={20} alt="" />Nightlife</a></li>
                <li><a className="dropdown-item" href="/listingsearch"><img src="assets/img/icons/online-shopping.png" className="img-fluid" width={20} alt="" />Shopping</a></li>
              </ul>
            </div>
          </div>
          {/* <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn active" onclick="openSearch()">Filters<i className="filt-count">3</i></button>
            </div>
          </div> */}
          {/* <div className="Goodup-single-drp small">
            <div className="btn-group">
              <button type="button" className="btn bg-dark text-light">Update</button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="col-xl-3 col-lg-3 col-md-3 col-12">
        <div className="text-right"><button className="map-btn" onclick="removeClass()">Map<i className="fas fa-map ms-1" /></button></div>
      </div> */}
    </div>
  </div>
</section>
</div>
  )
}

export default Header2


