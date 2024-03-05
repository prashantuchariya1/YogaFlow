import React from 'react'
import style from "./Home.module.css"
import MainHome from '../../components/compound/HomePage/MainHome/MainHome'
import OurServices from '../../components/compound/HomePage/OurServices/OurServices'
import FeedBack from '../../components/compound/HomePage/FeedBack/FeedBack'
import BlogPost from '../../components/compound/HomePage/BlogPost/BlogPost'
import WeOffer from '../../components/compound/HomePage/WeOffer/WeOffer'
import GetInTouch from '../../components/compound/HomePage/GetInTouch/GetInTouch'
import OurSpecialities from '../../components/compound/HomePage/OurSpecialities/OurSpecialities'
import AboutUs from '../../components/compound/HomePage/AboutUs/AboutUs'
import Navbar from '../../components/atom/Common/Navbar/Navbar'
import Footer from '../../components/atom/Common/Footer/Footer'

import NavbarIphone from '../../components/atom/Common/NavbarIphone/NavbarIphone'
import CardSpecialtiesLeft from '../../components/atom/HomePage/CardSpecialtiesLeft/CardSpecialtiesLeft'
import CardSpecialtiesRight from '../../components/atom/HomePage/CardSpecialtiesRight/CardSpecialtiesRight'
import Card_whatWeOffer from '../../components/atom/HomePage/Card_whatWeOffer/Card_whatWeOffer'
import CardBlogPost from '../../components/atom/HomePage/CardBlogPost/CardBlogPost'
import CardFooter from '../../components/atom/HomePage/CardFooter/CardFooter'
import Test from '../../components/atom/Common/Test/Test'



export default function Home() {
  return (
    <>
    <div className={style.Home}>
    {/* <NavbarMobile/> */}
    {/* <Navbar/> */}
    {/* <NavbarIphone/> */}
    {/* <CardSpecialtiesLeft/>
    <CardSpecialtiesRight/> */}
    {/* <Card_whatWeOffer/> */}
    {/* <CardBlogPost/> */}
    {/* <SliderComponent/> */}
    {/* <CardFooter/> */}
    {/* <Test/> */}



    <MainHome/>
    <OurServices/>
     <AboutUs/>
    <OurSpecialities/>
    <GetInTouch/>
    <WeOffer/>
    <FeedBack/>
    <BlogPost/>
    <Footer/>

    </div>
  
    </>
  )
}
