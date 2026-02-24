import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroImg from "../assets/HeroBG.png";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // saves to database
    fetch("http://localhost:3002/users",{
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    setUser({name: "",
      email:"",
      phone: "",
      password: "",
       confirmPassword: ""

    })

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Welcome")
    console.log("User Data:", user);
    
     // 4️⃣ Redirect to Home page
    navigate("/");
  };

  return (
    <>
    <NavbarComp/>
      <div className="container-fluid vh-100  px-0">
        {/* Banner */}
        <div className="hero" style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/xmas-title-bg-opt.jpg')",  height: "50vh", 
        }}
      >
        <h1>Sign Up</h1>
        <small>Home / Sign Up</small>
      </div>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* Register */}
            <div className="col-md-6  p-5">
              <form onSubmit={handleSubmit}>
                <h3>Register</h3>

                <div className="mb-3">
                  <label htmlFor="username">
                    Username <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-danger">*</span>
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

                <div className="mb-3">
                  <label htmlFor="confirmPassword">
                    Re-enter Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <small className="text-muted">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </small>

                <button type="submit"  className="btn btn-danger rounded-0 mt-3 p-3 w-100 ">
                  Register
                </button>
              </form>
            </div>

            {/* Login */}
            <div className="col-md-6 text-center p-5">
              <h3>Sign In</h3>
              <p>
               Sign In here by filling you're username and password or use your favorite social network account to enter to the site. Site login will simplify the purchase process and allows you to manage your personal account.
              </p>

              <Link to="/signin" className="btn btn-outline-primary rounded-0">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Signup;
