import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { GiPaintBucket } from "react-icons/gi";


export const TopBar = () => {
  return (
    <div className='w-[100%] pt-5'>
        <div className='flex gap-[18%] pl-[20%] ' >
            <div>
                <p className='text-[30px] font-joti text-primaryred'>KODIMADAN</p>

                <div className='flex gap-[20px]'>
                <p className='ml-[120px] text-[22px] text-primaryyel font-jim'>Hardwares &Paints</p>
                <GiPaintBucket className='text-[25px]' />
                </div>
                

            </div>
            <div>
                <li className='flex gap-[15%] font-jim  text-[25px] text-black/60 items-center' >
                    
                    <ul className=' hover:text-primaryred hover:scale-125 hover:cursor-pointer'>Home </ul>
                    <ul className=' hover:text-primaryred hover:scale-125 hover:cursor-pointer'>Products</ul>
                    <ul className=' hover:text-primaryred hover:scale-125 hover:cursor-pointer'>Deals</ul>
                    <ul className=' hover:text-primaryred hover:scale-125 hover:cursor-pointer'>Location</ul>
                    <ul className=' hover:text-primaryred hover:scale-125 hover:cursor-pointer'>Contacts</ul>
                    <ul className='hover:bg-primaryred text-gray-400 text-[25px] rounded-3xl hover:text-white p-2 duration-200 items-center hover:cursor-pointer'>   <MdShoppingCart /></ul>
                </li>
            </div>
        </div>
    </div>
  )
}
