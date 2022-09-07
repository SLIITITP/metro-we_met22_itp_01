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
      <i class="bi bi-pencil"></i>
      {triggerText}
    </button>
  );
};
export default Trigger;
