import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

function Portfolio() {
  const [active, setActive] = useState("Project");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (item, index) => {
    setActive(item);
    setActiveIndex(index);
    console.log(index);
  };

  return (
    <div className="">
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-2xl p-2 mb-3">
          <p>Portfolio</p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-2">
            <div className="p-2 ml-4">
              <nav>
                <ul className="flex flex-row space-x-10">
                  {["Project", "Saved", "Shared", "Achievment"].map(
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
            <div className="w-[32rem] h-[1.3px] bg-gray-300">
              {activeIndex !== undefined && (
                <div
                  className="w-[6rem] h-[3px] bg-customOrange rounded-full transition-all duration-200 absolute"
                  style={{
                    transform: `translateX(${activeIndex * 6}rem)`,
                  }}
                ></div>
              )}
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <div>
              <FaFilter />
            </div>
            <div>
              <div className="flex flex-row">
                <input type="text" />
                <IoSearchSharp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
