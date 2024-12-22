import React, { useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { SiGoogledocs } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function SmallNavbar() {
  const location = useLocation();
  
  // Determine active index based on current route
  const routeMap = {
    "/": 0,
    "/portfolio": 1,
    "/input": 2,
    "/profile": 3,
  };
  const activeIdx = routeMap[location.pathname] || 0;

  return (
    <div className="lg:hidden md:hidden sm:block z-50 fixed bottom-0 flex justify-center items-center mx-auto w-full">
      <div className="flex flex-row justify-center items-center space-x-12 py-4 bg-gray-50 rounded-t-lg w-full">
        <Link to="/" className="w-full">
          <div
            className={`flex flex-col justify-center items-center space-y-0.5 ${
              activeIdx === 0 ? "text-customOrange" : "text-gray-400"
            }`}
          >
            <TbHomeFilled className="text-3xl" />
            <p className="text-lg">Home</p>
          </div>
        </Link>
        <Link to="/portfolio" className="w-full">
          <div
            className={`flex flex-col justify-center items-center space-y-0.5 ${
              activeIdx === 1 ? "text-customOrange" : "text-gray-400"
            }`}
          >
            <SiGoogledocs className="text-3xl" />
            <p className="text-lg">Portfolio</p>
          </div>
        </Link>
        <Link to="/input" className="w-full">
          <div
            className={`flex flex-col justify-center items-center space-y-0.5 ${
              activeIdx === 2 ? "text-customOrange" : "text-gray-400"
            }`}
          >
            <MdAssignmentAdd className="text-3xl" />
            <p className="text-lg">Input</p>
          </div>
        </Link>
        <Link to="/profile" className="w-full">
          <div
            className={`flex flex-col justify-center items-center space-y-0.5 ${
              activeIdx === 3 ? "text-customOrange" : "text-gray-400"
            }`}
          >
            <IoPerson className="text-3xl" />
            <p className="text-lg">Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SmallNavbar;
