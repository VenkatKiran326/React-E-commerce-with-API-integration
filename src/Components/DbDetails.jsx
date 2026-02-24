import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import Footer from "./Footer";
import NavbarComp from "./NavbarComp";

function DbDetails() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [count, setcount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/productsDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <>
      <NavbarComp />
      {/* <section> */}
      <div className="container  pt-5 ">
        <div className="row pt-5">
          <div className="col-md-6 ">
            <img src={user.image} alt="" width={500} />
          </div>
          <div className="col-md-6  py-5">
            <h1>{user.name}</h1>
            <h1 className="text-danger">₹ {user.price}</h1>
            <small>{user.description}</small>
            <div className="row pt-5">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-5 ">
                    <button
                      className="bg-danger text-white"
                      onClick={decrement}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-md-2 text-center justify-content-center">
                    <h6 className=" text-black fs-3">{count}</h6>
                  </div>
                  <div className="col-md-5">
                    <button
                      className="bg-danger text-white"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
                <button className="bg-danger text-white rounded-0">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="pt-2">
              <button className="py-2 mx-2">
                <FaArrowRightArrowLeft /> Add to compare
              </button>
              <button className="p-2">
                <FaRegHeart /> Add to wishlist
              </button>
            </div>
            <hr />
            <div className="d-flex align-items-center mb-2">
                <h6 className="mb-0 me-2">SKU:</h6>
                <span className="text-muted">MNK-0147</span>
              </div>

              <div className="d-flex align-items-center mb-2">
                <h6 className="mb-0 me-2">Category:</h6>
                <span className="text-muted">
                  {data.categories?.join(", ")}
                </span>
              </div>
            <div className="row dflex">
              <h6>Share : </h6>
              <div className="d-flex gap-3 align-items-center">
                <FaFacebookF className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedinIn className="social-icon" />
                <FaYoutube className="social-icon" />
              </div>
            </div>
          </div>

          {/*  */}
          <hr />
          <h3 className="p-5">VESTIBULUM TEMPUS METUS</h3>
          <div className="col-md-6 pt-1 ps-5">
            <ul className="list-unstyled ">
              {user.features?.map((feature, index) => (
                <li key={index} className="mb-2 p-2">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/product-img-5-682x800.jpg"
              alt=""
              width={400}
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/product-img-6-681x800.jpg"
              alt=""
              width={400}
            />
          </div>
          <hr />
          <h3 className="text-center">Related products</h3>
        </div>
      </div>
      {/* </section> */}
      <Footer />
    </>
  );
}

export default DbDetails;
