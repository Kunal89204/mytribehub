import React from "react";

const Btn = ({ title, className }) => {
  return (
    <button
      className={`border-2 border-black font-medium font-mono rounded-lg px-6 ${className}`}
    >
      {title}
    </button>
  );
};

export default Btn;
