// import React, { useState, useEffect } from "react";
// import { GoogleLoginButton } from "react-social-login-buttons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { LoginSocialGoogle } from "reactjs-social-login";
// import apiurl from "./config";
// import secureLocalStorage from "react-secure-storage";
// import { getToken } from "@firebase/messaging";
// import { messaging } from "./Firebase";


// function Google() {
//   const navigate = useNavigate();
//   const [output, setOutput] = useState("");
//   const [getComment, setGetComment] = useState([]);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     if (profile) {
//       sendToAPI();
//     }
//   }, [profile]);
//   let fcm_id = localStorage.getItem("yuonair_fcm");
//   const sendToAPI = async() => {

//     // if (!("Notification" in window)) {
//     //   //console.log("This browser does not support notifications.");
//     //   return;
//     // }
//     // if (Notification.permission === "granted") {
//     //   //console.log("hello token");
//     //   let fcmtoken = await getToken(messaging, {
//     //     vapidKey:
//     //       "BEIOKcWO3f_L9km9ZW3dQitqsmhD2IjPN1EKkmk7wjF4JVhTf3UoCzil2dAXVfWJvqSTGzKR9-9OujhnYVgwfHw",
//     //   });
      
//     //   localStorage.setItem("yuonair_fcm", fcmtoken);
//     //   // settoken(fcmtoken)
//     // } else if (Notification.permission === "denied") {
//     //   const confirmed = window.confirm(
//     //     "You have denied notification permission. Do you want to enable it manually in your browser settings?"
//     //   );
//     //   if (confirmed) {
//     //   }
//     // } else {
//     //   try {
//     //     const permissionResult = await Notification.requestPermission();
//     //     if (permissionResult === "granted") {
//     //     } else if (permissionResult === "denied") {
//     //     } else {
//     //     }
//     //   } catch (error) {
//     //     // console.error('Error requesting notification permission:', error);
//     //   }
//     // }
//     let fcm_id = localStorage.getItem("yuonair_fcm");

//     let userDetails = {
//       google_id: profile.sub,
//       first_name: profile.first_name,
//       last_name: profile.last_name,
//       user_email: profile.email,
//     //   image_url: profile.picture,
//       fcm: "123456",
//       //fcm: fcm_id,
//     };

//     axios
//       .post(`${apiurl[0].apiUrl}React/google_Login_react`, userDetails)
//       .then((response) => {
//         setGetComment([response.data.data]);

        
//         if (response.data.token !== "error") {
//           secureLocalStorage.setItem("google_id", response.data.data[0].google_id);
//           secureLocalStorage.setItem("name", response.data.data[0].name);
//           secureLocalStorage.setItem("email", response.data.data[0].email);
//           secureLocalStorage.setItem("_id", response.data.data[0]._id);
//           secureLocalStorage.setItem("imageurl", response.data.data[0].image_url);

//           response.data.data.role === "user" ? navigate("/") : navigate("/");
//         } else {
//           setOutput("Invalid user or verify your account....");
//         }
//       })
//       .catch((err) => {

//       });
//   };




//   return (
//     <div>
//       {!profile ? (
//         <LoginSocialGoogle


//          client_id="1004517911619-4bnuicmpd8p1g1c0kflgem4kuqofi8qo.apps.googleusercontent.com"
        
//         redirect_uri={'/'}
//         scope="openid profile email"
//         discoveryDocs="claims_supported"
//         access_type="offline"
//         onResolve={(response) => {
//             //console.log(response);
//             setProfile(response.data);
//           }}
//           onReject={(error) => {
//             //console.log(error);
//           }}
//         >
//         <GoogleLoginButton />
//       </LoginSocialGoogle>
//       ) : null}

//       {profile ? (
//         <div>
//           <h1>{profile.name}</h1>
//           <img src={profile.picture} alt="Profile" />
//         </div>
//       ) : null}

//       <p>{output}</p>
//     </div>
//   );
// }

// export default Google;

















