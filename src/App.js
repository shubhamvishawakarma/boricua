import { Route, Router, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Halfmapsearch from "./Component/Halfmapsearch";
import Home from "./Component/Home";
import Singlelisting from "./Component/Singlelisting";
import Contact from "./Component/Contact";
import Logintobusiness from "./Component/Logintobusiness";
import Signuptobussiness from "./Component/Signuptobussiness";
import Halfmap from "./Component/Halfmap";
import Businesshome from "./Vender/Businesshome";
import Business from './Vender/Business'
import Upgrade from "./Vender/Upgrade";
import Boricuaads from "./Vender/Boricuaads";
import Homelocalservices from "./Vender/Homelocalservices";
import Smallbusiness from "./Vender/Smallbusiness";
import Resource from "./Vender/Resource";
import Event from './Vender/Event';
import Bblog from "./Vender/Bblog";
import Listingsearch from "./Component/Listingsearch";

import Bblogdetails from "./Vender/Bblogdetails";
import Loginbusiness from "./Component/Loginbusiness";
import Dashboard from "./Component/Dashboard";
import Mylisting from "./Component/Mylisting";
import Savedlisting from "./Component/Savedlisting";
import Mybooking from "./Component/Mybooking";
import Wallet from "./Component/Wallet";
import Message from "./Component/Message";
import Myprofile from "./Component/Myprofile";
import Changepassword from "./Component/Changepassword";
import Addlisting from "./Component/Addlisting";
import Checkout from "./Component/Checkout";
import Bdashboard from "./Vender/Bdashboard";
import Bwallet from "./Vender/Bwallet";
import Bmyprofile from "./Vender/Bmyprofile";
import Bmessage from "./Vender/Bmessage";
import Bmylisting from "./Vender/Bmylisting";
import Bsavedlisting from "./Vender/Bsavedlisting";
import Baddlisting from "./Vender/Baddlisting";
import Bchangepassword from "./Vender/Bchangepassword";
import Bmybooking from "./Vender/Bmybooking";
import About from "./Component/About";
import Privacy from "./Component/Privacy";

import Blog from "./Component/Blog";
import Blogdetails from "./Component/Blogdetails";
import Babout from "./Vender/Babout";
import Bbloghome from "./Vender/Bbloghome";
import Bloghome from './Component/Bloghome'
import Bauthor from "./Vender/Bauthor";
import Author from "./Component/Author";
import Images from "./Component/Images";
import Job from "./Component/Job";
import Jobdetails from "./Component/Jobdetails";
import Faq from "./Component/Faq";
import Login from "./Component/Login";
import Term from "./Component/Term";
import Morecategory from "./Component/Morecategory";
import Subcategory from "./Component/Subcategory";
import Eventdetails from "./Component/Eventdetails";
import Lessdetails from "./Component/Lessdetails";
import Educationaldetails from "./Component/Educationaldetails";
import Volunteringdetails from "./Component/Volunteringdetails";
import Dayspecialdetails from "./Component/Dayspecailsdetails";
import Dayspecailimages from "./Component/Dayspecailimages";
import Singlelistingimages from "./Component/Singlelistingimages";
import Lugaresdetails from "./Component/Lugaresdetails";
import Sabiasdetails from "./Component/Sabiasdetails";
import Bimages from "./Vender/Bimages";
import Businesssignup from "./Component/Businesssignup";

function App() {
  
  return (
    <div>
 {/* <Home/>  */}


  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/halfmapsearch' element={<Halfmapsearch/>}></Route>
<Route path="/eventdetails" element={<Eventdetails/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/job" element={<Job/>}></Route>
<Route path="/logintobusiness" element={<Logintobusiness/>}></Route>
<Route path="/signuptobussiness" element={<Signuptobussiness/>}></Route>
<Route path="/halfmap" element={<Halfmap/>}></Route>
<Route path="/businesshome" element={<Businesshome/>}></Route>
<Route path="/business" element={<Business/>}></Route>
<Route path="/upgrade" element={<Upgrade/>}></Route>
<Route path="/boricuaads" element={<Boricuaads/>}></Route>
<Route path="/homelocalservices" element={<Homelocalservices/>}></Route>
<Route path="/smallbusniess" element={<Smallbusiness/>}></Route>
<Route path="/resource" element={<Resource/>}></Route>
<Route path="/event" element={<Event/>}></Route>
<Route path="/singlelisting" element={<Singlelisting/>}></Route>
<Route path="/dayspecialdetails" element={<Dayspecialdetails/>}></Route>
<Route path="/blog" element={<Blog/>}></Route>
<Route path="/images" element={<Images/>}></Route>
<Route path="/singlelistingimages" element={<Singlelistingimages/>}></Route>
<Route path="/dayspecailimages" element={<Dayspecailimages/>}></Route>
<Route path="/jobdetails" element={<Jobdetails/>}></Route>
<Route path="/lessdetails" element={<Lessdetails/>}></Route>
<Route path="/faq" element={<Faq/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/volunteringdetails" element={<Volunteringdetails/>}></Route>
<Route path="/lugaresdetails" element={<Lugaresdetails/>}></Route>
<Route path="/sabiasdetails" element={<Sabiasdetails/>}></Route>
<Route path="/businesssignup" element={<Businesssignup/>}></Route>
<Route path="/term" element={<Term/>}></Route>
<Route path="/subcategory" element={<Subcategory/>}></Route>
<Route path="/morecategory" element={<Morecategory/>}></Route>
<Route path="/listingsearch" element={<Listingsearch/>}></Route>
<Route path="/educationaldetails" element={<Educationaldetails/>}></Route>
<Route path="/blogdetails" element={<Blogdetails/>}></Route>
<Route path="/bblogdetails" element={<Bblogdetails/>}></Route>









<Route path="/loginbusiness" element={<Loginbusiness/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/mylisting" element={<Mylisting/>}></Route>
<Route path="/savedlisting" element={<Savedlisting/>}></Route>
<Route path="/mybooking" element={<Mybooking/>}></Route>
<Route path="/wallet" element={<Wallet/>}></Route>
<Route path="/message" element={<Message/>}></Route>
<Route path="/myprofile" element={<Myprofile/>}></Route>
<Route path="/changepassword" element={<Changepassword/>}></Route>
<Route path="/addlisting" element={<Addlisting/>}></Route>
<Route path="/checkout" element={<Checkout/>}></Route>
<Route path="/bdashboard" element={<Bdashboard/>}></Route>
<Route path="/bwallet" element={<Bwallet/>}></Route>
<Route path="/bmyprofile" element={<Bmyprofile/>}></Route>
<Route path="/bmybooking" element={<Bmybooking/>}></Route>
<Route path="/bmessage" element={<Bmessage/>}></Route>
<Route path="/blisting" element={<Bmylisting/>}></Route>
<Route path="/bsavedlisting" element={<Bsavedlisting/>}></Route>
<Route path="/bmylisting" element={<Bmylisting/>}></Route>
<Route path="/baddlisting" element={<Baddlisting/>}></Route>
<Route path="/bchangepassword" element={<Bchangepassword/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/privacy" element={<Privacy/>}></Route>
<Route path="/bloghome" element={<Bloghome/>}></Route>
<Route path="/bblog" element={<Bblog/>}></Route>
<Route path="/babout" element={<Babout/>}></Route>
<Route path="/bbloghome" element={<Bbloghome/>}></Route>
<Route path="/bauthor" element={<Bauthor/>}></Route>
<Route path="/author" element={<Author/>}></Route>
<Route path="/bimages" element={<Bimages/>}></Route>


</Routes>



  </div>
  
  
  );
}

export default App;
