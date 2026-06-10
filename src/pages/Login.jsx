import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form className="w-[375px] h-[812px] bg-[#F7F8F9] relative">
        {/* Title */}
        <div class="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left text-[28px] leading-[36px] font-medium text-[#1D2226] font-rubik">
          Signin to your PopX account
        </div>

        <p class="absolute top-[123px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div class="relative w-[375px] h-[200px]">
          <input
            type="text"
            id="text"
            placeholder="Marrie Doe"
            class="absolute top-[206px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
          />

          <label
            for="text"
            class="absolute top-[195px] left-[29px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
          >
            Email Address
          </label>

          <input
            type="text"
            id="text"
            placeholder="Marrie Doe"
            class="absolute top-[267px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
          />

          <label
            for="text"
            class="absolute top-[258px] left-[29px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
          >
            Password
          </label>

          <button
            class="absolute top-[321px] left-[20px] w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] flex items-center justify-center"
            onClick={() => navigate("/profile")}
          >
            <span class="text-center text-[16px] leading-[17px] font-medium text-white font-rubik">
              Login
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
