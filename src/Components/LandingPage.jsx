import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import WinterHolidays from "./WinterHolidays";
import ProductsCate from "./ProductsCate";
import Featured from "./Featured";
import Specialdiscount from "./Specialdiscount";
import MagicWorks from "./MagicWorks";
import TimelineSection from "./TimelineSection";
import ChristmasStories from "./ChristmasStories";

import Footer from "./Footer";
import NavbarComp from "./NavbarComp";

function LandingPage(){

    return(
        <>
       
        <NavbarComp />

        <Hero />
        <WinterHolidays />
        <ProductsCate />
        <Featured />
        <Specialdiscount />
        <MagicWorks />
        <ChristmasStories />
        <Footer/>
        {/* </BrowserRouter> */}
        
        </>

    )
}
export default LandingPage;