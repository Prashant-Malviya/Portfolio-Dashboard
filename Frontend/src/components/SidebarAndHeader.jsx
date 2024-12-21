import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function SidebarAndHeader() {
  return (
    <div className="relative">
      <div className="z-0">
        <Header />
      </div>
      <div className="z-50 overflow-visible">
        <Sidebar />
      </div>
    </div>
  );
}

export default SidebarAndHeader;
