import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function ShopItems() {
  const [proitem, setproItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/shopproducts")
      .then((res) => res.json())
      .then((result) => setproItem(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="mybg pt-5">
        <div className="row">
          {proitem.map((item) => {
            return (
              <div className="col-md-4 mb-4 mycard" key={item.id}>
                <Link
                  to={`/shopnow/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={item.image} alt={item.name} width="100%" />

                  <div className="text-center mt-3">
                    <h6 className="mb-0">{item.name}</h6>
                    <span className="text-muted d-block mb-2">
                      {item.category}
                    </span>

                    <h4 className="text-danger">₹{item.price}</h4>
                    <div>
                      {/* ✅ COLOR DOTS */}
                      <div className="d-flex justify-content-center gap-2 mb-2">
                        {item.colors?.map((color, index) => (
                          <span
                            key={index}
                            className="color-dot"
                            style={{ backgroundColor: color }}
                            title={color}
                          ></span>
                        ))}
                      </div>

                      <button className="bg-danger text-white rounded-0">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ShopItems;
