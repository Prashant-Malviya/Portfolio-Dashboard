import React, { useState } from "react";
import {
  logo,
  dashboardIcon,
  profileIcon,
  inputIcon,
  portfolioIcon,
} from "../images/index.js";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: "Dashboard", icon: dashboardIcon, path: "/" },
    { label: "Portfolio", icon: portfolioIcon, path: "/portfolio" },
    { label: "Inputs", icon: inputIcon, path: "/input" },
    { label: "Profile", icon: profileIcon, path: "/profile" },
  ];

  return (
    <div className="flex flex-col bg-customOrange min-h-screen w-64 max-w-72  fixed z-10 sm:hidden md:block lg:block">
      <div className="flex flex-row space-x-2 font-bold text-white my-8 font-roboto justify-center relative right-12 cursor-pointer">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
        <p>LOGO</p>
      </div>

      
      <div className="flex flex-col space-y-3 mt-20 text-white text-lg">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-4 px-6 py-2 cursor-pointer ${
              activeIndex === index
                ? "rounded-lg bg-gradient-to-r from-[rgba(255,255,255,.50)] to-transparent"
                : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.icon} alt={item.label} />
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
