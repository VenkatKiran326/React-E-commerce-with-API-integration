import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import { CiCirclePlus } from "react-icons/ci";

const BuyDetails = () => {
  const [price, setPrice] = useState(233);
  return (
    <>
      <div className="container">
        <NavbarComp />
        <div className="row pt-3">
          <div className="col-md-6 pt-5">
            <h3 className="pt-5">Enter Your Details</h3>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Siva"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter phone Number"
              />
            </div>
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
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <div className="pt-4 me">
                <button type="button" class="btn btn-danger px-4 py-2">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3 pt-5">
            <h3 className="pt-5">Order Summary</h3>
            <div className="box  bg-muted border border-solid border-muted rounded p-3">
              <div className="d-flex justify-content-between ">
                <p className="text-muted">Order Number</p>
                <p className=" fw-bold">18452697456</p>
              </div>
              <div className="">
                <h5>Be your own Book title</h5>
                <small className="text-muted">Order Number</small>
                <hr />

                <div className="d-flex justify-content-between">
                  <h5>Order Total:</h5>
                  <h5>₹{price}</h5>
                </div>
              </div>
            </div>

            {/* upi */}
            <div className="border border-1 border-muted px-4 my-4">
              <img src="" alt="" />
              <div className=" ">
                <div className="parentss d-flex">
                  <input type="radio" style={{ transform: "scale(0.5)" }} />
                  <div>
                    <p className="mb-0 fw-bold">Pay by any UPI App</p>
                    <small>PhonePe, Google Pay, Paytm and more</small>
                  </div>
                </div>
                <hr />
              </div>
              <h6>CREDIT & DEBIT CARDS</h6>
              <div className="d-flex">
                <CiCirclePlus className="fs-3"/>
                <p className="px-4">Add a new credit or Debit card</p>
              </div>
              <hr />
              <h6>MORE WAYS TO PAY</h6>
              <div className="parentss d-flex">
                <input type="radio" style={{ transform: "scale(0.5)" }} />
                <div>
                  <p className="mb-0 fw-bold">EMI</p>
                  <small>Bajaj Emi, Amazon EMI and more</small>
                </div>
              </div>
              <hr />
              <div className="parentss d-flex">
                <input type="radio" style={{ transform: "scale(0.5)" }} />
                <div>
                  <p className="mb-0 fw-bold">Cash On Delivery(COD)</p>
                  <small>Cash, UPI and more</small>
                </div>
                <hr />
              </div>
            </div>

            <button className="w-100 bg-danger text-white fw-bold fs-5">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyDetails;
