import React, { useState } from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Reason For Cancellation
        </label>
        <textarea
          className="form-control"
          id="cancellationReason"
          name="cancellationReason"
          rows="4"
          cols="50"
          placeholder="Enter Reason For Cancellation"
          required
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Update Reason
        </button>
      </div>
    </form>
  );
};
export default Form;
