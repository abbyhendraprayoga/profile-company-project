import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 px-10 pt-10">
        <div className="overflow-hidden rounded-lg shadow-md transform transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md transition-all duration-700 scale-100 hover:scale-105">
          <Image src={"/Group 32.png"} width={500} height={40} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Products;
