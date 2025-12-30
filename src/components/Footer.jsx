import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around items-center border-t-[0.5px] h-10'>
      <div><p>Copyright © 2025 Police Radio Code. All rights reserved</p></div>
      <div className='flex gap-3'>
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Linkedin />
        </a>
        <a href="">
          {/* <Tiktok /> */}
        </a>
        <a href="">
          
        </a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </footer>
  )
}

export default Footer