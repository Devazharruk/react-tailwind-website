import React from 'react'

function Footer() {
  return (
    <div className='w-[95%] m-auto '>
        <div className='flex gap-10 flex-col md:flex-row items-center justify-between w-[100%] mb-[30px]'>
            <div className='w-[100%] md:w-[40%]'>
                <h1 className='font-[500] text-[24px]'>Logo</h1>
                <p className='text-[#A1A1AA] text-[16px] font-[400] mt-[10px]'>We're a brand strategy and digital design agency, building brands that matter in culture.</p>
            </div>
            <div className='w-[100%] md:-w-[50%] flex justify-between'>
                <div>
                    <h1 className='font-[500] text-[18px]'>Phone Number</h1>
                <span className='text-[#A1A1AA] text-[16px] font-[400] mt-[10px]'>000-000-000</span>
                </div>
                <div>
                    <h1 className='font-[500] text-[18px]'>Email</h1>
                    <span className='text-[#A1A1AA] text-[16px] font-[400] mt-[10px]'>design@throughtheglasscreatives.com</span>
                </div>
            </div>
        </div>
        <hr className='bg-[#27272A]' />
        <div className='flex justify-between my-[50px]'>
            <p className='text-[#A1A1AA] text-[14px] font-[400]'>Copyright @ Azhar Ali 2024</p>
            <div className='flex gap-[50px]'>
                <a className='text-[#A1A1AA] text-[14px] font-[400]' href="#">Privacy Policy</a>
                <a className='text-[#A1A1AA] text-[14px] font-[400]' href="#">Terms of Service</a>
            </div>
        </div>
    </div>
  )
}

export default Footer