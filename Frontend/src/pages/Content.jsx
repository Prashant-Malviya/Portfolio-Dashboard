import React from "react";
import Portfolio from "./Portfolio";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inputs from "./Inputs";
import Profile from "./Profile";

function Content() {
  return (
    <div className="p-5 sm:mx-0 sm:my-0 md:mx-5 md:my-3 lg:mx-10 lg:my-5 bg-white w-auto h-auto sm:top-0 sm:left-0 md:top-[6.31rem] md:left-[16.63rem] lg:top-[6.31rem] lg:left-[16.63rem] rounded-lg shadow-lg z-1 fixed sm:w-full sm:h-full md:w-auto md:h-auto lg:w-auto lg:h-auto">
      <div className="sticky top-0 bg-white z-10 sm:min-h-screen sm:min-w-full">
        
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/input" element={<Inputs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
    </div>
  );
}

export default Content;
