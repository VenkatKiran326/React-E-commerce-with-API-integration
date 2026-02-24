import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";



function NavbarComp() {

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  updateCartCount(); // initial load

  window.addEventListener("storage", updateCartCount);

  return () => {
    window.removeEventListener("storage", updateCartCount);
  };
}, []);

  return (
    <>
   <nav className="navbar navbar-expand-lg  p-2 mynavBar fixed-top shadow-lg ">
      <div className="container d-flex align-items-center">

        {/* LEFT SIDE */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link myelement text-black">
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/shopnow" className="nav-link myelement text-black">
              SHOP
            </Link>
          </li>

<li className="nav-item">
            <Link to="/blog" className="nav-link myelement text-black">
              BLOG
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pages" className="nav-link myelement text-black">
              PAGES
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/productsgrid" className="nav-link myelement text-black">
              ELEMENTS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/buy" className="nav-link myelement text-black">
              BUY
            </Link>
          </li>
        </ul>

        {/* CENTER */}
        <Link to="/" className="navbar-brand mx-auto fs-3 fw-bold bg-danger  text-white px-4">
          Aura
        </Link>

        {/* RIGHT SIDE */}
        <ul className="navbar-nav ms-auto align-items-center">
          
          <li className="nav-item">
            <Link to="/signup" className="nav-link myelement">
            Login / Register
            </Link>
          </li>

          <li className="nav-item fs-5 px-2 myelement">
            <FaMagnifyingGlass />
          </li>

          <li className="nav-item  fs-5 px-2 myelement">
            <FaRegHeart />
          </li>

          <li className="nav-item fs-5  px-2 myelement ">
             <Link to="/buy" className="nav-link myelement text-black">
            
            <FaCartPlus />
            </Link>
          </li>

          <li className="nav-item fs-5  px-2">
            ₹ 0.00
          </li>
        </ul>

      </div>
    </nav>

</>
  );
}

export default NavbarComp;