import React, { useEffect, useState } from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";

const Blog = () => {
  const [blogi, setBlogi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then((res) => res.json())
      .then((result) => setBlogi(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="mybg">
      <NavbarComp />

      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/blog-title-bg-opt.jpg')",
          height: "50vh",
        }}
      >
        <h1>Blog</h1>
        <small>know more about your items</small>
      </div>

      <div className="container pt-5">
        <div className="row">
          {blogi.map((item) => {
            return (
              <div className="col-md-4 pt-4 myparentB sideImg">
                <img
                  src={item.image}
                  alt=""
                  className="blog-img border border-1 border-black"
                />
                <div>
                  <div className="d-flex justify-content-center text-center align-center">
                    <span className="bg-white p-3 myChildDate">
                      {item.date}
                    </span>
                    <small className="badge bg-danger rounded-0 mychildB">
                      {item.category}
                    </small>
                  </div>
                  <h5>{item.title}</h5>
                  Posted by <em>{item.author}</em>
                  <br />
                  <small>{item.excerpt}</small>
                  <div>
                    <button className="text-danger ">Continue Reading</button>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

        <div className="mypagnation  d-flex justify-content-center my-4">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog;
