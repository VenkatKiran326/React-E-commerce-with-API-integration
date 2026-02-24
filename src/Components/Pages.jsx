import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";

const Pages = () => {
  return (
    <>
      <NavbarComp />
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/portfolio-title-bg-opt.jpg')",
          height: "50vh",
        }}
      >
        <h1>Pages</h1>
      </div>
      <ul className="text-muted d-flex justify-content-center align-center  text-decoration-none py-5 mypages">
        <a href="" className="myelement">
          <li className="mx-5">ALL</li>
        </a>
        <a href="" className="myelement">
          <li className="mx-5">ACCESORIES</li>
        </a>
        <a href="" className="myelement">
          <li className="mx-5">DECOR</li>
        </a>
        <a href="" className="myelement">
          <li className="mx-5">FURNITURE</li>
        </a>
        <a href="" className="myelement">
          <li className="mx-5">KITCHEN</li>
        </a>
        <a href="" className="myelement">
          <li className="mx-5">LIGHTING</li>
        </a>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio14.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
          <div className="col-md-4 p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio12.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
          <div className="col-md-4 p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio14.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio7.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
          <div className="col-md-4  p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio11.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
          <div className="col-md-4 p-0 m-0 scaleUpelement">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/portfolio7.jpg"
              alt="" 
              width="100%"
              height={500}
            />
          </div>
        </div>
        <div className=" d-flex justify-content-center py-5 align-center">
   <button className="    border border-1 border-danger bg-danger text-white">
          Load More Projects
        </button>
        </div>
     
      </div>
      <Footer />
    </>
  );
};

export default Pages;
