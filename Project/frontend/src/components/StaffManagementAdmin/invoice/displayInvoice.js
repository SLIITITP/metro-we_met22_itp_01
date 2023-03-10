import React, { useState } from "react";
import GetInvoiceDetails from "../../StaffManagement/Invoice/Content/GetAllInvoice";
import { jsPDF } from "jspdf";

export default function DisplayInvoice() {
  const createPDF = async () => {
    const date = new Date().toISOString().split("T")[0];
    const pdf = new jsPDF("landscape", "px", "a1", false);
    const data = await document.querySelector("#invoice");
    pdf.html(data).then(() => {
      pdf.save("Invoice Report " + date + ".pdf");
    });
  };
  //For the search button
  const [search, setSearch] = useState("");

  var currDate = new Date().toISOString().slice(0, 10);

  var invoiceList = GetInvoiceDetails();

  return (
    <>
      <div
        className="container"
        id="invoice"
        style={{ marginLeft: "100px", marginTop: "100px" }}
      >
        <div
          className="container"
          style={{ float: "right", marginRight: "-1100px" }}
        >
          <form className="form-inline my-2 my-lg-0">
            <input
              type="date"
              id="search"
              name="search"
              className="form-control"
              defaultValue={currDate}
              onChange={(e) => {
                setSearch(e.target.value);
                e.preventDefault();
                e.window.location.reload(false);
              }}
            />
          </form>
        </div>

        <div
          className="container"
          style={{
            width: "80%",
            float: "center",
            marginTop: "100px",
            marginLeft: "150px",
            position: "sticky",
          }}
        >
          <h1 className="display-6" style={{ marginBottom: "40px" }}>
            View Invoice
          </h1>

          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "#0d6efd", color: "white" }}>
                <th scope="col">Emp ID</th>
                <th scope="col">Date</th>
                <th scope="col">Working hours </th>
                <th scope="col">Shift Hours</th>
                <th scope="col">Ot Hours</th>
                <th scope="col">Amount</th>
                <th scope="col">Deduction</th>
                <th scope="col">Allowance</th>
                <th scope="col">Net Salary</th>
              </tr>
            </thead>
            <tbody>
              {invoiceList
                ? invoiceList
                    .filter((val) => {
                      if (search === "") return val;
                      else if (
                        val.date.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val) => (
                      <tr key={val._id}>
                        <td>{val.empID}</td>
                        <td>{val.date}</td>
                        <td>{val.workingHours}</td>
                        <td>{val.shiftHours}</td>
                        <td>{val.otHours}</td>
                        <td>{val.amount}</td>
                        <td>{val.dedAmount}</td>
                        <td>{val.allowance}</td>
                        <td>{val.netSalary}</td>
                      </tr>
                    ))
                : invoiceList}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="container"
        style={{
          width: "50%",
          float: "center",
          marginTop: "25px",
          marginLeft: "350px",
          position: "sticky",
        }}
      >
        <button className="btn btn-primary" onClick={createPDF}>
          Export
        </button>
        <br></br>
      </div>
    </>
  );
}
