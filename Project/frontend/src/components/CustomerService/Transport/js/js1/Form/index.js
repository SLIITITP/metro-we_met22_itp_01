import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="numberOfSeats">Number of Seats</label>
        <input
          type="number"
          min="1"
          max="5"
          className="form-control"
          id="numberOfSeats"
          required
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
