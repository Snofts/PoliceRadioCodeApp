import React, { useState } from "react";
import { navLinks } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll()
    } else {
      setOpenNavigation(true);
      // disablePageScroll()
    }
  };

  return (
    <header>
      <nav>
        <div>
          <h2 className="text-white">PoliceRadioCodeApp</h2>
        </div>
        <ul className={`${openNavigation ? "" : "max-md:hidden"}`}>
          {navLinks.map(({ label, url }) => (
            <li
              key={label}
              className={`hover:text-[#40C4FF] active:text-[#40C4FF] hover:scale-102 ${
                url === pathName.hash
                  ? "text-[#40C4FF] scale-102 hr-2"
                  : ""
              }`}
              onClick={() => setOpenNavigation(false)}
            >
              <a
                // className="hover:text-blue hover:scale-100"
                href={url}
              >
                {label}
              </a>
              {
                url === pathName.hash ? <hr className="my-1 border-t " /> : null
              }
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
