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
      <i className="bi bi-pencil"></i>
      {triggerText}
    </button>
  );
};
export default Trigger;
