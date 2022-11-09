import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="mb-3" style={{ float: "left", width: "25%" }}>
        <label htmlFor="Date" className="form-label">
          Date:
        </label>
        <input
          type="text"
          id="date"
          name="date"
          className="form-control"
          value={date.toLocaleDateString()}
        />
      </div>

      <div className="mb-3" style={{ float: "right", width: "25%" }}>
        <label htmlFor="CheckIn" className="form-label">
          Check In Time :
        </label>
        <input
          type="text"
          id="checkIn"
          name="checkIn"
          className="form-control"
          value={date.toLocaleTimeString()}
        />
      </div>
    </>

    // <div>
    //   <p> Time : {date.toLocaleTimeString()}</p>
    //   <p> Date : {date.toLocaleDateString()}</p>
    // </div>
  );
};

export default DateTime;
