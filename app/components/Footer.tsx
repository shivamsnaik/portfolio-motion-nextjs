import React from 'react'
import { FlipWords } from './ui/flip-words';
import { IoHeart } from "react-icons/io5";


const flipWords = [
  "by Shivam Naik",
  `in Deutschland`,
];
const Footer = () => {
  return (
    <div className='pt-10 pb-10 bottom-0 w-screen left-0'>
      <div className='flex justify-center items-center
        text-lg md:text-[2em] font-sans font-bold shadow-card absolute p-10 md:p-20 bg-blue-100 left-0 right-0 bottom-0 w-full' 
      style={{background: 'radial-gradient(ellipse, rgba(63,94,251,0.3) 1%, rgba(96,165,250,0.6) 20%, rgba(255,255,255,0.4) 120%)'}}
      >
        <span className='flex flex-row items-center justify-center'>Made with&nbsp;<span><IoHeart className='text-red-500' /></span>&nbsp;<FlipWords className='bg-white text-blue-500 rounded-sm p-2' words={flipWords}/></span>
      </div>
    </div>
  )
}

export default Footer;