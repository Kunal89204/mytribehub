import React from "react";

const TeamMembers = ({ member }) => {
  return (
    <div className="border border-[#191A23] p-6 rounded-3xl bg-white drop-shadow-[0_4px_0px_rgba(25,26,35,1)] h-full">
      <div className="flex justify-between pb-4">
        <div className="font-[NeueMachina]">
          <h4 className="font-semibold">{member.name}</h4>
          <p className="text-sm">{member.position}</p>
        </div>
        <div className="w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-black">
          <i className="ri-linkedin-fill text-[#B9FF66] text-lg"></i>
        </div>
      </div>
      <div className="border-t border-black">
        <p className="pt-4 text-sm poppins">{member.experienceDetails}</p>
      </div>
    </div>
  );
};

export default TeamMembers;
