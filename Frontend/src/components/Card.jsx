import React, { useState } from "react";
import toast from "react-hot-toast";

function Card({item}) {

  const [productCount,setProductCount] = useState(0);

  const handleClick = (productCount)=>{
    setProductCount(productCount+1)
    toast.success("Product added successfully!")
  }


  console.log(item.title);
  

  return (
    <div className="flex flex-row pr-4 rounded-lg shadow-lg shadow-gray-300">
      <div>
        <img src={item.image} className="lg:h-48 md:h-44 sm:h-full sm:w-32"  alt="project1 image" />
      </div>
      <div className="lg:px-5 lg:pt-4 md:px-5 md:pt-4 sm:pt-1 sm:px-3 sm:pb-4">
        <div className="flex flex-col sm:space-y-0 md:space-y-1 lg:space-y-1">
          <h3 className="font-normal text-lg">{item.title}</h3>
          <p className="text-gray-500 sm:hidden md:hidden lg:block">
            {item.description}
          </p>
        </div>
        <div className="flex flex-row justify-between lg:mt-4 md:mt-4 sm:mt-2 items-center">
          <div className="flex flex-col space-x-0.5">
            <p className="lg:text-lg md:text-lg sm:text-sm">{item.language}</p>
            <p className="text-gray-500 lg:text-base md:text-base sm:text-xs">{item.author}</p>
          </div>
          <div>
            <button className="bg-gradient-to-r from-orange-400 to-customYellow text-white font-bold py-1 px-6 rounded sm:block md:hidden lg:hidden" onClick={()=>handleClick(productCount)}>A</button>
            <button className="bg-gradient-to-r from-orange-400 to-customYellow text-white font-bold py-2 px-4 rounded sm:hidden md:block lg:block" onClick={()=>handleClick(productCount)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
