import React from 'react'

const Download = () => {
  return (
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
                      {/* <div className="position-relative row">
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
                      </div> */}
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
  )
}

export default Download
