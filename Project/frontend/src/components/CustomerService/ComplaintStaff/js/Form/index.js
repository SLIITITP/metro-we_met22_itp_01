import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="status" className="form-label">
          Complaint Status
        </label>
        <select
          className="form-select"
          id="status"
          aria-label="Default select example"
          required
        >
          <option value="">Set Complaint Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Solved">Solved</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="UpdatedNotes"
          name="UpdatedNotes"
          rows="4"
          cols="50"
          placeholder="Enter Action Taken"
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
