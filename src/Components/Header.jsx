import React from 'react'
import my_img from '../assets/iffti.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-black h-full pt-20 px-4'>
      <div className='w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10'>

        {/* Text Section */}
        <div className='text-center md:text-left'>
          <h1 className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'>
            Hi, <span className='text-[#ff0000]'><br className='hidden md:block' />I'm </span>Iffti
          </h1>
          <p className='text-white mt-5 text-base sm:text-lg md:text-xl'>
            A Front-End Developer based in Dhaka
          </p>

          {/* Social Icons */}
          <div className='flex justify-center md:justify-start pt-10 gap-6'>
            <a href='https://www.linkedin.com/in/sadbinrahmaniffti/' target='_blank'><FaLinkedin className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
            <a href='https://github.com/Iffti2000' target='_blank'><FaGithub className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
            <a href='https://x.com/iftirahman335' target='_blank'><FaXTwitter className='text-[#ff0000] text-4xl sm:text-5xl' /></a>
          </div>
        </div>

        {/* Image */}
        <img
          className='w-60 sm:w-72 md:w-80 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] rounded-2xl'
          src={my_img}
          alt="Iffti"
        />
      </div>
    </div>
  )
}

export default Header


