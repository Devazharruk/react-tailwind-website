import React from "react";

function Content() {
  return (
    <div className="w-[100%]  bg-black flex flex-col mt-[100px]">
      {/* Section-1 */}
      <div className="flex flex-col relative">
        <div className="absolute right-[25%] top-[-25%] hidden md:flex">
          <img src="/price.png" alt="" className="w-[166px] h-[166px]" />
        </div>
        <div className="flex flex-col md:flex-row  justify-center gap-[30px] w-[100%] h-auto md:h-[300px]  overflow-hidden">
          <div className="w-[100%] h-[100%]">
            <img src="/slide1.png" alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="w-[100%] h-[100%]">
            <img src="/slide2.png" alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="w-[100%] h-[100%]">
            <img src="/slide3.png" alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
        <div className="flex items-center justify-between  h-[70px] relative md:absolute mt-10 bottom-[0px] md:bottom-[50px] left-[0%] md:left-[25%] bg-[#292524]  px-[30px] rounded-[24px]">
          <a
            href="#"
            className="text-[16px] font-[500] p-[10px] rounded-[34px]"
          >
            Difference
          </a>
          <a
            href="#"
            className="bg-[#ffff] font-[500] p-[10px] rounded-[34px] text-[black]"
          >
            Why us
          </a>
          <a
            href="#"
            className="text-[16px] font-[500] p-[10px] rounded-[34px]"
          >
            Case studies
          </a>
          <a
            href="#"
            className="text-[16px] font-[500] p-[10px] rounded-[34px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[16px] font-[500] p-[10px] rounded-[34px]"
          >
            FAQs
          </a>
        </div>
      </div>
      {/* Section-2 */}

      <div className="w-100 bg-[#FFEDD5] mt-[50px] py-[30px] text-[black] px-[30px]">
        <div className="flex flex-col">
          <h1 className="text-[37px] font-[500]">
            If You Are Currently Experiencing
          </h1>
          <div className="flex gap-[30px] mt-[30px] mb-[20px]">
            <div className="flex items-center gap-[5px]">
              <img src="/arrow2.png" alt="" className="h-[25px] " />
              <span className="text-[22px] font-semibold">
                Low activation & adoption
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <img src="/arrow2.png" alt="" className="h-[25px] " />
              <span className="text-[22px] font-semibold">
                Even lower retention
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <img src="/arrow2.png" alt="" className="h-[25px] " />
              <span className="text-[22px] font-semibold">High churn</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center relative justify-between w-100">
          <div className="w-[100%] md:w-[50%]">
            <p className="text-[25px] font-bold mb-[15px]">
              Our UX Agency will uncover the challenges you’re currently facing
              and create quick, attractive, and effective solutions for your
              current UX design.
            </p>
            <button className="text-[14px] text-white bg-black px-[15px] py-[10px] rounded-[20px]">
              See Plans
            </button>
          </div>
          <div className="md:absolute md:right-0 md:top-[-40px] rotate-[2.1deg] mt-10">
            <div className="w-[350px]">
              <img src="/slide2.png" alt="" className="w-[100%]" />
            </div>
            <div className="absolute top-[40%] left-[-15%]">
              <img src="/sticker.png" alt="" />
            </div>
          </div>
          <div className="cursor-pointer  w-[200px] h-[200px] hidden md:flex absolute left-[10%] bottom-[-70%] z-40">
            <img src="/icon.png" alt="" />
          </div>
        </div>
      </div>

      {/* Section-3 */}
      <div className=" md:mt-20 py-[100px] flex flex-col md:flex-row items-center">
        <div className=" w-[100%] sm:m-0 flex-col md:flex-row m-auto flex p-[20px] justify-between bg-[#27272A] rounded-[32px]">
          <div className="w-[100%] md:w-[48%] ps-[30px] py-[30px]">
            <span className="text-[18px] font-[400]">
              Don’t Make the Same Mistakes Everyone Else Does
            </span>
            <h1 className="text-[32px] font-[500] leading-[40px] mt-[10px] mb-[15px]">
              When you're struggling to grow your product revenue, it’s common
              to want to:
            </h1>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[5px] items-center">
                <img
                  src="/mensticker.png"
                  alt=""
                  className="w-[33px] h-[33px]"
                />
                <span className="text-[22px] font-[500]">
                  Throw more money at marketing & sales
                </span>
              </div>
              <div className="flex gap-[5px] items-center">
                <img
                  src="/mensticker.png"
                  alt=""
                  className="w-[33px] h-[33px]"
                />
                <span className="text-[22px] font-[500]">
                  Launch new features
                </span>
              </div>
              <div className="flex gap-[5px] items-center">
                <img
                  src="/mensticker.png"
                  alt=""
                  className="w-[33px] h-[33px]"
                />
                <span className="text-[22px] font-[500]">
                  Hire even more team members
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] bg-[#F87171] rounded-[32px] flex justify-center flex-col items-center">
            <span className="text-[75px] font-[500]">99.9%</span>
            <p className="font-[400] w-[55%] flex justify-center text-[18px] ">
              of the Time These Solutions Don’t Work.
            </p>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="flex flex-col w-[95%] m-auto">
        <div className="text-center relative">
          <h1 className="text-[37px] font-500">
            Instead of that we will provide
          </h1>
          <img
            src="/img2.png"
            alt=""
            className="absolute top-[-40px] right-0"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[20px] py-[100px]">
          <div className="bg-[#27272A] rounded-[20px] pt-[20px] ps-[20px] w-[100%] md:w-[33%] relative">
            <h1 className="text-[22px] pr-[10px]">
              1.Revamp your UX based on in-depth research to inform product
              design
            </h1>
            <img src="/tree.png" alt="" className="md:absolute md:bottom-0 md:right-0" />
          </div>
          <div className="bg-[#27272A] rounded-[20px] px-[10px] pt-[20px] w-[100%] md:w-[33%] ">
            <h1 className="text-[22px] mb-[70px]">
              2.Increase perceived value of your existing product
            </h1>
            <div className="relative">
              <img src="graph.png" alt="" className="w-[70%] m-auto " />
              <div className="flex items-center justify-center bg-[#ECFCCB] w-[102px] h-[102px] rounded-full border-[3px] border-gray-800 absolute top-[-60px] right-[0px]">
                <img src="/sun.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#27272A] rounded-[20px] p-[15px] md:p[10px] w-[100%] md:w-[33%]">
            <h1 className="text-[22px]">
              3.Validate product ideas before fully rolling them out
            </h1>
            <div className="w-[90%] m-auto  text-black  flex flex-col justify-center mt-[30px] gap-[10px] relative">
              <button className="font-[700] text-[16px] w-[90%] m-auto bg-[#4F4F52] py-[15px]">
                Next
              </button>
              <button className="font-[700] text-[16px] w-[90%] m-auto bg-[#636365] py-[15px] rounded-[13px]">
                Next
              </button>
              <div className="font-[700] flex items-center justify-between cursor-pointer text-[16px] w-[90%] m-auto bg-[#727274] py-[15px] rounded-[25px] px-[10px]">
                <button>Next</button>
                <img src="/arrowright.png" className="" alt="" />
              </div>
              <div className="font-[700] flex items-center justify-center gap-[10px] cursor-pointer text-[16px] w-[90%] m-auto bg-[#5E5E60] py-[15px] rounded-[25px] px-[10px]">
                <button>Next</button>
                <img src="/arrowright.png" className="" alt="" />
              </div>
              <div className="font-[700] md:absolute md:bottom-[-55px] flex items-center justify-between  cursor-pointer text-[16px] w-[100%] m-auto bg-[#2097F6] text-white p-[5px]  rounded-[25px] ">
                <button>Next</button>
                <div className="w-[60px] h-[60px] relative flex justify-center items-center rounded-full bg-[#FFFFFF]">
                  <img src="/arrowright.png" alt="" className="w-[12px]" />
                </div>
                <img
                  src="/btnarrow.png"
                  alt=""
                  className="absolute left-[40%] bottom-[-30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-5 */}
      <div className="w-[95%] m-auto bg-[#FFEDD5] rounded-[32px] p-[20px] text-black relative">
        <img
          src="/icon.png"
          alt=""
          className="absolute hidden md:flex top-[-70px] right-[70px]"
        />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-[100%] md:w-[40%] leading-[43px]">
            <h1 className="font-[500] text-[37px]">
              Boost Your Product Revenue Instantly
            </h1>
            <p className="text-[#09090B] leading-[25px] mt-[10px] mb-[30px]">
              Whether you’re a startup, or launching a new product, saving time
              and money never gets old.
            </p>
          </div>
          <div className="flex items-center ">
            <button className="bg-black text-white py-[19px] px-[30px] rounded-[30px] font-[500] text-[14px]">
              See Plans
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[32%]">
            <span className="font-[700] text-[44px] text-gray-400 tracking-[-2px]">
              01
            </span>
            <h2 className="font-[500] text-[18px]">ChooseYour Plan</h2>
            <p className="font-[400] text-[16px] leading-[21px] mt-[5px]">
              Immediately start working on new designs for your product(s) as
              you wish.
            </p>
          </div>
          <div className="w-[32%]">
            <span className="font-[700] text-[44px] text-gray-400 tracking-[-2px]">
              02
            </span>
            <h2 className="font-[500] text-[18px]">Quick Turnaround</h2>
            <p className="font-[400] text-[16px] leading-[21px] mt-[5px]">
              Receive your new designs typically within days withunlimited
              revisions.
            </p>
          </div>
          <div className="w-[32%]">
            <span className="font-[700] text-[44px] text-gray-400 tracking-[-2px]">
              03
            </span>
            <h2 className="font-[500] text-[18px]">Product Growth</h2>
            <p className="font-[400] text-[16px] leading-[21px] mt-[5px]">
              Discover how well-informed, expert UX design improves yourrevenue.
            </p>
          </div>
        </div>
      </div>
      {/* Section-6 */}
      <div className="py-[50px] w-[95%] m-auto">
        <div className="ml-[80px] flex flex-col gap-[40px] items-center">
          <img className="w-[134px]" src="/img1.png" alt="" />
          <div>
            <h1 className="font-[500] text-[37px] w-[420px] text-center leading-[42px]">HowNoelX Helps You Sell More Products</h1>
            <p className="text-center mt-[10px] text-[#A1A1AA] ">Thestrategy behind NoelX’s cutting-edge designs.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-[20px] mt-[30px]">
          <div className="flex flex-col items-center gap-[5px] text-center">
            <img src="/Frame.png" alt="" className="w-[62px]"/>
            <h2 className="text-[18px] font-[500]">UX Audit </h2>
            <p className="text-[#A1A1AA] ">An in-depth review of your current product, users, & goals.</p>
          </div>
          <div className="flex flex-col items-center gap-[5px] text-center">
            <img src="/Frame-1.png" alt="" className="w-[62px]"/>
            <h2 className="text-[18px] font-[500]">In-depthResearch & Analysis</h2>
            <p className="text-[#A1A1AA] ">Wedig deep into your niche, ideal customers, and the competition</p>
          </div>
          <div className="flex flex-col items-center gap-[5px] text-center">
            <div className="flex ">
            <img src="/Frame-2.png" alt="" className="w-[55px]"/>
            <img src="/Frame-2.png" alt="" className="w-[55px] mx-[-27px]"/>
            <img src="/Frame-2.png" alt="" className="w-[55px]"/>
            </div>
            <h2 className="text-[18px] font-[500]">Revenue-drivenStrategy</h2>
            <p className="text-[#A1A1AA] ">We design your product strategy around extensive analytics.</p>
          </div>
          <div className="flex flex-col items-center gap-[5px] text-center">
            <img src="/Frame-3.png" alt="" className="w-[62px]"/>
            <h2 className="text-[18px] font-[500]">Visual& UI Design</h2>
            <p className="text-[#A1A1AA]">We develop scalable, reliable design interfaces that users will love.</p>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className="w-[100%] md:w-[90%] m-auto">
        <div className="w-[100%] flex justify-end gap-[100px] mb-10 md:mb-0">
          <h1 className="font-[500] text-[37px] text-center w-[520px] leading-[43px]">Witness the beauty of our other stunning masterpieces</h1>
          <img src="/icon.png" alt="" className="w-[127px] h-[124px] hidden md:flex "  />
        </div>
        <div className="flex justify-center flex-wrap gap-[20px]">
          <img src="/slide5.png" alt="" className="w-[48%] h-[350px] md:h-[450px]"/>
          <img src="/slide1.png" alt="" className="w-[45%] h-[350px] md-h-[500px] mt-[80px]" />
          <img src="/slide4.png" alt="" className="w-[48%] h-[250px] md:h-[400px] rounded-[20px] mt-[30px]"/>
          <img src="/slide2.png" alt="" className="w-[45%] h-[250px] md:h-[400px]"/>
          
        </div>
      </div>

      {/* Section-8 */}
      <div className="w-[95%] bg-[#27272A] p-[30px] m-auto my-[50px] relative flex items-center  flex-col rounded-[32px]">
        <img src="/icon.png" alt="" className="absolute hidden md:flex top-[-80px] left-[20px]" />
        <div>
          <h1 className="font-[500] text-[37px] text-center">You Don’t Need a Whole UX Department</h1>
          <p className="text-[#A1A1AA] text-center">Discoverour package options and choose what works best for you and your team.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[20px] mt-[40px]">
          <div className="w-[100%] md:w-[32%] p-[20px] bg-[#18181B] rounded-[15px] flex flex-col gap-[5px] items-start">
            <h2 className="font-[500] text-[18px]">Weekly</h2>
            <h1 className="font-[600] text-[24px]">$1000/<span className="text-[18px] font-[400]">week</span></h1>
            <p className="font-[400] text-[16px] text-[#A1A1AA]">For quick one off tasks that don’t take that much time</p>
            <button className="text-[16px] font-[500] text-[#18181B] bg-white w-[100%] p-[16px] rounded-[10px]">Subscribe</button>
            <h3 className="font-[700]">What’s included:</h3>
            <ul className="list-disc ps-[20px] flex flex-col gap-[7px]">
              <li className="font-[500] text-[16px] text-[#E4E4E7]">One request at a time</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">Average 48 hours delivery</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You get access to Slack</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You get access to our project management tool</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You queue issues/tickets, we work on them</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">Easy card payments</li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[32%] p-[20px] bg-[#18181B] rounded-[15px] flex flex-col gap-[5px] items-start">
            <div className="w-[100%] flex items-center justify-between">
            <h2 className="font-[500] text-[18px]">Weekly</h2>
            <img src="/light.png" alt="" />
            </div>
            <h1 className="font-[600] text-[24px]">$3500/<span className="text-[18px] font-[400]">mon</span></h1>
            <p className="font-[400] text-[16px] text-[#A1A1AA]">For quick one off tasks that don’t take that much time</p>
            <button className="text-[16px] font-[500] text-[#18181B] bg-white w-[100%] p-[16px] rounded-[10px]">Get Started</button>
            <h3 className="font-[700]">What’s included:</h3>
            <ul className="list-disc ps-[20px] flex flex-col gap-[7px]">
              <li className="font-[500] text-[16px] text-[#E4E4E7]">One request at a time</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">Average 48 hours delivery</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You get access to Slack</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You get access to our project management tool</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">You queue issues/tickets, we work on them</li>
              <li className="font-[500] text-[16px] text-[#E4E4E7]">Easy card payments</li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[32%] p-[20px] bg-[#18181B] rounded-[15px] flex flex-col gap-[5px] items-start">
            <img src="/men.png" alt="" className="w-[100%] md:w-[270px] mb-[30px]" />
            <h3 className="font-[500] text-[18px] ">Looking for a fixed price?</h3>
            <p className="text-[16px] text-[#A1A1AA] mb-[10px] ">Feel free to book a quick discovery call to tell us about your needs and we can give you a quick quote.</p>
            <button className="text-[16px] font-[500] text-[#18181B] bg-white w-[100%] p-[16px] rounded-[10px]">Book a discovery call</button>
          </div>
        </div>
      </div>
       {/* Section-9 */}
       <div className=" flex justify-center mb-[50px]">
        <div className="w-[350px] h-[350px] bg-[#FFEDD5]  text-black rounded-full flex justify-center items-center flex-col p-[20px] text-center">

        <img src="" alt="" />
        <div>
          <span className="font-[500] text-[45px]">100%</span>
          <h2 className="font-[500] text-[18px]">Proprietary</h2>
          <p className="font-[400] text-[16px]">Our designs are completely unique, and always <span className="font-bold">100%</span> yours.</p>
        </div>
        </div>
       </div>
    </div>
  );
}

export default Content;
