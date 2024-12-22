import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import profileImg from "../images/profile.jpeg";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {

  const [toggle,setToggle] = useState(false);

  const handleClick = ()=>{
    setToggle(!toggle);
  }

  return (
    <header className="bg-white shadow-md py-5 fixed min-w-full sm:hidden md:block lg:block">
      <div className="relative lg:right-10">
        <div className="flex flex-row justify-end space-x-5 items-center">
          <div>
            <FaRegBell className="h-8 w-6 cursor-pointer" />
          </div>

          <div className="flex flex-row space-x-2">
            <div className="w-10 h-10">
              <img
                src={profileImg}
                className="rounded-full w-full h-full object-cover cursor-pointer"
                alt="profile"
              />
            </div>

            <div className="flex flex-col space-y-0 font-roboto">
              <p className="font-semibold text-lg">Lorem ips</p>
              <p className="text-gray-500">Manager</p>
            </div>
          </div>
          <div className="mr-8 " >
            <IoMdArrowDropdown className="w-6 h-6 cursor-pointer" onClick={()=>handleClick()} />
          </div>
          {
            toggle &&
          <button className="px-4 py-2 bg-amber-500 rounded-2xl text-white font-bold ">SignOut</button>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
