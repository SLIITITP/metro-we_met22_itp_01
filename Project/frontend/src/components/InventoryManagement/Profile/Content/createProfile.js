import React, {useState} from "react";

export default function createIngredients(){
    return(
        <div
        className="container"
        style={{
          width: "40%",
          position: "sticky",
        }}
      >
        <form
          style={{ marginTop: "100px", marginLeft: "-175px", width: "100%" }}
          onSubmit={Create}
        >
          <h1 className="display-6" style={{ marginBottom: "20px" }}>
            Inventory ID
          </h1>
  
          <div className="mb-3">
            <label htmlFor="requestForEmpID" className="form-label">
              
            </label>
            <input
              type="text"
              id="empID"
              name="empID"
              className="form-control"
              required
              
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="requestForName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              id="empName"
              name="empName"
              className="form-control"
              required
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForDesignation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="form-control"
              required
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForHourlyPay" className="form-label">
              Hourly Pay
            </label>
            <input
              type="number"
              id="pay"
              name="pay"
              className="form-control"
              required
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForOtRate" className="form-label">
              Overtime Rate
            </label>
            <input
              type="number"
              id="otRate"
              name="otRate"
              min="1"
              max="5"
              className="form-control"
              required
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForNIC" className="form-label">
              NIC
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              className="form-control"
              required
             
            />
          </div>
          <div className="mb-3">
          <label htmlFor="requestForDOB" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            className="form-control"
            required
           
          />
  </div>
          <div className="mb-3">
            <label htmlFor="requestForgender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              aria-label="Default select example"
              readOnly="readonly"
              required
            >
              <option value="Male">Male</option>
              <option value="Male">Female</option>
            </select>
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="requestForddress" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="4"
              cols="50"
              placeholder="Enter your residential address..."
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForEmail" className="form-label">
              E-mail 📧 
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
           
          />
          </div>
          <div className="mb-3">
            <label htmlFor="requestForPhoneNo" className="form-label">
              Phone Number 📱 
            </label>
            <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9][1-9]{9}"
            className="form-control"
            required
           
          />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );

    
}