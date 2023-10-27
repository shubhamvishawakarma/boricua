import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Author = () => {
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
      {/* ============================ Main Section Start ================================== */}
      <section className="gray">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="author-wrap-ngh">
                <div className="online">Online Now</div>
                <div className="author-wrap-head-ngh">
                  <div className="author-wrap-ngh-thumb">
                    <img src="assets/img/t-1.png" className="img-fluid circle" alt="" />
                  </div>
                  <div className="author-wrap-ngh-info">
                    <h5>Kumar Denver Preet</h5>
                    <div className="Goodup-location"><i className="fas fa-map-marker-alt" />California, USA</div>
                  </div>
                </div>
                <div className="author-wrap-caption-ngh">
                  <div className="author-wrap-jhyu-ngh">
                    <ul>
                      <li>
                        <div className="gdup-kvty">
                          <div className="gdup-kvty-icon bg-light-sky text-sky"><i className="fas fa-file" /></div>
                          <div className="gdup-kvty-ctr"><h6 className="count">310</h6></div>
                          <div className="gdup-kvty-text">Listings</div>
                        </div>
                      </li>
                      <li>
                        <div className="gdup-kvty">
                          <div className="gdup-kvty-icon bg-light-warning text-warning"><i className="fas fa-thumbs-up" /></div>
                          <div className="gdup-kvty-ctr"><h6 className="count">22</h6><span>K</span></div>
                          <div className="gdup-kvty-text">Followers</div>
                        </div>
                      </li>
                      <li>
                        <div className="gdup-kvty">
                          <div className="gdup-kvty-icon bg-light-danger text-danger"><i className="fas fa-heart" /></div>
                          <div className="gdup-kvty-ctr"><h6 className="count">206</h6></div>
                          <div className="gdup-kvty-text">Followings</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="author-wrap-yuio-ngh mt-5">
                    <div className="row g-4">
                      <div className="col-6">
                        <a href="javascript:void(0);" className="adv-btn full-width">Follow Now</a>	
                      </div>
                      <div className="col-6">
                        <a href="javascript:void(0);" className="adv-btn full-width">Send Message</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="author-wrap-footer-ngh">
                  <ul>
                    <li>
                      <div className="jhk-list-inf">
                        <div className="jhk-list-inf-ico"><i className="fas fa-envelope" /></div>
                        <div className="jhk-list-inf-caption"><h5>Mail Us</h5><p>supports@Goodup.co.uk</p></div>
                      </div>
                    </li>
                    <li>
                      <div className="jhk-list-inf">
                        <div className="jhk-list-inf-ico"><i className="fas fa-phone" /></div>
                        <div className="jhk-list-inf-caption"><h5>Make Call</h5><p>(210) 659 584 756</p></div>
                      </div>
                    </li>
                    <li>
                      <div className="jhk-list-inf">
                        <div className="jhk-list-inf-ico"><i className="fas fa-map-marker-alt" /></div>
                        <div className="jhk-list-inf-caption"><h5>Get Direction</h5><p>2919 N Flores St San Antonio, TX 78212</p></div>
                      </div>
                    </li>
                    <li>
                      <div className="jhk-list-inf">
                        <div className="jhk-list-inf-ico"><i className="fas fa-globe" /></div>
                        <div className="jhk-list-inf-caption"><h5>Live Web:</h5><p>https://www.Goodup.com/</p></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="auth-filter-headers">
                <div className="auth-filter-headers-title">
                  <h5 className="ft-bold fs-md m-0">You have total<span className="theme-cl px-2">412</span>Listings</h5>
                </div>
                <div className="auth-filter-headers-filts">
                  <ul className="no-ul-list">
                    <li>
                      <input id="alls" className="checkbox-custom" name="alls" type="checkbox" defaultChecked />
                      <label htmlFor="alls" className="checkbox-custom-label">All</label>
                    </li>
                    <li>
                      <input id="pls" className="checkbox-custom" name="pls" type="checkbox" />
                      <label htmlFor="pls" className="checkbox-custom-label">Places</label>
                    </li>
                    <li>
                      <input id="prty" className="checkbox-custom" name="prty" type="checkbox" />
                      <label htmlFor="prty" className="checkbox-custom-label">Property</label>
                    </li>
                    <li>
                      <input id="crs" className="checkbox-custom" name="crs" type="checkbox" />
                      <label htmlFor="crs" className="checkbox-custom-label">Cars</label>
                    </li>
                    <li>
                      <input id="htls" className="checkbox-custom" name="htls" type="checkbox" />
                      <label htmlFor="htls" className="checkbox-custom-label">Hotels</label>
                    </li>
                    <li>
                      <input id="jbsd" className="checkbox-custom" name="jbsd" type="checkbox" />
                      <label htmlFor="jbsd" className="checkbox-custom-label">Jobs</label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* row */}
              <div className="row justify-content-center gx-3">
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-1.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Wedding</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Rajwara Marriage Home<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Liverpool, London UK</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 795 4526</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average high">4.3</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">2 min ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status close me-2">Closed</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-2.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-2.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Sports</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Decathlon Sport House<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />San Denever, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 874 6310</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">3.5</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">10 min ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-3.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-3.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Hotels</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">The Gold Hotel Lalit<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />California, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 874 2140</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average high">4.4</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">3 Hours ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">open</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-4.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-4.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Zym &amp; Health</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Fitness Revolution Gym<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />New Wshington, UK</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 368 740 5100</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">4.9</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">1 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status close me-2">Closed</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-5.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-5.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Beauty &amp; Makeup</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Pretty Woman Smart Batra<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Shiv Narkilla, Brazil</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 854 7230</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">3.2</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">2 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-6.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-6.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Night Party</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">The Sartaj Blue Night<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />San Francisco, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 635 890 7500</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average high">4.5</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">3 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status close me-2">Closed</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-7.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-7.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Cafe &amp; Bar</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Pizza Delight Cafe<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Liverpool, London</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 639 572 4160</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average poor">2.8</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">4 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-8.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-8.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Shopping Mall</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">The Great Allante Shop<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Old california, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 874 1400</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">3.7</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">3 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-9.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-1.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Wedding</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Rajwara Marriage Home<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />Liverpool, London UK</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 795 4526</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average high">4.3</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">2 min ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status close me-2">Closed</div>
                      </div> */}
                      
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-10.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-2.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Sports</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Decathlon Sport House<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />San Denever, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 874 6310</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">3.5</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">10 min ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-featured-tag">Featured</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-11.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-3.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Hotels</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">The Gold Hotel Lalit<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />California, USA</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 365 874 2140</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average high">4.4</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">3 Hours ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn"><button type="button"><i className="lni lni-heart-filled position-absolute" /></button></div>
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">open</div>
                      </div> */}
                      <div className="Goodup-grid-thumb">
                        <a href="/singlelistingdeail" className="d-block text-center m-auto"><img src="assets/img/listing/l-12.jpg" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author"><a href="#"><img src="assets/img/t-4.png" className="img-fluid circle" alt="" /></a></div>
                        <div className="Goodup-cates"><a href="/listingsearch">Zym &amp; Health</a></div>
                        <h4 className="mb-0 ft-medium medium"><a href="/singlelistingdeail" className="text-dark fs-md">Fitness Revolution Gym<span className="verified-badge"><i className="fas fa-check-circle" /></span></a></h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location"><i className="fas fa-map-marker-alt" />New Wshington, UK</div>
                          {/* <div className="Goodup-call"><i className="fas fa-phone-alt" />+91 368 740 5100</div> */}
                        </div>
                      </div>
                      <div className="Goodup-grid-footer py-3 px-3">
                        <div className="Goodup-ft-first">
                          <div className="Goodup-rating">
                            <div className="Goodup-pr-average mid">4.9</div>
                            <div className="Goodup-rates">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          {/* <div className="Goodup-price-range">
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span className="active"><i className="fas fa-dollar-sign" /></span>
                            <span><i className="fas fa-dollar-sign" /></span>
                          </div> */}
                        </div>
                        {/* <div className="Goodup-ft-last">
                          <span className="small">1 days ago</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row */}
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="fas fa-arrow-circle-right" />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item active"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                    <li className="page-item"><a className="page-link" href="#">18</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="fas fa-arrow-circle-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Main Section End ================================== */}
      {/* ======================= Newsletter Start ============================ */}
      <section className="space bg-cover" style={{background: '#03343b url(assets/img/landing-bg.png) no-repeat'}}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-light mb-0">Subscribr Now</h6>
                <h2 className="ft-bold text-light">Get All Updates &amp; Advance Offers</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="form-group mb-0 position-relative">
                      <input type="text" className="form-control b-0" placeholder="Enter Your Email Address" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="form-group mb-0 position-relative">
                      <button className="btn full-width btn-height theme-bg text-light fs-md" type="button">Subscribe</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Newsletter Start ============================ */}
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

export default Author
