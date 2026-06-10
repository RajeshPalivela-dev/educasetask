import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function gotoLogin() {
    navigate("/login");
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" w-[375px] h-[812px] bg-[#F7F8F9] opacity-100 relative">
        <div className="absolute top-[549px] left-[20px] w-[231px] h-[33px]">
          <h1 className="text-left font-medium text-[28px] leading-[17px] tracking-[0px] text-[#1D2226] opacity-100 font-[Rubik]">
            Welcome to PopX
          </h1>
        </div>

        <div class="absolute top-[592px] left-[20px] w-[232px] h-[48px]">
          <p className="text-left text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 font-[Rubik]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="bg bg-blue-600 rounded-[6px] opacity-100 absolute top-[669px] left-[20px] w-[335px] h-[46px]"></div>
        <button
          className="absolute top-[683px] left-[127px] w-[120px] h-[19px] text-center text-[16px] leading-[17px] font-medium text-white opacity-100 font-[Rubik]"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create Account
        </button>

        <div class="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] opacity-100"></div>
        <button
          class="absolute top-[739px] left-[86px] w-[202px] h-[19px] text-center text-[16px] leading-[17px] font-medium text-[#1D2226] opacity-100 font-[Rubik]"
          onClick={gotoLogin}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
