import React from "react";
import Tags from "../Tags";
import CaseStudyBox from "./CaseStudyBox";

const CaseStudy = () => {
  const caseStudyData = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];
  return (
    <section
      id="case-study"
      className="px-4 sm:px-6 lg:px-8 xl:px-24 flex flex-col md:gap-14 gap-10"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 lg:w-10/12 xl:w-1/2">
        <Tags text1="Case study" className={`bg-[#B9FF66] py-1`} />
        <p className="poppins text-[14px] text-gray-600 text-center sm:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="bg-[#222] rounded-3xl px-6 py-2 md:py-10 flex flex-col md:flex-row items-center">
        {caseStudyData.map((data, index) => (
          <CaseStudyBox key={index} info={data} id={index} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
