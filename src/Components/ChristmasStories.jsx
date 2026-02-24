import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/MyScss.scss'

function ChristmasStories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/stories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // 🔹 split array into chunks of 3
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  return (
    <section className="mybg">
      <div className="container">
        <div className="heading text-center">
          <p className="holiday-subtitle mypara">Laculis malesuada sodales</p>
          <h3>Christmas Stories</h3>
          <img
            className="bell"
            src="https://woodmart.xtemos.com/wp-content/uploads/2017/10/xmas-separator.svg"
            alt=""
            width={20}
          />
        </div>

        {/* 🔹 Carousel */}
        <div
          id="storiesCarousel"
          className="carousel slide pt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {chunks.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  {group.map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <div className="card h-100">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.title}
                        />
                        <p className="bg-danger text-white text-center mb-0">
                          {item.category}
                        </p>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <Link to="#">Read more</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* 🔹 Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#storiesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#storiesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
}

export default ChristmasStories;
