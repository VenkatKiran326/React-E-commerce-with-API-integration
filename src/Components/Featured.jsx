import React, { useEffect, useState } from "react";
import "../Styles/MyScss.scss";
import { Link } from "react-router-dom";

function Featured() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/featuredProducts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="mybg">
      <div className="container text-center p-5">
        <h6 className="holiday-subtitle mypara">Laculis malesuada sodales</h6>

        <h3 className="mb-4 myHeading">Featured Products</h3>

        <div className="row">
          {data.map((item) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 pt-3 mycard"
              key={item.id}
            >
              <Link to={`featured/${item.id}`} className="text-decoration-none">
                <div className="fparent">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />

                  <div className="fchild">
                    <span className="badge bg-danger tag">{item.category}</span>

                    <h5 className="product-title">{item.title}</h5>

                    <div className="fchildPrice text-danger">
                      <h4> ₹{item.price}</h4>{" "}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
