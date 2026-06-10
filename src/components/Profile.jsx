import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      {/* Mobile Screen */}
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9]">
        <div className="absolute top-0 left-0 w-[375px] h-[68px] bg-white shadow-[0px_3px_6px_#00000007] opacity-100">
          <div className="absolute top-[27px] left-[15px] w-[146px] h-[22px] text-left text-[18px] leading-[21px] font-normal text-[#1D2226] capitalize opacity-100 font-[Rubik]">
            Account Settings
          </div>
        </div>
        <div>
          <img
            src="/photoicon.png"
            alt="profile"
            className="absolute top-[98px] left-[20px] w-[76px] h-[76px] opacity-100"
          />
          <img
            src="camicon.png"
            alt="icon"
            className="absolute top-[147px] left-[79px] w-[21px] h-[23px] opacity-100"
          />
        </div>
        <p className="absolute top-[98px] left-[116px] w-[73px] h-[18px] text-left text-[15px] leading-[19px] font-medium text-[#1D2226] capitalize opacity-100 font-[Rubik]">
          Marry Doe
        </p>
        <p className="absolute top-[122px] left-[116px] w-[118px] h-[17px] text-left text-[14px] leading-[19px] font-normal text-[#1D2226] capitalize opacity-100 font-[Rubik]">
          Marry@Gmail.Com
        </p>

        <div className="absolute top-[204px] left-[20px] w-[337px] h-[63px] text-left text-[14px] leading-[22px] font-normal text-[#1D2226] capitalize opacity-100 font-[Rubik]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
        <div className="absolute top-[287px] left-0 w-[375px] border-t border-dashed border-[#CBCBCB] opacity-100"></div>
      </div>
    </div>
  );
};

export default Profile;
