import { Instagram, Linkedin } from 'lucide-react'
import { FaTiktok, FaInstagram, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex  max-md:flex-col justify-around max-md:justify-center items-center max-md:text-sm max-sm:text-[0.7rem] border-t-[0.5px] h-10 max-md:h-20 max-sm:h-15 max-md:gap-4 max-sm:gap-2'>
      <div><p>Copyright © {new Date().getFullYear()} Police Radio Code. All rights reserved</p></div>
      <div className='flex gap-3'>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaTiktok />
        </a>
        <a href="">
          <SiMeta />
        </a>
        <a href="">
          <FaPinterestP />
        </a>
        <a href="">
          <BsTwitterX />
        </a>
      </div>
    </footer>
  )
}

export default Footer