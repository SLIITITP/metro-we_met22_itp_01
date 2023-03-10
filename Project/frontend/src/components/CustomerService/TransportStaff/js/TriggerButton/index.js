import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "white",
      }}
      ref={buttonRef}
      onClick={showModal}
    >
      <button type="button" class="btn btn-outline-danger">
        Cancel
      </button>
      {triggerText}
    </button>
  );
};
export default Trigger;
