import React from 'react'
import Asian from "./assets/Asian.png"



export const AsianPaints = () => {
  return (
    <div className='p-0 mx-0'>
        <div className='w-full flex items-center justify-center h-[600px]'>
            <div className='inset-0 w-full h-full bg-primaryyel/70'>
                <div className= 'justify-center items-center flex pt-[7%] z-10'>
                    <div className='flex gap-72'>
                    <div className='w-[500px] h-[400px] bg-gray-100/40 flex items-center justify-center'>
                        <p className='text-black z-20 font-kavivanar text-[20px] p-8'><span>    </span> We have been proudly dealing with Asian Paints     since 2023 and are an authorized dealer for the   brand. With over 2200+ colors available, we offer a wide range of options to help you create the perfect look for your home. Trust us for quality, variety, and expert advice on all your painting needs!</p>
                    </div>
                    <div className='pt-0 '><img width={500} src={Asian} alt="" /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
