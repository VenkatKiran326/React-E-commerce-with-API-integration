import React from "react";
import '../Styles/MyScss.scss'
import footerImg from "../assets/Footer.png"
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


function Footer(){
    return(
        <>
        <footer>
            <div className="container-fluid px-0 ">
                <div className="row parent">
                    <img src={footerImg} alt="" />

                    <div className="overlay ">
                        <h3 className="fs-2 fw-bold bg-danger text-white px-4 d-inline">AURA</h3>
                        <p>Nulla himenaeosad adipiscing a fames augue qearas <br />suspendisse vesti bulum augue consectetur facil arshac.</p>
                        <div className="fs-3">
                            <FaFacebook className="p-1 sideImg"/>
                            <RiTwitterXLine className="p-1 sideImg"/>
                            <FaPinterest className="p-1 sideImg"/>
                            <FaLinkedin className="p-1 sideImg"/>
                            <FaTelegram className="p-1 sideImg"/>

                        </div>
                        <img
              className=""
              src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-separator.svg"
              alt=""
              width={250}
            />
                        <p>AURA © 2025 CREATED BY X-TEMOS STUDIO.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;