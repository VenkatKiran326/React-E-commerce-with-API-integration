import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import HeroSiginUp from "../assets/heroSigin.jpg";
import ProductsCate from "./ProductsCate";
import ShopItems from "./ShopItems";
import { FaStar } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

const ShopPage = () => {
  const [price, setPrice] = useState(500);

  return (
    <>
      <section className="mybg">
        <NavbarComp />

        <div className="container-fluid px-0 mybg">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/xmas-title-bg-opt.jpg')",
              height: "50vh",
            }}
          >
            <h1>SHOP</h1>
            <ul className="d-flex list-unstyled px-5  gap-4 ">
              <li>Clock</li>
              <li>Furniture</li>
              <li>Lighting</li>
              <li>Cooking</li>
              <li>Toys</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3  pt-5">
              <h3>Filter by price</h3>
              <div className="price-filter">
                <label>Price</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="1000"
                  step="50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <div className="d-flex justify-content-between">
                  <span>₹0</span>
                  <span className="text-danger fw-bold">₹{price}</span>
                  <span>₹1000</span>
                </div>
              </div>
              <hr />
              <h5>Filter by color</h5>

              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span>Blue</span>
                  <button className="btn btn-sm ">20</button>
                </li>

                <li className="d-flex justify-content-between align-items-center">
                  <span>Black</span>
                  <button className="btn btn-sm ">15</button>
                </li>

                <li className="d-flex justify-content-between align-items-center">
                  <span>Purple</span>
                  <button className="btn btn-sm ">7</button>
                </li>

                <li className="d-flex justify-content-between align-items-center">
                  <span>White</span>
                  <button className="btn btn-sm ">30</button>
                </li>

                <li className="d-flex justify-content-between align-items-center">
                  <span>Grey</span>
                  <button className="btn btn-sm ">14</button>
                </li>

                <li className="d-flex justify-content-between align-items-center">
                  <span>Green</span>
                  <button className="btn btn-sm ">24</button>
                </li>
              </ul>
              <h5>Filter by Size</h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">S</span>
                  <button className="btn btn-sm ">20</button>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">M</span>
                  <button className="btn btn-sm ">10</button>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">L</span>
                  <button className="btn btn-sm ">15</button>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">XL</span>
                  <button className="btn btn-sm ">7</button>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">XXL</span>
                  <button className="btn btn-sm ">30</button>
                </li>
              </ul>

              <hr />
              <h5>Filter by Brand</h5>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-secondary bg-danger text-white fs-4"
                  type="button"
                  id="button-addon2"
                  width={500}
                >
                  <HiMagnifyingGlass />
                </button>
              </div>

              <div className="px-3 remove-white ">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://img.freepik.com/free-vector/adult-clothing-store-logo_474888-2338.jpg?semt=ais_hybrid&w=740&q=80"
                      alt=""
                      width="100"
                      height="100"
                      className="p-2"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_FwDEs8FfhB_TujfGkCcVdsBxqo63zkIwA&s"
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://png.pngtree.com/template/20190928/ourmid/pngtree-orange-fashion-women-boutique-clothing-beautiful-logo-design-tem-image_312092.jpg"
                      alt=""
                      width="100"
                      height="100"
                      className="p-2"
                    />
                  </div>

                  <div className="col-md-6">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/052/314/143/non_2x/logo-clothing-simple-illustration-with-flat-background-free-vector.jpg"
                      alt=""
                      width="100"
                      height="100"
                      className="p-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/29/34/73/360_F_429347385_1sHIAncOz3qqmqe2JN9FWKsRABliseLj.jpg"
                      alt=""
                      width="100"
                      height="100"
                      className="p-2"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5sQhLaj9dH_fpFrlNcjt-qLTTIkzGK84Tg&s"
                      alt=""
                      width="100"
                      height="100"
                      className="p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <img src="" alt="" />
                </div>
              </div>
              <hr />
              <h5>Product status</h5>

              <label className="d-flex align-items-center gap-2">
                <input type="checkbox" className="small-checkbox" />
                On Sale
              </label>

              <label className="d-flex align-items-center gap-2">
                <input type="checkbox" className="small-checkbox" />
                In Stock
              </label>

              <hr />
              <h5>Top rated products</h5>
              <div className="d-flex">
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-19-3-430x491.jpg"
                  alt=""
                  width={70}
                  className="p-2"
                />
                <div>
                  <h6>Euismod aliquam parturient</h6>
                  <div className="text-warning ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>₹789</p>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2022/04/product-3.jpg"
                  alt=""
                  width={70}
                  className="p-2"
                />
                <div>
                  <h6>Euismod aliquam parturient</h6>
                  <div className="text-warning ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>₹999</p>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/furniture5.jpg"
                  alt=""
                  width={70}
                  className="p-2"
                />
                <div>
                  <h6>Euismod aliquam parturient</h6>
                  <div className="text-warning ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p>₹429</p>
                </div>
              </div>
            </div>

            <div className="col-md-9  ">
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
  );
};

export default ShopPage;
