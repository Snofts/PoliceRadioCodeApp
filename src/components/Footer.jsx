import { Instagram, Linkedin } from 'lucide-react'
import { FaTiktok, FaInstagram, FaLinkedin, FaPinterestP, FaXTwitter } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around items-center border-t-[0.5px] h-10'>
      <div><p>Copyright © 2025 Police Radio Code. All rights reserved</p></div>
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
          <FaXTwitter />
        </a>
      </div>
    </footer>
  )
}

export default Footer