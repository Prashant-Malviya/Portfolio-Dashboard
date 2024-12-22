import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import Projects from "../components/portfolio/Projects";

function Portfolio() {
  const [active, setActive] = useState("Project");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery,setSearchQuery] = useState("");

  const handleClick = (item, index) => {
    setActive(item);
    setActiveIndex(index);
    console.log(index);
    console.log(item);
  };

  return (
    <div className="flex flex-col">
      {/* portfolio */}
      <div className="mb-5">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between items-center">
            <div className="font-bold text-2xl p-2 sm:mb-0 md:mb-3 lg:mb-3">
              <p>Portfolio</p>
            </div>
            <div className="sm:flex sm:flex-row sm:space-x-5 sm:text-3xl text-customOrange lg:hidden md:hidden sm:block">
              <div>
                <MdShoppingBag />
              </div>
              <div>
                <FaBell />
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row xl:justify-between lg:flex-col lg:space-y-2 md:flex-col md:space-y-2 sm:flex-col sm:space-y-4">
            <div className="flex flex-col space-y-3">
              <div className="p-2 ml-4">
                <nav>
                  <ul className="flex flex-row sm:space-x-7 md:space-x-10 lg:space-x-10">
                    {["Projects", "Saved", "Shared", "Achievment"].map(
                      (item, index) => (
                        <li
                          key={item}
                          onClick={() => handleClick(item, index)}
                          className={`cursor-pointer ${
                            active === item
                              ? "text-customOrange font-bold"
                              : "text-gray-600"
                          }`}
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
              <div className="w-[32rem]  h-[1.3px] bg-gray-300">
                {activeIndex !== undefined && (
                  <div
                    className="w-[6rem] h-[3px] bg-customOrange rounded-full transition-all duration-200 absolute sm:hidden md:block lg:block"
                    style={{
                      transform: `translateX(${activeIndex * 6}rem)`,
                    }}
                  ></div>
                )}

                {activeIndex !== undefined && (
                  <div
                    className="w-[4rem] h-[3px] bg-customOrange rounded-full transition-all duration-200 absolute sm:block md:hidden lg:hidden"
                    style={{
                      transform: `translateX(${activeIndex * 5.4}rem)`,
                    }}
                  ></div>
                )}
              </div>
            </div>
            <div className="flex flex-row space-x-5">
              <div className="lg:flex md:flex lg:flex-row md:flex-row space-x-2  justify-center items-center text-gray-700 text-lg sm:hidden md:block lg:block">
                <FaFilter />
                <p>Filter</p>
              </div>
              <div>
                <div className="flex flex-row justify-end items-center">
                  <input
                    type="text"
                    placeholder="Search a project..."
                    className="w-80 px-2 py-3 shadow-sm border rounded-xl"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}

                  />
                  <div className="bg-customOrange p-2 text-white rounded-xl absolute text-xl cursor-pointer">
                    <IoSearchSharp className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Cards Section */}
      <div className="h-[30rem] overflow-y-auto space-y-8">
    
        <Projects searchQuery={searchQuery} />
        
        {/* <Cards /> */}
      </div>
    </div>
  );
}

export default Portfolio;
