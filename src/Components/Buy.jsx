import React from "react";
import NavbarComp from "./NavbarComp";

const Buy = () => {
  return (
    <>
      <div className="container">
        {/* <NavbarComp/> */}
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <h5>Secure Payment</h5>
              <small>Choose your preferred payment method</small>
            </div>

            {/* form */}
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                CardHolder Name
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Suresh"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Card Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="*************89"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Expiry Date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="17/25"
              />

              <label for="exampleFormControlInput1" class="form-label">
                CVV
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="123"
              />
            </div>
            <h6>Billing Details</h6>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Country
              </label>
            </div>
            <div class="dropdown">
              <input
                class=" dropdown-toggle form-control"
                placeholder="slect Country"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    India
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Nepal
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sri Lanka
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">



            
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
