import React from 'react'
import { LuShoppingBag } from "react-icons/lu";
import Logo from "./assets/logo.png"

export const MainBox1 = () => {
  return (
    <div className=''>
        <div>
            <div className='font-thin text-[50px] font-itim text-gray-900 pl-[10%] pt-[4%] ' style={{ textShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)' , WebkitTextStroke: '1px white' }}>
                    <p className=''><span className='text-[80px]' >D</span>
                        esign Your Perfect <span className='text-primaryyel text-[80px]'>House</span> with</p>
                    <p className=' transform -translate-y-11'>
                        Our <span className='text-[80px] text-primaryred '>Quality </span>Products !!!
                    </p>
            </div>
            <div className='pl-[10%]'>
                <p className='text-[25px] transform -translate-y-11 font-joan'><span className='text-[40px]'>I</span>nvest in Strength and Durability for Your Home</p>
                <div className='flex flex-col gap-7'>
                    <p className='font-kantumruy w-[700px] text-[20px]'>Offering paints, hardware, plumbing accessories, Ramco cement, modern taps, white cement, and construction rental materials. Get 20% off your first purchase!</p>
                    <button className='flex gap-2 w-[150px] shadow-2xl hover:scale-110 duration-300 hover:shadow-primaryred bg-primaryred text-[18px] rounded-2xl p-3 font-bold text-gray-100 items-center'><LuShoppingBag />Order Now</button>
                </div>
                            
            </div>
            {/* <div className='absolute pl-[60%] pb-8'>
                <img src={Logo} width={600} alt="" />
            </div> */}
        </div>
        
    </div>
  )
}
