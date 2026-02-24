import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import ShopItems from "./ShopItems";


const Productsgrid = () => {
      // const [price, setPrice] = useState(500);
  return (
    <>
    
      <section className="mybg">
        <NavbarComp />

         <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/xmas-title-bg-opt.jpg')",
          height: "50vh",
        }}
      >
        <h1>Products Grid</h1>
        <small>Home / Products grid</small>
      </div>
        <div className="container">
          <div className="row">
          

            <div className="col-md-12  ">
              <ShopItems />
            </div>
          </div>

          <div className="mypagnation  d-flex justify-content-center my-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Footer />
      </section>
    
    </>
  )
}

export default Productsgrid