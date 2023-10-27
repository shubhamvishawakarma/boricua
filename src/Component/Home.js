import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Topcategory from "./Topcategory";
import Dealsoftheday from "./Dealsoftheday";
import Eventmain from "./Eventmain";
import Download from "./Download";
import Job from "./Job";
import Lesprasanto from "./Lespresento";
import Educational from "./Educational";
import Volunteering from "./Volunteering";
import apiurl from "./config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";
import Google from "./Google";
import Lugares from "./Lugares";
import Sabiasque from "./Sabiasque";

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  const [first_name, setFirstname] = useState("");

  const [output, setOutput] = useState("");
  const [last_name, setLastname] = useState("");
  const [user_email, setEmail] = useState("");
  const [zip, setZipcode] = useState("");
  const [user_password, setPassword] = useState("");

  const navigate = useNavigate();

  const [email, setEemail] = useState("");
  const [password, setPaassword] = useState("");
  const [currentToken, setCurrentToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setAddress(value);
    secureLocalStorage.setItem("valuee", value);

    secureLocalStorage.setItem("lat", JSON.stringify(latLng));
  };
  let latlongg = secureLocalStorage.getItem("lat");
  let parsevalue = JSON.parse(latlongg);
  const [details, setDetails] = useState(parsevalue);
  //console.log("detailssadsad",details)




  const handleSubmitt = (evt) => {
    evt.preventDefault();

    if (!email) {
      setOutput("*Email is required");
      return;
    } else if (!password) {
      setOutput("*Password is required");
      return;
    }

    const userDetails = {
      user_email: email,
      user_password: password,
      fcm_id: "12352",
      lat: latitude ? latitude : "22.75555",
      long: longitude ? longitude : "75.44444",
    };

    axios
      .post(`${apiurl[0].apiUrl}React/login_react_new`, userDetails)
      .then((response) => {
        if (response.data.result) {
          const responseData = response.data.userDetails;
          secureLocalStorage.setItem("_id", response.data.data.id);

          secureLocalStorage.setItem("token", response.data.data.token);

          toast.success(response.data.msg);

          setTimeout(() => {
            
            window.location.reload(navigate("/dashboard"));
          }, 2000);
        } else {
          if (response.data.message === "User not found") {
            setOutput("Invalid user. Please register first.");
          } else {
            setOutput("Invalid user or verify your account.");
          }
          setEemail("");
          setPaassword("");
        }
      })
      .catch((err) => {
        //console.log(err);
        setOutput("Incorrect email & password");
      });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!first_name) {
      setOutput("Please enter your First name.");
      return;
    }

    if (!last_name) {
      setOutput("Please enter your Last name.");
      return;
    }

    if (!zip) {
      setOutput("Please enter your zipcode.");
      return;
    }

    if (!user_email) {
      setOutput("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      setOutput("Please enter a valid email address.");
      return;
    }

    if (!user_password) {
      setOutput("Please enter a password.");
      return;
    }

    let userDetails = {
      first_name,
      last_name,
      user_email,
      user_password,
      zip,
      fcm_id: "12345",
    };
    //console.log("userDetailsadasdad", userDetails);
    try {
      const response = await axios.post(
        `${apiurl[0].apiUrl}React/user_signup_react`,
        userDetails
      );

      if (response.data.token !== "error") {
        // setOutput("User registered successfully.");
        toast.error(response.data.msg);

        setTimeout(() => {
          navigate("/");
        }, 3000);

        setFirstname("");
        setEmail("");
        setPassword("");
        setZipcode("");
        setLastname("");
      } else {
        setOutput(response.data.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.result === "false" &&
        error.response.data.message ===
          "user allready registered, please go to login page.."
      ) {
        setOutput(
          "The email is already registered. Please go to the login page."
        );
      } else {
        //console.log(error);
      }
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          secureLocalStorage.setItem("latitude", latitude);
          secureLocalStorage.setItem("longitude", longitude);
        },
        (error) => {
          //console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      //console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <Header />

      <div className="preloader" />

      <div id="main-wrapper">
        <div className="clearfix" />

        <div
          className="home-banner margin-bottom-0"
          style={{
            background: "#f41b3b url(assets/img/banner-2.jpg) no-repeat",
          }}
          data-overlay={5}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    Explore Great Place in Your Town
                  </h1>
                  <p className="fs-md ft-medium">
                    Explore wonderful place to stay, salon, shoping, massage or
                    visit local areas.
                  </p>
                </div>
                <form className="main-search-wrap fl-wrap">
                  <div className="main-search-item">
                    <PlacesAutocomplete
                      value={address}
                      onChange={(newValue) => setAddress(newValue)}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            style={{ width: "100%" }}
                            className="form-control"
                            {...getInputProps({
                              placeholder: "Enter Address",
                            })}
                          />
                          <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#41b6e6"
                                  : "#fff",
                              };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                    {/* <input
                      type="text"
                      className="form-control radius"
                      placeholder="Nail salons, plumbers, takeout..."
                    /> */}
                  </div>
                  {/* <div class="main-search-item">
                  <input type="text" class="form-control" placeholder="San Francisco, CA" />
                </div> */}
                  <div className="main-search-item">
                    <select className="form-control">
                      <option value>Choose Categories</option>
                      <option value={1}>Food </option>
                      <option value={2}>Services </option>
                      <option value={3}>House services</option>
                      <option value={4}>Artistic </option>
                      <option value={5}>Craft</option>
                      <option value={6}>Souvenirs </option>
                      <option value={7}>Makeup </option>
                      <option value={8}>Hair</option>
                      <option value={9}>Nails</option>
                      <option value={10}>Medspa and spa </option>
                      <option value={11}>Gym and fitness services </option>
                      <option value={12}>Personal training</option>
                      <option value={13}>Boutiques</option>
                    </select>
                  </div>
                  <div className="main-search-button">
                    <button
                      type="submit"
                      className="btn full-width theme-bg text-white"
                    >
                      <a href="/halfmapsearch">
                        Search
                        <i className="fas fa-search" />
                      </a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Topcategory />
        <Eventmain />
        <Dealsoftheday />
<Lugares/>
<Sabiasque/>
        <Lesprasanto />
        <Educational />
        <Volunteering />
        <Job />

        <Download />

        <Footer />

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
                {output && <font style={{ color: "red" }}>{output}</font>}
                <form onClick={handleSubmitt} className="submit-form">
                  <div className="form-group">
                    <label className="mb-1">Phone</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Addres"
                      value={email}
                      onChange={(e) => setEemail(e.target.value)}
                      className="form-control rounded bg-light"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      id="form-login-password-2"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPaassword(e.target.value)}
                      className="form-control rounded bg-light"
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
                        {/* <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a> */}

                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#signup"
                          className="ft-bold"
                        >
                          <i className="fas fa-user-plus me-1 theme-cl" />
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Log In
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
                {output && <font style={{ color: "red" }}>{output}</font>}
                <form onSubmit={handleSubmit} className="submit-form">
                  <div className="form-group">
                    <label className="mb-1">First Name</label>
                    <input
                      value={first_name}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Firstname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Last Name</label>
                    <input
                      value={last_name}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Lastname*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Zip Code</label>
                    <input
                      value={zip}
                      onChange={(e) => setZipcode(e.target.value)}
                      type="number"
                      className="form-control rounded bg-light"
                      placeholder="Zip Code*"
                      maxLength={6}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      value={user_email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control rounded bg-light"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      maxLength={"8"}
                      value={user_password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
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
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </div>
  );
}

export default Home;
