import React from "react";
import '../Styles/MyScss.scss'
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="hero">
          <h1 className="heroFont">🎄MERRY🎄</h1>
          <h1 className="heroFont"> CHRISTMAS</h1>
          {/* <img src="../assets/xmas-dots.svg" alt="" /> */}
          <span>❤️❤️❤️❤️❤️❤️</span>
          <p className="text-danger mypara newYR">And Happy New Year</p>
          <div className="play ">
        <Link to="https://youtu.be/pvP4fluUhhU?si=DkgWXvFYhRBO4ne2" target="_blank">  
          <FaRegPlayCircle />
        <span className="px-2 ">Watch Video</span></Link>
        
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
