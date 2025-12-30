import React, { useState } from "react";
import { navLinks } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
    if(openNavigation){
        setOpenNavigation(false)
        // enablePageScroll()
    } else{
        setOpenNavigation(true)
        // disablePageScroll()
    }
  }



  return (
    <header>
      <nav>
        <div>
          <h2 className="text-white">PoliceRadioCodeApp</h2>
        </div>
        <ul>
          {navLinks.map(({ label, url }) => (
            <li key={label} className="hover:text-blue hover:scale-100">
              <a
                // className="hover:text-blue hover:scale-100"
                href={url}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
