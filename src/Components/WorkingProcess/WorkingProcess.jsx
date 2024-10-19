import React, { useState } from "react";
import Tags from "../Tags";
import Process from "./Process";
import processData from "./processData";

const WorkingProcess = () => {
  const [activeId, setActiveId] = useState(processData[0].id);

  const handleProcessClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section
      id="working-process"
      className="px-4 sm:px-6 lg:px-8 xl:px-24 flex flex-col gap-10 md:gap-14"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 lg:w-10/12 xl:w-1/2">
        <Tags text1="Our Working Process" className={`bg-[#B9FF66] py-1`} />
        <p className="poppins text-[14px] text-gray-600 text-center sm:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6">
        {processData.map((process) => (
          <Process
            key={process.id}
            process={process}
            activeId={activeId}
            processHandler={handleProcessClick}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
