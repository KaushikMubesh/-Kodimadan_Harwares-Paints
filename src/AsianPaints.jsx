import React from 'react'
import Asian from "./assets/Asian.png"



export const AsianPaints = () => {
  return (
    <div className='p-0 mx-0'>
        <div className='w-full flex items-center justify-center h-[600px]'>
            <div className='inset-0 w-full h-full bg-primaryyel/70 blur-xl'>
                <div className= 'justify-center items-center flex pt-[7%] z-10'>
                    <div className='flex gap-72'>
                    <div className='w-[500px] h-[400px] bg-gray-100/40'></div>
                    <div className='pt-0'><img width={500} src={Asian} alt="" /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
