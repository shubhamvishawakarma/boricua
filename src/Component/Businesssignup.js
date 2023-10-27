import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import { ToastContainer, toast } from 'react-toastify';
import apiurl from './config';
import Header from './Header';


const Businesssignup = () => {
    let navigate=useNavigate()
    
    let [statemsg, setstatemsg] = useState()
    let [catemsg, setcatmsg] = useState()
    let [subcatemsg, subsetcatmsg] = useState()
    let [emailmsg, setemailmsg] = useState()

    
    let [showstate, setshowstatet] = useState([])
    let [showcategory, setshowcategory] = useState([])
    let [subcategory, setshowsubcategory] = useState([])
    let [statesname, setstatesname] = useState("")
    let [statesid, setstatesid] = useState()
    let [storecategoryid, setstorecategoryid] = useState()
    let [catename, setcatesname] = useState("")
    let token = secureLocalStorage.getItem("token");
    let id = secureLocalStorage.getItem("_id");
    let latitude = secureLocalStorage.getItem("latitude");
    let longitude = secureLocalStorage.getItem("longitude");

    let [storesub_cate_id, setstoresub_cate_id] = useState([])
    let [storesub_name, setstoresub_name] = useState([])

    let [inputvalue, setinputvalue] = useState(
        {
            "user_id": id,
            "business_name": "",
            "vendor_address": "",
            "state_id": statesid,
            "landmark": "",
            "category_id": storecategoryid,
            "sub_category_id": storesub_cate_id,
            "vendor_lat": latitude,
            "vendor_long": longitude,
            "vendor_email": "",
            "vendor_contact": "",
            "website": "",
            "discription": "",
            "about": "",
        }
    )




    useEffect(() => {
        try {
            axios.get(`${apiurl[0].apiUrl}React/get_states`).then((res) => {
                
                setshowstatet(res.data.data)
            }).catch((err) => {

            })
        } catch (error) {

        }
    }, [showstate, statesname, statesid])

    
    let getstatename = (statename, id) => {
        
        setstatesname(statename)
        setstatesid(id)
        
    }

   
    useEffect(() => {

        const data = {
            user_id: id,
        };
        try {
            axios.post(`${apiurl[0].apiUrl}React/category_list_react`, data, {
                headers: {
                    Authorization: `${token}`,
                },
            }).then((res) => {
                
                setshowcategory(res.data.data)
            }).catch((err) => {

            })
        } catch (error) {

        }
    }, [showcategory, id])

    
    let category_name = (catename, categoryid) => {
        
        setcatesname(catename)
        setstorecategoryid(categoryid)

    }

   
    useEffect(() => {
        const data = {
            user_id: id,
            category_id: storecategoryid
        };
        
        try {
            axios.post(`${apiurl[0].apiUrl}React/sub_category_list_react`, data, {
                headers: {
                    Authorization: `${token}`,
                },
            }).then((res) => {
                
                setshowsubcategory(res.data.data)
            }).catch((err) => {

            })
        } catch (error) {

        }
    }, [subcategory, storecategoryid, id])


    let getsubcate_chk = (id, name) => {
        if (storesub_cate_id.includes(name)) {
            setstoresub_name(storesub_name.filter(item => item !== name));
        } else {
            
            setstoresub_name([...storesub_name, name]);
        }

        if (storesub_cate_id.includes(id, name)) {
            
            setstoresub_cate_id(storesub_cate_id.filter(item => item !== id && item !== name));
        } else {
            
            setstoresub_cate_id([...storesub_cate_id, id, name]);
        }
    }

    
    let inputHandel = (event) => {
        setinputvalue({ ...inputvalue, [event.target.name]: event.target.value })
    }

    let FormHandel = (event) => {
        event.preventDefault()
        let chkemail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
        try {
            let data = {
                "user_id": id,
                "business_name": inputvalue.business_name,
                "vendor_address": inputvalue.business_name,
                "state_id": statesid,
                "landmark": inputvalue.landmark,
                "category_id": storecategoryid,
                "sub_category_id": storesub_cate_id.toString(),
                "vendor_lat": latitude,
                "vendor_long": longitude,
                "vendor_email": inputvalue.vendor_email,
                "vendor_contact": inputvalue.vendor_contact,
                "website": inputvalue.website,
                "discription": inputvalue.discription,
                "about": inputvalue.about,
            }

            if (statesid == null) {
                setstatemsg("Pleace select state")
            } else if (storecategoryid == null) {
                setcatmsg("Pleace select category")
            } else if (storesub_cate_id.length <= 0) {
                subsetcatmsg("Pleace select Subcategory")
            } else if (!chkemail.test(inputvalue.vendor_email)) {
                setemailmsg("Pleace enter right email")
            } else {
               
                axios.post(`${apiurl[0].apiUrl}React/vendor_signup_react`, data, {
                    headers: {
                        Authorization: `${token}`,
                    },
                }).then((res) => {
                    
                    if (res.data.result) {
                        toast.success(res.data.msg)
                        navigate(`/`)
                    }
                }).catch((error) => {
                })
            }


        } catch (error) {
        }
    }


    return (
        <div>
            <div className="preloader" />
            <div id="main-wrapper">
            <Header/>

            <ToastContainer position='top-center' />
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">


                <font style={{ color: "blue" }}></font>

                <form className="submit-form" onSubmit={FormHandel}>
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                            <div className="dashboard-list-wraps-flx">
                                <h4 className="mb-0 ft-medium fs-md">
                                    <i className="fa fa-user-check me-2 theme-cl fs-sm" />
                                    Bussiness Details
                                </h4>
                            </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Bussiness Name</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            name='business_name'
                                            onChange={inputHandel}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div class="form-group dropdown">
                                        <label className="mb-1"></label>
                                        <h6 style={{ cursor: "pointer" }} className="form-control rounded" data-toggle="modal" data-target="#myModal">{statesname == "" ? ("Select State") : (statesname)}</h6>
                                        <h6 style={{ color: "red" }}>{statemsg}</h6>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Address</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            name='vendor_address'
                                            onChange={inputHandel}
                                            required


                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Landmark</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            name='landmark'
                                            onChange={inputHandel}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div class="form-group dropdown">
                                        <label className="mb-1"></label>
                                        <h6 style={{ cursor: "pointer" }} className="form-control rounded" data-toggle="modal" data-target="#category">{catename == "" ? ("Select Category") : (catename)}</h6>
                                        <h6 style={{ color: "red" }}>{catemsg}</h6>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1"></label>
                                        {storecategoryid?.length > 0 ? (<span style={{ cursor: "pointer" }} className="form-control rounded" data-toggle="modal" data-target="#subcategory">SubCategory</span>) : (<span style={{ cursor: "pointer" }} className="form-control rounded" >SubCategory</span>)}
                                        <h6 style={{ color: "red" }}>{subcatemsg}</h6>
                                        {storesub_name?.map((items) => {

                                            return (
                                                <span>{items},</span>
                                            )

                                        })}
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Email</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            name='vendor_email'
                                            onChange={inputHandel}
                                            required
                                        />
                                        <h6 style={{ color: "red" }}>{emailmsg}</h6>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Contcat Number</label>
                                        <input
                                            type="number"
                                            className="form-control rounded"
                                            name='vendor_contact'
                                            onChange={inputHandel}
                                            required


                                        />
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Website</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            name='website'
                                            onChange={inputHandel}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">Description</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            placeholder='Describe your bussiness `min 300 characters `'
                                            name='discription'
                                            onChange={inputHandel}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label className="mb-1">About</label>
                                        <input
                                            type="text"
                                            className="form-control rounded"
                                            placeholder='About your lost optional'
                                            name='about'
                                            onChange={inputHandel}
                                            required


                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group text-center">
                            <button
                                type="submit"
                                className="btn theme-bg rounded text-light"

                            >
                                Sign-up
                            </button>
                        </div>
                    </div>
                </form>
            </div>




            {/* the state */}
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            {showstate?.map((items) => {
                                return (
                                    <>
                                        <p style={{ color: "black", cursor: "pointer" }} data-dismiss="modal" onClick={() => getstatename(items.name, items.id)}>{items.name}</p>
                                        <hr />
                                    </>
                                )
                            })}
                        </div>
                        <div class="modal-footer" style={{ display: "none" }}>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* The category */}
            <div className="modal" id="category">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            {showcategory?.map((items) => {
                                return (
                                    <>
                                        <p style={{ color: "black", cursor: "pointer" }} data-dismiss="modal" onClick={() => category_name(items.category_name, items.id)}>{items.category_name}</p>
                                        <hr />
                                    </>
                                )
                            })}
                        </div>
                        <div class="modal-footer" style={{ display: "none" }}>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* subcategory Modal */}
            <div className="modal" id="subcategory">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            {subcategory?.map((items) => {
                                return (
                                    <>
                                        <p style={{ color: "black", cursor: "pointer" }}> <input type="checkbox"
                                            onChange={() => getsubcate_chk(items.id, items.sub_category_name)}
                                            checked={storesub_cate_id.includes(items.id, items.sub_category_name)}
                                        /> {items.sub_category_name}</p>
                                        <hr />
                                    </>
                                )
                            })}
                        </div>
                        <div class="modal-footer" >
                            <span data-dismiss="modal" style={{ color: "black", cursor: "pointer" }}>Chancel</span>
                            <span data-dismiss="modal" style={{ color: "black", cursor: "pointer" }}>Add</span>
                        </div>
                        <div class="modal-footer" style={{ display: "none" }}>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
        </div>
    )
}

export default Businesssignup


