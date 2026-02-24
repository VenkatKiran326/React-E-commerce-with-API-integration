import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row">
          {user.map((item) => {
            return (
              <>
                  <div className="col-md-3 card  text-decoration-none  " key={item.id}>
                <Link to={`dashboard/${item.id}`}>
                <img src={item.image} alt="" width="50%" />
                    <h1>{item.price} </h1>
                    <p className="-decoration-none">{item.description}</p>
                </Link>
                  </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
