import React from "react";
import Tags from "../Tags";
import TeamMembers from "./TeamMembers";
import teamData from "./teamData";

const Team = () => {
  return (
    <section
      id="team"
      className="px-4 sm:px-6 lg:px-8 xl:px-24 flex flex-col gap-10 md:gap-14"
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 lg:w-10/12 xl:w-1/2">
        <Tags text1="Team" className={`bg-[#B9FF66] py-1`} />
        <p className="poppins text-[14px] text-gray-600 text-center sm:text-left">
          Meet the skilled and experienced team behind our successful MyTribeHub startup
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {teamData.map((member) => (
          <TeamMembers key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
