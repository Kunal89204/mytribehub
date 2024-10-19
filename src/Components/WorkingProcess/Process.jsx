import React from "react";

const Process = ({ process, activeId, processHandler }) => {
  return (
    <div
      className={`border border-[#191A23] rounded-3xl p-5 sm:p-6 lg:p-7 font-[NeueMachina] drop-shadow-[0_4px_0px_rgba(25,26,35,1)] flex flex-col gap-6 transition duration-300 ${
        activeId === process.id ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-5">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            0{process.id}
          </h2>
          <h4 className="sm:text-xl lg:text-2xl font-bold">{process.title}</h4>
        </div>
        <div
          onClick={() => processHandler(process.id)}
          className="border border-[#191A23] w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 cursor-pointer rounded-full flex items-center justify-center bg-[#F3F3F3]"
        >
          {activeId === process.id ? (
            <i className="ri-subtract-fill text-lg sm:text-2xl font-extrabold"></i>
          ) : (
            <i className="ri-add-fill text-lg sm:text-2xl font-extrabold"></i>
          )}
        </div>
      </div>
      {activeId === process.id && (
        <div className="border-t border-black">
          <p className="pt-5 text-sm">{process.text}</p>
        </div>
      )}
    </div>
  );
};

export default Process;
