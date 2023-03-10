import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      data-toggle="tooltip"
      data-placement="top"
      title="Update Received Order"
      style={{
        border: "none",
        backgroundColor: "transparent",
      }}
      ref={buttonRef}
      onClick={showModal}
    >
      <i class="bi bi-receipt"></i>
      {triggerText}
    </button>
  );
};
export default Trigger;
