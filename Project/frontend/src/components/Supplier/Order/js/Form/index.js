import React, { useState } from "react";

import GetOrder from "../../content/GetOrder";

export const Form = ({ onSubmit }) => {
  // const [order, setOrder] = useState({
  //   orderID: " ",
  //   empID: " ",
  //   supplierID: " ",
  //   deliveryDate: " ",
  //   amount: " ",
  //   status: " ",
  //   orderDate: " ",
  // });

  // const orderList = GetOrder();

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <div class="row">
          <div class="col text-center">
            <div class="col-md-12">
              <h1 className="display-6" style={{ marginBottom: "20px" }}>
                Update Order
              </h1>
              <div className="form-group">
                <label htmlFor="deliveryDate" className="form-label">
                  Date of Delivery
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="deliveryDate"
                  name="deliveryDate"
                />
              </div>

              <div class="form-group">
                <label htmlFor="amount" className="form-label">
                  Total Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  name="amount"
                  min="0"
                  step=".01"
                />
              </div>

              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button
                      className="form-control btn btn-primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
