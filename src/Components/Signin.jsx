import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavbarComp from "./NavbarComp";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();


 const handleSubmit = (e) => {
  e.preventDefault();

  // 1️⃣ Fetch users from database
  fetch("http://localhost:3002/users")
    .then((response) => response.json())
    .then((users) => {

      // 2️⃣ Check email & password
      const foundUser = users.find((item) =>
          item.email === user.email &&
          item.password === user.password
      );

      // 3️⃣ Result
      if (foundUser) {
        alert("Login successful ✅");
        console.log("Logged in user:", foundUser);
        navigate('/')
      } else {
        alert("Invalid email or password ❌");
      }

      console.log("Login Data:", user);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Server error");
    });

};


  return (
    <>
      <NavbarComp />

      <div className="container-fluid px-0">
         <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/xmas-title-bg-opt.jpg')",
          height: "50vh",
        }}
      >
        <h1>Sign in</h1>
        <small>Home / Account</small>
      </div>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 p-5">
              <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="mb-3">
                  <label htmlFor="email">
                    Username or email address{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-danger mt-3 p-3 w-100 rounded-0">
                  Sign In
                </button>
              </form>

              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label htmlFor="remember" className="form-check-label">
                  Remember me
                </label>
              </div>

              <div className="text-end">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>

            <div className="col-md-6 text-center p-5">
              <h3>New User?</h3>
              <p>Create an account to manage orders and profile.</p>
              <Link to="/signup" className="btn btn-outline-primary rounded-0">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Signin
