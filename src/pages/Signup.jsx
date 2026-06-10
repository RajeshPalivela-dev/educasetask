import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center ">
  
  <form className="w-[375px] h-[812px] bg-[#F7F8F9] relative">

    {/* Title */}
    <div className="absolute top-[40px] left-[20px] w-[188px] text-left text-[28px] leading-[36px] font-medium text-[#1D2226] font-[Rubik]">
      Create your PopX account
    </div>

    <div class="relative w-[375px] h-[200px]">

  <input 
    type="text" 
    id="text"
    placeholder="Marrie Doe"
    class="absolute top-[140px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
  />

  
  <label 
    for="text" 
    class="absolute top-[131px] left-[29px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
  >Full Name<span className="text-[#DD4A3D]">*</span>
  </label>


   <input 
    type="text" 
    id="text"
    placeholder="Marrie Doe"
    class="absolute top-[209px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
  />

  
  <label 
    for="text" 
    class="absolute top-[200px] left-[29px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
  >Phone number<span className="text-[#DD4A3D]">*</span>
  </label>





 <input 
    type="email" 
    id="email"
    placeholder="Marrie Doe"
    class="absolute top-[278px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
  />

  
  <label 
    for="email" 
    class="absolute top-[269px] left-[34px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
  >Email address<span className="text-[#DD4A3D]">*</span>
  </label>


<input 
    type="password" 
    id="password"
    placeholder="Marrie Doe"
    class="absolute top-[347px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
  />

  
  <label 
    for="password" 
    class="absolute top-[338px] left-[34px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
  >Password<span className="text-[#DD4A3D]">*</span>
  </label>


<input 
    type="text" 
    id="text"
    placeholder="Marrie Doe"
    class="absolute top-[416px] left-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] px-3 bg-transparent"
  />

  
  <label 
    for="text" 
    class="absolute top-[407px] left-[29px] bg-[#F7F8F9] px-2 text-sm text-purple-600"
  >Company name
  </label>




</div>

<div className="absolute top-[474px] left-[20px] w-[125px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik opacity-100">Are you an Agency?
  <span className="absolute top-0 left-[120px] w-[6px] h-[15px] text-[13px] leading-[17px] font-normal font-rubik text-[#DD4A3D]">
  *
</span>
</div>

<div className="absolute top-[504px] left-[25px] flex items-center gap-4">
  
  
  <label className="flex items-center gap-2 text-[14px] text-[#1D2226]">
    <input type="radio" name="choice" value="Yes" className="w-[16px] top-[502px] h-[16px]" />
    Yes
  </label>

  <label className="flex items-center gap-2 text-[14px] text-[#1D2226]">
    <input type="radio" name="choice" value="No" className="w-[16px] h-[16px] top-[502px]" />
    No
  </label>

</div>

<button class="absolute top-[736px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] flex items-center justify-center" onClick={()=>navigate("/profile")}>
  <span class="text-center text-[16px] leading-[17px] font-medium text-white font-rubik">
    Create Account
  </span>
</button>


 


 

 

   
       
        
     
   </form>
</div>



  
  );
};

export default Signup;

