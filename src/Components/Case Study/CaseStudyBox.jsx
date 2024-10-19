import React from "react";
import { Link } from "react-scroll";

const CaseStudyBox = ({ info, id }) => {
  return (
    <div
      className={`poppins md:px-6 py-6 md:py-0 flex flex-col gap-2 h-full ${
        id === 1
          ? "md:border-r-[1px] md:border-l-[1px] border-t-[1px] md:border-t-0 border-b-[1px] md:border-b-0"
          : ""
      }`}
    >
      <p className="text-white text-[14px]">{info}</p>
      <Link to={"header"} smooth={true} duration={500}>
        <div className="w-max text-[#B9FF66] flex items-center gap-1 cursor-pointer">
          <p className="text-[14px] ">Learn More</p>
          <i className="ri-arrow-right-up-line text-[22px] rotate-[20deg]"></i>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudyBox;
