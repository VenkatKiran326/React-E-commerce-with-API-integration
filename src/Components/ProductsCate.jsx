import React, { useEffect, useState } from "react";
import "../Styles/MyScss.scss";

function ProductsCate() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/winterHolidays")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  // split array into chunks of 3
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  return (
    <section className="mybg">
      <div className="container myProduct text-center">
        <h6 className="holiday-subtitle mypara">
          Laculis malesuada sodalesee
        </h6>
        <h3 className="myHeading">Products Categories</h3>

        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {chunks.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  {group.map((item) => (
                    <div className="col-md-4 d-flex myround" key={item.id}>
                      <div className="imgParentCC w-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                        />

                        <div className="myChildCC">
                          <div className="p-3 text-center">
                            <span className="badge bg-danger">
                              {item.category}
                            </span>
                            <h3 className="pt-4">{item.title}</h3>
                            <p className="pt-3">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default ProductsCate;
