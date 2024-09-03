import Contact_Us from "./Contact_Us"
import Error_Page from "./Error_Page"
import Footer from "./Footer"
import GoTOTop from "./GoTOTop"
import Navbar from "./Navbar"
import Our_Client from "./Our_Client"
import Our_Location from "./Our_Location"
import Reviews from "./Reviews"
import Services from "./Services"
import Slider from "./Slider"
import { Routes, Route, NavLink } from "react-router-dom"

const Main_Home_Page = () => {



  return (
    <>
      <Navbar />
      <Services />
      <Our_Client />
      <Reviews />
      <Our_Location />
      <Contact_Us />
      <Footer />
      <GoTOTop />

    </>
  )
}

export default Main_Home_Page

