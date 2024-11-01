import React from 'react'
import Surya from "./assets/images.png" //surya cement 
import Mark from "./assets/mark.png"
import Ramco from "./assets/Ramco.png"


export const Ourdeals = () => {
  return (
    <div className='relative'>
        <div className='pt-10 pl-[10%]'><p className='text-[25px] font-extrabold font-itim '><span className='text-[40px]'>D</span>ealing With !</p></div>
        <div className='flex gap-8 pl-[7%] pt-4'>
            <div className='hover:scale-110  hover:shadow-2xl rounded-2xl w-[240px] h-[80px] border-2'><p style={{ textShadow: '12px 8px 9px rgba(0, 0, 0, 0.25)'}} className='text-[25px] font-bold py-5 px-10 items-center'><span className='text-primaryred'>Asian</span><span className='text-primaryyel'> Paints</span></p></div>
            <div className='hover:scale-110 hover:shadow-2xl rounded-2xl w-[240px] px-7 h-[80px] border-2'>
                <img src={Surya} width={180} alt="" className='' />
            </div>
            <div className='hover:scale-110 hover:shadow-2xl  rounded-2xl w-[240px] px-14 h-[80px] border-2'><img src={Mark} width={170}  alt="" className=''/></div>
            <div className='hover:scale-110 hover:shadow-2xl  rounded-2xl w-[240px] px-11  py-3 h-[80px] border-2'>
                <img src={Ramco} width={150} alt="" className=''/>
            </div>
            <div className='hover:scale-110 rounded-2xl w-[240px] h-[80px] border-2 '></div>
        </div>
        <div className='h-[100px]'>

        </div>
    </div>
  )
}
