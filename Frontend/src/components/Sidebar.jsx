import React, { useState } from "react";
import {
  logo,
  dashboardIcon,
  profileIcon,
  inputIcon,
  portfolioIcon,
} from "../images/index.js";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col bg-customOrange min-h-screen w-64 max-w-72  fixed z-10">
      <div className="flex flex-row space-x-2 font-bold text-white my-8 font-roboto justify-center relative right-12">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
        <p>LOGO</p>
      </div>

      <div className="flex flex-col space-y-3 mt-20 text-white text-lg font-roboto">
        <div
          className={`flex flex-row space-x-4 px-6 py-2 cursor-pointer ${
            activeIndex === 0
              ? "rounded-lg bg-gradient-to-r from-[rgba(255,255,255,.50)] to-transparent"
              : ""
          }`}
          onClick={() => handClick(0)}
        >
          <img src={dashboardIcon} alt="" />
          <p>Dashboard</p>
        </div>
        <div
          className={`flex flex-row space-x-4 px-6 py-2 cursor-pointer ${
            activeIndex === 1
              ? "rounded-lg bg-gradient-to-r from-[rgba(255,255,255,.50)] to-transparent"
              : ""
          }`}
          onClick={() => handClick(1)}
        >
          <img src={portfolioIcon} alt="" />
          <p>Portfolio</p>
        </div>
        <div
          className={`flex flex-row space-x-4 px-6 py-2 cursor-pointer ${
            activeIndex === 2
              ? "rounded-lg bg-gradient-to-r from-[rgba(255,255,255,.50)] to-transparent"
              : ""
          }`}
          onClick={() => handClick(2)}
        >
          <img src={inputIcon} alt="" />
          <p>Inputs</p>
        </div>
        <div
          className={`flex flex-row space-x-4 px-6 py-2 cursor-pointer ${
            activeIndex === 3
              ? "rounded-lg bg-gradient-to-r from-[rgba(255,255,255,.50)] to-transparent"
              : ""
          }`}
          onClick={() => handClick(3)}
        >
          <img src={profileIcon} alt="" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
