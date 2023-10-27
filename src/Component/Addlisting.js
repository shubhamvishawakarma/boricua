import React from 'react'
import Header from './Header'
import secureLocalStorage from 'react-secure-storage'
import Navbardashboard from './Navbardashboard'
import Dashboardimage from './Dashboardimage'

const Addlisting = () => {
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
                <h1 className="ft-medium">Add Listing</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
                    <li className="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#" className="theme-cl">Add Listing</a></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="dashboard-widg-bar d-block">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="submit-form">
                  {/* Listing Info */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-file me-2 theme-cl fs-sm" />Listing Info</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Listing Tile</label>
                            <input type="text" className="form-control rounded" placeholder="Decathlon Sport House" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Categories</label>
                            <select className="form-control">
                              <option>Hotel &amp; Spa</option>
                              <option>Education</option>
                              <option>Wedding</option>
                              <option>Restaurents</option>
                              <option>Cafe &amp; Bars</option>
                              <option>Bankings</option>
                              <option>Services</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Keywords</label>
                            <input type="text" className="form-control rounded" placeholder="Type keywords by comma's" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">About Listing</label>
                            <textarea className="form-control rounded ht-150" placeholder="Describe your self" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Location Info */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-map-marker-alt me-2 theme-cl fs-sm" />Location Info</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Latitude</label>
                            <input type="text" className="form-control rounded" placeholder={8054256} />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Longitude</label>
                            <input type="text" className="form-control rounded" placeholder={-7254625} />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27437.803590312993!2d76.75937213955079!3d30.726117899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda9761bdc2f%3A0x5e764f7f18edc390!2sMidpoint%20Cafe!5e0!3m2!1sen!2sin!4v1649569611177!5m2!1sen!2sin" className="full-width" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">State</label>
                            <select className="form-control">
                              <option>Uttar Pradesh</option>
                              <option>Uttrakhand</option>
                              <option>Gujrat</option>
                              <option>Mumbai</option>
                              <option>Karnatak</option>
                              <option>Goa</option>
                              <option>Punjab</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">City</label>
                            <select className="form-control">
                              <option>Aligarh</option>
                              <option>Allahabad</option>
                              <option>Agra</option>
                              <option>Gonda</option>
                              <option>Lucknow</option>
                              <option>Meeruth</option>
                              <option>Gaziabad</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Address</label>
                            <input type="text" className="form-control rounded" placeholder="USA 20TH Berlin Market NY" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Zip Code</label>
                            <input type="text" className="form-control rounded" placeholder="HQ125478" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Mobile</label>
                            <input type="text" className="form-control rounded" placeholder="91 256 584 7895" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Email</label>
                            <input type="text" className="form-control rounded" placeholder="kumarsrikan@gmail.com" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Website</label>
                            <input type="text" className="form-control rounded" placeholder="https://www.kuamrsrikant.com/" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Image & Gallery Option */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-camera me-2 theme-cl fs-sm" />Image &amp; Gallery Option</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        {/* Logo */}
                        
                        <div className="col-lg-4 col-md-6">
                        
                          <label className="mb-1">Upload Logo</label>
                          <form action="https://themezhub.net/file-upload" className="dropzone" id="single-logo">
                           <i className="fas fa-upload" /> 
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                        {/* Featured Image */}
                        <div className="col-lg-4 col-md-6">
                          <label className="mb-1">Featured Image</label>
                          <form action="https://themezhub.net/file-upload" className="dropzone" id="featured-image">
                            <i className="fas fa-upload" />
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                        {/* Gallery */}
                        <div className="col-lg-4 col-md-12">
                          <label className="mb-1">Image Gallery</label>
                          <form action="https://themezhub.net/file-upload" className="dropzone" id="gallery">
                            <i className="fas fa-upload" />
                          </form>
                          <label className="smart-text">Maximum file size: 2 MB.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Menu Items */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fas fa-utensils me-2 theme-cl fs-sm" />Menu Items</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Item Name</label>
                            <input type="text" className="form-control rounded" placeholder="Spicy Brunchi Burger" />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Category</label>
                            <input type="text" className="form-control rounded" placeholder="Fast Food" />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">Price</label>
                            <input type="text" className="form-control rounded" placeholder="ex. 49 USD" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1">About Item</label>
                            <textarea className="form-control rounded ht-80" placeholder="Describe your Item" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="formFileLg" className="form-label">Upload Item Image</label>
                            <input className="form-control rounded" id="formFileLg" type="file" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <button type="button" className="btn theme-cl rounded theme-bg-light ft-medium">Add New</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Working hours */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-clock me-2 theme-cl fs-sm" />Working Hours</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Monday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Tuesday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Wednesday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Thursday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Friday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Saturday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row align-items-center">
                            <label className="control-label col-lg-2 col-md-2">Sunday</label>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control chosen-select">
                                <option>Opening Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                            <div className="col-lg-5 col-md-5">
                              <select className="form-control">
                                <option>Closing Time</option>
                                <option>1 :00 AM</option>
                                <option>2 :00 AM</option>
                                <option>3 :00 AM</option>
                                <option>4 :00 AM</option>
                                <option>5 :00 AM</option>
                                <option>6 :00 AM</option>
                                <option>7 :00 AM</option>
                                <option>8 :00 AM</option>
                                <option>9 :00 AM</option>
                                <option>10 :00 AM</option>
                                <option>11 :00 AM</option>
                                <option>12 :00 AM</option>
                                <option>1 :00 PM</option>
                                <option>2 :00 PM</option>
                                <option>3 :00 PM</option>
                                <option>4 :00 PM</option>
                                <option>5 :00 PM</option>
                                <option>6 :00 PM</option>
                                <option>7 :00 PM</option>
                                <option>8 :00 PM</option>
                                <option>9 :00 PM</option>
                                <option>10 :00 PM</option>
                                <option>11 :00 PM</option>
                                <option>12 :00 PM</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <input id="t24" className="checkbox-custom" name="24-1" type="checkbox" />
                          <label htmlFor="t24" className="checkbox-custom-label">This Business open 7x24</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Amenties Options */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="lni lni-coffee-cup me-2 theme-cl fs-sm" />Amenties Options</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="Goodup-all-features-list">
                            <ul>
                              <li>
                                <input id="am1" className="checkbox-custom" name="am1" type="checkbox" />
                                <label htmlFor="am1" className="checkbox-custom-label">Health Score 8.7 / 10</label>	
                              </li>
                              <li>
                                <input id="am2" className="checkbox-custom" name="am2" type="checkbox" />
                                <label htmlFor="am2" className="checkbox-custom-label">Reservations</label>	
                              </li>
                              <li>
                                <input id="am3" className="checkbox-custom" name="am3" type="checkbox" />
                                <label htmlFor="am3" className="checkbox-custom-label">Vegetarian Options</label>	
                              </li>
                              <li>
                                <input id="am4" className="checkbox-custom" name="am4" type="checkbox" />
                                <label htmlFor="am4" className="checkbox-custom-label">Moderate Noise</label>	
                              </li>
                              <li>
                                <input id="am5" className="checkbox-custom" name="am5" type="checkbox" />
                                <label htmlFor="am5" className="checkbox-custom-label">Good For Kids</label>	
                              </li>
                              <li>
                                <input id="am6" className="checkbox-custom" name="am6" type="checkbox" />
                                <label htmlFor="am6" className="checkbox-custom-label">Private Lot Parking</label>	
                              </li>
                              <li>
                                <input id="am7" className="checkbox-custom" name="am7" type="checkbox" />
                                <label htmlFor="am7" className="checkbox-custom-label">Beer &amp; Wine</label>	
                              </li>
                              <li>
                                <input id="am8" className="checkbox-custom" name="am8" type="checkbox" />
                                <label htmlFor="am8" className="checkbox-custom-label">TV Services</label>	
                              </li>
                              <li>
                                <input id="am9" className="checkbox-custom" name="am9" type="checkbox" />
                                <label htmlFor="am9" className="checkbox-custom-label">Pets Allow</label>	
                              </li>
                              <li>
                                <input id="am10" className="checkbox-custom" name="am10" type="checkbox" />
                                <label htmlFor="am10" className="checkbox-custom-label">Offers Delivery</label>	
                              </li>
                              <li>
                                <input id="am11" className="checkbox-custom" name="am11" type="checkbox" />
                                <label htmlFor="am11" className="checkbox-custom-label">Staff wears masks</label>	
                              </li>
                              <li>
                                <input id="am12" className="checkbox-custom" name="am12" type="checkbox" />
                                <label htmlFor="am12" className="checkbox-custom-label">Accepts Credit Cards</label>	
                              </li>
                              <li>
                                <input id="am13" className="checkbox-custom" name="am13" type="checkbox" />
                                <label htmlFor="am13" className="checkbox-custom-label">Offers Catering</label>	
                              </li>
                              <li>
                                <input id="am14" className="checkbox-custom" name="am14" type="checkbox" />
                                <label htmlFor="am14" className="checkbox-custom-label">Good for Breakfast</label>	
                              </li>
                              <li>
                                <input id="am15" className="checkbox-custom" name="am15" type="checkbox" />
                                <label htmlFor="am15" className="checkbox-custom-label">Waiter Service</label>	
                              </li>
                              <li>
                                <input id="am16" className="checkbox-custom" name="am16" type="checkbox" />
                                <label htmlFor="am16" className="checkbox-custom-label">Drive-Thru</label>	
                              </li>
                              <li>
                                <input id="am17" className="checkbox-custom" name="am17" type="checkbox" />
                                <label htmlFor="am17" className="checkbox-custom-label">Outdoor Seating</label>	
                              </li>
                              <li>
                                <input id="am18" className="checkbox-custom" name="am18" type="checkbox" />
                                <label htmlFor="am18" className="checkbox-custom-label">Offers Takeout</label>	
                              </li>
                              <li>
                                <input id="am19" className="checkbox-custom" name="am19" type="checkbox" />
                                <label htmlFor="am19" className="checkbox-custom-label">Vegan Options</label>	
                              </li>
                              <li>
                                <input id="am20" className="checkbox-custom" name="am20" type="checkbox" />
                                <label htmlFor="am20" className="checkbox-custom-label">Casual</label>	
                              </li>
                              <li>
                                <input id="am21" className="checkbox-custom" name="am21" type="checkbox" />
                                <label htmlFor="am21" className="checkbox-custom-label">Good for Groups</label>	
                              </li>
                              <li>
                                <input id="am22" className="checkbox-custom" name="am22" type="checkbox" />
                                <label htmlFor="am22" className="checkbox-custom-label">Brunch, Lunch, Dinner</label>	
                              </li>
                              <li>
                                <input id="am23" className="checkbox-custom" name="am23" type="checkbox" />
                                <label htmlFor="am23" className="checkbox-custom-label">Free Wi-Fi</label>	
                              </li>
                              <li>
                                <input id="am24" className="checkbox-custom" name="am24" type="checkbox" />
                                <label htmlFor="am24" className="checkbox-custom-label">Wheelchair Accessible</label>	
                              </li>
                              <li>
                                <input id="am25" className="checkbox-custom" name="am25" type="checkbox" />
                                <label htmlFor="am25" className="checkbox-custom-label">Happy Hour</label>	
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social Links */}
                  <div className="dashboard-list-wraps bg-white rounded mb-4">
                    <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                      <div className="dashboard-list-wraps-flx">
                        <h4 className="mb-0 ft-medium fs-md"><i className="fa fa-user-friends me-2 theme-cl fs-sm" />Social Links</h4>	
                      </div>
                    </div>
                    <div className="dashboard-list-wraps-body py-3 px-3">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-facebook theme-cl me-1" />Facebook</label>
                            <input type="text" className="form-control rounded" placeholder="https://facebook.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-twitter theme-cl me-1" />Twitter</label>
                            <input type="text" className="form-control rounded" placeholder="https://twitter.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-instagram theme-cl me-1" />Instagram</label>
                            <input type="text" className="form-control rounded" placeholder="https://instagram.com/" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label className="mb-1"><i className="ti-linkedin theme-cl me-1" />Linkedin</label>
                            <input type="text" className="form-control rounded" placeholder="https://linkedin.com/" />
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <button className="btn theme-bg rounded text-light">Submit &amp; Preview</button>
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
    {/* Date Booking Script */}
    {/* ============================================================== */}
    {/* This page plugins */}
    {/* ============================================================== */}		
  </div>
  )
}

export default Addlisting
