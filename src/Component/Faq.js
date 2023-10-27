import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useEffect , useState } from 'react'
import apiurl from './config'
import axios from 'axios'

const Faq = () => {

    const [policyData, setPolicyData] = useState([]);
    
  useEffect(() => {
    getData();
  

  }, []);
  const getData = () => {
    axios.get(`${apiurl[0].apiUrl}React/get_faq`).then((res) => 
    
    setPolicyData(res.data.data));
    
    
  };
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
      
      {/* End Navigation */}
      <div className="clearfix" />
      <Header/>
      {/* ============================================================== */}
      {/* Top header  */}
      {/* ============================================================== */}
      {/* ======================= Top Breadcrubms ======================== */}
     
      {/* ======================= Top Breadcrubms ======================== */}
      {/* ======================= FAQ's Detail ======================== */}
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-4">
                <h1 className="ft-bold mb-0">FAQ's Section</h1>
                <h3 className="ft-medium pt-1 mb-3">Frequently Asked Questions</h3>
              </div>
            </div>
          </div>


          <div className="row align-items-center justify-content-between">
            <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <div className="d-block position-relative mb-4">
                <h4 className="ft-medium">Basic FAQ's:</h4>

                <div id="accordion" className="accordion">
                 
                 {policyData.map((faq)=>{
                    return(
                        <div className="card">
                        <div className="card-header" id="h1">
                          <h5 className="mb-0">
                            <button className="btn btn" data-bs-toggle="collapse" data-bs-target="#ord1" aria-expanded="true" aria-controls="ord1" dangerouslySetInnerHTML={{ __html: faq?.question }} />
                               
                           </h5>
                        </div>
                        <div id="ord1" className="collapse show" aria-labelledby="h1" data-parent="#accordion">
                          <div className="card-body" dangerouslySetInnerHTML={{ __html: faq?.answer }}>
                            
                          </div>
                        </div>
                      </div>
                    )
                 })}
                 
                  
                </div>
                
              </div>
           
            </div>
          </div>
        </div>
      </section>

   <Footer/>

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

export default Faq
