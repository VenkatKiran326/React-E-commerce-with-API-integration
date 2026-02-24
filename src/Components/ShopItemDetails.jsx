import React, { useEffect, useState } from "react";
import NavbarComp from "./NavbarComp";
import { useParams } from "react-router-dom";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Footer from "./Footer";
const ShopItemDetails = () => {
  const [data, setData] = useState({});
  const [element, setElement] = useState([]);
  const [count, setcount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/shopprotsdetails/${id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3002/shopprotsdetails`)
      .then((res) => res.json())
      .then((result) =>
        // setElement(result))
        setElement(result.slice(0, 6))
      )
      .catch((err) => console.error(err));
  }, []);

  const increment = () => {
    setcount(count + 1);
  };
 

const decrement = () => {
  if (count > 1) setcount(count - 1);
};


  

// cart mAIn
const addToCart = () => {
  if (count === 0) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find((item) => item.id === data.id);

  if (existingItem) {
    existingItem.quantity += count;
  } else {
    cart.push({ ...data, quantity: count });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};



  return (
    <>
      <section className="mybg pt-5">
        <NavbarComp />
        <div className="container pt-5 ">
          <div className="row">
            <div className="col-md-7 ">
              <div className="div d-flex flex-row">
                <div className="group pt-5 m-2 ">
                  <div className="border border-1 border-muted sideImg">
                    <img
                      src="https://woodmart.xtemos.com/wp-content/uploads/2016/08/product-accessories-8.jpg"
                      alt=""
                      width={150}
                    />
                  </div>
                  <div className="border border-1 border-muted sideImg">
                    <img
                      src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-19-3-430x491.jpg"
                      alt=""
                      width={150}
                    />
                  </div>
                  <div className="border border-1 border-muted sideImg">
                    <img
                      src="https://woodmart.xtemos.com/wp-content/uploads/2016/09/product-furniture-15-430x490.jpg"
                      alt=""
                      width={150}
                    />
                  </div>
                </div>
                <img
                  className=" border border-2 border-muted sideImg"
                  src={data.images?.[0]?.url}
                  alt={data.name}
                  width="70%" 
                />
              </div>
            </div>

            <div className="col-md-5 py-5 ">
              <h2>{data.name}</h2>
              <h2 className="text-danger">₹{data.price}</h2>
              <p>{data.description}</p>
              <h6>Number of Items: </h6>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                  <div className="col-md-5 ">
                    <button className="bg-danger text-white"  onClick={decrement}>-</button>
                  </div>
                  <div className="col-md-2 text-center justify-content-center">
                    <h6  className=" text-black fs-3" >{count}</h6>
                  </div>
                  <div className="col-md-5">
                    <button  className="bg-danger text-white"  onClick={increment}>+</button>
                  </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <button className="bg-danger text-white rounded-0" onClick={addToCart}>
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="pt-2">
              <button className="py-2 mx-2"><FaArrowRightArrowLeft />  Add to compare</button>
              <button className="p-2"><FaRegHeart />  Add to wishlist</button>
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

              <div className=" d-flex">
                <h6>Share : </h6>
                <div className="d-flex gap-3 align-items-center">
                  <FaFacebookF className="social-icon sideImg" />
                  <FaInstagram className="social-icon sideImg" />
                  <FaLinkedinIn className="social-icon sideImg" />
                  <FaYoutube className="social-icon sideImg" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-muted">
            <h3 className="text-center pb-4 text-black">DESCRIPTION</h3>
            <div className="col-md-4 ">
              <h3 className="text-black">MAECENAS IACULIS</h3>
              <p className="text-muted">
                Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu
                accumsan dap ibus ultricies tristique montes a deros adipiscing
                a justo. Aliquet mus a aptent ullamcorper metus accumsan.
                Habitasse a purus nec ipsum a urna ac ullamcorper varius metus
                blandit posuere. Consectetur parturient ad imperdiet torquent
                dui dis eu sociosqu accumsan accumsan dapibus ultricies.
                Maecenas iaculis viverra tellus ridiculus a sed vestibulum
                dapibur.
              </p>
            </div>
            <div className="col-md-4 text-muted">
              <h3 className="text-black">FEUGIAT PARTURIENT</h3>
              <p>
                Venenatis duis tristique accumsan netus enim in posuere torquent
                ut ullamcorper integer aliquam a mi curae elementum. Maecenas
                iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante
                a mollis habitant duis urna cum iaculis ullamcorper luctus.
              </p>
              <ul>
                <li>65% Polyester, 23% Elastane</li>
                <li>Abitur parturient praesent ipsu</li>
                <li>Minceptos pri 187cm/3’1.3″ tall</li>
                <li>Diam parturient dictumst nibh mu</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className="text-black">FEUGIAT PARTURIENT</h3>
              <p>Model’s height: 4’2.2”/184 cm</p>
              <p>Model is wearing: Size Large</p>
              <h3 className="text-black">ALIQUET</h3>
              <p>
                Quam suspendisse adipiscing quis pretium nostra cubilia
                tristique nam non ac placerat nascetur a vel.
              </p>
              <h3 className="text-black">CURABITUR VELIT</h3>
              <p>Main: 76% Polyester, 24% Elastane.</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <h3>Related Products</h3>
            {element.map((item) => (
              <div className="col-md-2 sideImg" key={item.id}>
                <img src={item.images?.[0]?.url} alt={item.name} width="100%" />
                <h6>{item.name}</h6>
                <p>{item.brand}</p>
                <h5 className="text-danger">₹{item.price}</h5>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ShopItemDetails;
