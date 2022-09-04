import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group" style={{ zIndex: "100" }}>
        <label htmlFor="notes">Notes</label>
        <textarea
          className="form-control"
          id="notes"
          name="notes"
          rows="4"
          cols="50"
          placeholder="Edit your note"
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="date">Scheduled For</label>
        <input type="date" className="form-control" id="date" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input type="time" className="form-control" id="time" />
      </div>
      <br />
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
