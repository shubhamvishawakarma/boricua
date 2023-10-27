import React from "react";
import { Link } from "react-router-dom";
import Header2 from "./Header2";
const Halfmapsearch = () => {
  return (
    <div>
      {/* <div className="preloader" />  */}

      {/* Main wrapper - style you can find in pages.scss */}

      <div id="main-wrapper">
        <Header2 />

        {/* ============================ Search Tag & Filter End ================================== */}
        {/* ============================ Map & Listing  Start================================== */}
        <div id="map-opt" className="home-map-banner half-map">
          <div className="fs-left-map-box">
            <div className="home-map fl-wrap">
              <div className="hm-map-container fw-map">
                <div id="map" />
              </div>
            </div>
          </div>
          <div className="fs-inner-container">
            <div className="fs-content gray">
              {/* row */}
              <div className="row justify-content-center gx-3">
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                        <a
                          href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                          <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                          <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                        <a
                          href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                          <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                          <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                        <a
                          href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                          <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                          <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                        <a
                          href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      {/* <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute" />
                        </button>
                      </div> */}
                      {/* <div class="Goodup-pos ab-left">
                  <div class="Goodup-status open me-2">Open</div>
                  <div class="Goodup-featured-tag">Featured</div>
                </div> */}
                      <div className="Goodup-grid-thumb">
                      <a href="/singlelisting"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src="assets/img/listing/o.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        {/* <div class="Goodup-author"><Link to="/singlelisting"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""></a></div> */}
                        <div className="Goodup-cates">
                        <a href="/singlelisting">Restaurants</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                        <a href="/singlelisting" className="text-dark fs-md">
                            Muraliwala Family Restaurant
                          </a>
                        </h4>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-location">
                            <i className="fas fa-map-marker-alt" />
                            Liverpool, London UK
                          </div>
                          {/* <div className="Goodup-call">
                            <a href>
                              {" "}
                              <i className="fas fa-phone-alt" />
                              +91 365 795 4526
                            </a>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixhs">Open</span> til
                              8:00 PM
                            </p>
                          </div> */}
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
                          {/* 	<div class="Goodup-price-range">
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                      <span class="active"><i class="fas fa-dollar-sign"></i></span>
                    </div> */}
                        </div>
                        {/* <div class="Goodup-ft-last">
                    <span class="small">2 min ago</span>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="fas fa-arrow-circle-right" />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        18
                      </a>
                    </li>
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
        <div className="clearfix" />
        {/* ============================ Map & Listing End ================================== */}
        {/* Drop Your Review */}
        {/* 	<div class="col-xl-9 col-lg-9 col-md-9 col-12">
          <div class="bg-white rounded mb-4">
            <div class="jbd-01 px-4 py-4">
              <div class="jbd-details mb-4">
                <h5 class="ft-bold fs-lg">Drop Your Review</h5>
                <div class="review-form-box form-submit mt-3">
                  <form>
                    <div class="row">
                      
                      <div class="col-lg-9 col-md-9 col-sm-9">
                        <div class="form-group mb-3">
                          <label class="ft-medium small mb-1">Choose Rate</label>
                          <select class="form-control rounded">
                            <option>Choose Rating</option>
                            <option>1 Star</option>
                            <option>2 Star</option>
                            <option>3 Star</option>
                            <option>4 Star</option>
                            <option>5 Star</option>
                          </select>
                        </div>
                      </div>
                      
                      <div class="col-lg-4 col-md-4 col-sm-8">
                        <div class="form-group mb-3">
                          <label class="ft-medium small mb-1">Name</label>
                          <input class="form-control rounded" type="text" placeholder="Your Name">
                        </div>
                      </div>
                      
                      <div class="col-lg-4 col-md-4 col-sm-8">
                        <div class="form-group mb-3">
                          <label class="ft-medium small mb-1">Email</label>
                          <input class="form-control rounded" type="email" placeholder="Your Email">
                        </div>
                      </div>
                      
                      <div class="col-lg-9 col-md-9 col-sm-9">
                        <div class="form-group mb-3">
                          <label class="ft-medium small mb-1">Review</label>
                          <textarea class="form-control rounded ht-140" placeholder="Review"></textarea>
                        </div>
                      </div>
                      
                      <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                          <button type="submit" class="btn theme-bg text-light rounded">Submit Review</button>
                        </div>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Log In Modal */}
        <div
          className="modal fade"
          id="login"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
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
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Username*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/c-1.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        {/* Sign up Modal */}
        <div
          className="modal fade"
          id="signup"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signupmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="signupmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
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
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Firstname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Last Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Lastname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">User Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Username*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="email"
                      className="form-control rounded bg-light"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/c-1.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        {/* Search */}
        <div
          className="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right"
          style={{ display: "none", right: 0 }}
          id="Search"
        >
          <div className="rightMenu-scroll">
            <div className="d-flex align-items-center justify-content-between slide-head py-3 px-3">
              <h4 className="cart_heading fs-md ft-medium mb-0">
                Filter Option
              </h4>
              <button onclick="closeSearch()" className="close_slide">
                <i className="ti-close" />
              </button>
            </div>
            <div className="search-inner">
              <div className="side-filter-box">
                <div className="side-filter-box-body">
                  {/* Price Range */}
                  <div className="inner_widget_link">
                    <div className="btn-group d-flex justify-content-around price-btn-457">
                      <button type="button" className="btn">
                        $
                      </button>
                      <button type="button" className="btn">
                        $$
                      </button>
                      <button type="button" className="btn active d14ixh">
                        $$$
                      </button>
                      <button type="button" className="btn">
                        $$$$
                      </button>
                    </div>
                  </div>
                  {/* Suggested */}
                  <div className="inner_widget_link">
                    <h6 className="ft-medium">Suggested</h6>
                    <ul className="no-ul-list filter-list">
                      <li>
                        <input
                          id="a1"
                          className="checkbox-custom"
                          name="open"
                          type="checkbox"
                        />
                        <label htmlFor="a1" className="checkbox-custom-label">
                          Open Now
                        </label>
                      </li>
                      <li>
                        <input
                          id="a2"
                          className="checkbox-custom"
                          name="reservations"
                          type="checkbox"
                        />
                        <label htmlFor="a2" className="checkbox-custom-label">
                          Reservations
                        </label>
                      </li>
                      <li>
                        <input
                          id="a3"
                          className="checkbox-custom"
                          name="Mexican"
                          type="checkbox"
                        />
                        <label htmlFor="a3" className="checkbox-custom-label">
                          Mexican
                        </label>
                      </li>
                      <li>
                        <input
                          id="a4"
                          className="checkbox-custom"
                          name="Seafood"
                          type="checkbox"
                        />
                        <label htmlFor="a4" className="checkbox-custom-label">
                          Seafood
                        </label>
                      </li>
                      <li>
                        <input
                          id="a5"
                          className="checkbox-custom"
                          name="Takeout"
                          type="checkbox"
                        />
                        <label htmlFor="a5" className="checkbox-custom-label">
                          Takeout
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/* Features */}
                  <div className="inner_widget_link">
                    <h6 className="ft-medium">Features</h6>
                    <ul className="no-ul-list filter-list">
                      <li>
                        <input
                          id="a6"
                          className="checkbox-custom"
                          name="Kids"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="a6" className="checkbox-custom-label">
                          Good for Kids
                        </label>
                      </li>
                      <li>
                        <input
                          id="a7"
                          className="checkbox-custom"
                          name="Service"
                          type="checkbox"
                        />
                        <label htmlFor="a7" className="checkbox-custom-label">
                          Waiter Service
                        </label>
                      </li>
                      <li>
                        <input
                          id="a8"
                          className="checkbox-custom"
                          name="Open"
                          type="checkbox"
                        />
                        <label htmlFor="a8" className="checkbox-custom-label">
                          Open to All
                        </label>
                      </li>
                      <li>
                        <input
                          id="a9"
                          className="checkbox-custom"
                          name="Dogs"
                          type="checkbox"
                        />
                        <label htmlFor="a9" className="checkbox-custom-label">
                          Dogs Allowed
                        </label>
                      </li>
                      <li>
                        <input
                          id="a10"
                          className="checkbox-custom"
                          name="Outdoor"
                          type="checkbox"
                        />
                        <label htmlFor="a10" className="checkbox-custom-label">
                          Outdoor Seating
                        </label>
                      </li>
                      <li>
                        <input
                          id="a11"
                          className="checkbox-custom"
                          name="Hot"
                          type="checkbox"
                        />
                        <label htmlFor="a11" className="checkbox-custom-label">
                          Hot and New
                        </label>
                      </li>
                      <li>
                        <input
                          id="a12"
                          className="checkbox-custom"
                          name="Breakfast"
                          type="checkbox"
                        />
                        <label htmlFor="a12" className="checkbox-custom-label">
                          Breakfast
                        </label>
                      </li>
                      <li>
                        <a
                          className="ft-bold d14ixh"
                          href="javascript:void(0);"
                        >
                          See More
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Neighborhoods */}
                  <div className="inner_widget_link">
                    <h6 className="ft-medium">Neighborhoods</h6>
                    <ul className="no-ul-list filter-list">
                      <li>
                        <input
                          id="b1"
                          className="checkbox-custom"
                          name="Alta"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="b1" className="checkbox-custom-label">
                          Alta Vista
                        </label>
                      </li>
                      <li>
                        <input
                          id="b2"
                          className="checkbox-custom"
                          name="Monticello"
                          type="checkbox"
                        />
                        <label htmlFor="b2" className="checkbox-custom-label">
                          Monticello Park
                        </label>
                      </li>
                      <li>
                        <input
                          id="b3"
                          className="checkbox-custom"
                          name="Beacon"
                          type="checkbox"
                        />
                        <label htmlFor="b3" className="checkbox-custom-label">
                          Beacon Hill
                        </label>
                      </li>
                      <li>
                        <input
                          id="b4"
                          className="checkbox-custom"
                          name="Near"
                          type="checkbox"
                        />
                        <label htmlFor="b4" className="checkbox-custom-label">
                          Near Northwest
                        </label>
                      </li>
                      <li>
                        <input
                          id="b5"
                          className="checkbox-custom"
                          name="North"
                          type="checkbox"
                        />
                        <label htmlFor="b5" className="checkbox-custom-label">
                          North Central
                        </label>
                      </li>
                      <li>
                        <input
                          id="b6"
                          className="checkbox-custom"
                          name="Northwest1"
                          type="checkbox"
                        />
                        <label htmlFor="b6" className="checkbox-custom-label">
                          Northwest
                        </label>
                      </li>
                      <li>
                        <input
                          id="b7"
                          className="checkbox-custom"
                          name="Pecan"
                          type="checkbox"
                        />
                        <label htmlFor="b7" className="checkbox-custom-label">
                          Pecan Valley
                        </label>
                      </li>
                      <li>
                        <input
                          id="b8"
                          className="checkbox-custom"
                          name="Prospect"
                          type="checkbox"
                        />
                        <label htmlFor="b8" className="checkbox-custom-label">
                          Prospect Hill
                        </label>
                      </li>
                      <li>
                        <input
                          id="b9"
                          className="checkbox-custom"
                          name="South"
                          type="checkbox"
                        />
                        <label htmlFor="b9" className="checkbox-custom-label">
                          South Central
                        </label>
                      </li>
                      <li>
                        <a
                          className="ft-bold d14ixh"
                          href="javascript:void(0);"
                        >
                          See More
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Bird's-eye View */}
                  <div className="inner_widget_link">
                    <h6 className="ft-medium">Bird's-eye View</h6>
                    <ul className="no-ul-list filter-list">
                      <li>
                        <input
                          id="c1"
                          className="checkbox-custom"
                          name="blc"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="c1" className="checkbox-custom-label">
                          Within 4 blocks
                        </label>
                      </li>
                      <li>
                        <input
                          id="c2"
                          className="checkbox-custom"
                          name="1km"
                          type="checkbox"
                        />
                        <label htmlFor="c2" className="checkbox-custom-label">
                          Walking (1 mi.)
                        </label>
                      </li>
                      <li>
                        <input
                          id="c3"
                          className="checkbox-custom"
                          name="2km"
                          type="checkbox"
                        />
                        <label htmlFor="c3" className="checkbox-custom-label">
                          Biking (2 mi.)
                        </label>
                      </li>
                      <li>
                        <input
                          id="c4"
                          className="checkbox-custom"
                          name="5km"
                          type="checkbox"
                        />
                        <label htmlFor="c4" className="checkbox-custom-label">
                          Driving (5 mi.)
                        </label>
                      </li>
                      <li>
                        <input
                          id="c5"
                          className="checkbox-custom"
                          name="10km"
                          type="checkbox"
                        />
                        <label htmlFor="c5" className="checkbox-custom-label">
                          Driving (10 mi.)
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group filter_button">
                    <button
                      type="submit"
                      className="btn theme-bg text-light rounded full-width"
                    >
                      22 Results Show
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
      {/* ============================================================== */}
      {/* End Wrapper */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* All Jquery */}
      {/* ============================================================== */}
      {/* Map */}
      {/* ============================================================== */}
      {/* This page plugins */}
      {/* ============================================================== */}
    </div>
  );
};

export default Halfmapsearch;
