import React from 'react'

function Navbar() {
  return (
    <nav className="w-[95%] md:w-[90%] h-[50px] md:h-[100px] m-auto flex items-center justify-between ">
        <div className="logo">
          <h1 className="text-[30px]">Logo</h1>
        </div>
        <div className="socialLinks  flex items-center gap-[5px] bg-[#292524] px-[20px] h-[60px] rounded-[42px]">
          <a
            href="#"
            className="bg-[#0C0A09] transition-all ease-in p-[5px] rounded-full w-[50px] h-[50px] flex justify-center items-center"
          >
            <img src="/Union.svg" alt="" className="w-[20px] hover:scale-[1.05] " />
          </a>
          <a
            href="#"
            className="bg-[#0C0A09] p-[5px] rounded-full w-[50px] h-[50px] flex justify-center items-center"
          >
            <img src="/Union-1.svg" alt="" className="w-[20px] hover:scale-[1.05]" />
          </a>
          <a
            href="#"
            className="bg-[#0C0A09] p-[5px] rounded-full w-[50px] h-[50px] flex justify-center items-center"
          >
            <img src="/Union-2.svg" alt="" className="w-[20px] hover:scale-[1.05]" />
          </a>
          <a
            href="#"
            className="bg-[#0C0A09] p-[5px] rounded-full w-[50px] h-[50px] flex justify-center items-center"
          >
            <img src="/google.svg" alt="" className="w-[20px] hover:scale-[1.05]" />
          </a>
        </div>
      </nav>
  )
}

export default Navbar