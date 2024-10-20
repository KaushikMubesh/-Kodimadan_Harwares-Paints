import React from 'react'
import Asian from "./assets/Asian.png"



export const AsianPaints = () => {
  return (
    <div className='p-0 mx-0 ' >
        <div className='w-full flex items-center justify-center bg-primaryyel/70 h-[500px] blur-xl '>
            <div className='flex'>
                <div className='w-[400px] h-[400px]  bg-gray-100/40 '>
                        HI
                </div>
                <div><img src={Asian} alt="" /></div>
            </div>
            
        </div>
        
    </div>
  )
}
