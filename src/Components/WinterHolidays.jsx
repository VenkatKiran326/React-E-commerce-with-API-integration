import React from "react";
// import '../Styles/WinterHolidays.css'
import '../Styles/MyScss.scss'
import { Link } from "react-router-dom";



function WinterHolidays() {
  return (
    <>
    <section className="bgElement mybg">
      <div className="container p-5 text-center WinterHolidays">
        <div className="row">
          <div className="col-md-6">
            <p className=" mypara">Laculis malesuada sodales</p>

            <h3 className="myHeading">Happy Winter Holidays</h3>
            <img className="bell"
              src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-separator.svg"
              alt=""
            />
            <p className="paraDes">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
            <Link to={'/productsgrid'}>
            <button className="m-3  colored">VIEW MORE</button>
            </Link>
            <Link to='/shopnow'>
            <button className="m-3 bg-white">SHOP NOW</button>
            </Link>

          </div>
          <div className="col-md-6">
            <img 
              src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-welcome-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default WinterHolidays;
