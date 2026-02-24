import React, { useEffect, useState } from "react";
import "../Styles/MyScss.scss";
import { Link } from "react-router-dom";

function MagicWorks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/timeline")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mybg">
      <div className="container p-5 WinterHolidays">
        <div className="heading text-center">
          <h6 className="holiday-subtitle mypara">Laculis malesuada sodales</h6>
          <h3>How Is Magic Works</h3>
          <img
            className="bell"
            src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-separator.svg"
            alt=""
            width={20}
          />
        </div>

        {data.map((item) => (
          <div className="row align-items-center" key={item.id}>
            <div className="col-md-5 p-5 magic">
              <h6 className="holiday-subtitle mypara">{item.title}</h6>
              <h3>{item.subtitle}</h3>
              <p >{item.description}</p>
              <Link to={`/timeline/${item.id}`}>Read more</Link>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-6 text-end px-5">
              <img src={item.image} alt={item.title} width={400} />
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <section className="p-5">
          <div className="signup p-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h6 className="text-white fs-1">
                  SignUp for Newsletter
                </h6>
              </div>

              <div className="col-md-6">
                <form className="row g-3">
                  <div className="col-auto">
                    <label
                      htmlFor="inputEmail2"
                      className="visually-hidden"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail2"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="col-auto">
                    <button
                      type="submit"
                      className="btn btnSignUp mb-3 rounded-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MagicWorks;
