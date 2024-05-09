import React from "react";

function Hero() {
  return (
    <div className="w-[85%] m-auto relative flex justify-between gap-[30px] mt-[100px]">
      <img src="/img1.png" alt="" className="w-[134px] h-87px] absolute left-[0] top-[-90px]" />
      <div className="w-[100%] md:w-[60%] m-auto flex flex-col gap-[10px] justify-center">
        <h1 className="text-[30px] font-bold text-center relative ">
          Hire Your{" "}
          <span className="relative z-10">
            In-House Design Team
            <span className="bg-[#FB923c] w-full h-[10px] absolute bottom-[4px] left-0 z-[-1]"></span>
          </span>
          , Without the Full-Time Salaries
        </h1>
        <p className="text-center w-[70%] m-auto text-[#E4E4E7] text-[15px]">
          NoelX offers a top-tier design subscription that ensures you get the
          results your business needs.
        </p>
      </div>
      <img src="/img2.png" alt="" className="w-[146px] h-[146px] hidden md:flex absolute right-0 top-[50px]" />
    </div>
  );
}



export default Hero;
