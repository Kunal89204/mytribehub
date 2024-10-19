import React from "react";

const Tags = ({ text1 = "", text2 = "", className }) => {
  return (
    <div className="font-[NeueMachina] font-semibold">
      <h2 className={`${className} text-2xl rounded-md px-1 w-max`}>{text1}</h2>
      {text2 && (
        <h2 className={`${className} text-[20px] rounded-md px-1 w-max`}>
          {text2}
        </h2>
      )}
    </div>
  );
};

export default Tags;
