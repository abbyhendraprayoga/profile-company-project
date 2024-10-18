import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="font-bold text-5xl text-center px-4">
          Empowering your success with every product
        </h1>
        <p className="pt-5 text-xl text-center px-4">
          Discover our range of inovative products degsigned to meet your needs.
        </p>
      </div>
      <div className="pl-4 pt-20 md:pl-10 md:pt-28">
        <ul className="flex flex-wrap justify-center items-center">
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              All
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              Web
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              Mobile
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              Dekstop
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              Iot
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-8 text-xl">
              Ai
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 px-10 pt-10">
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
          <div>
            <Image src={"/Group 32.png"} width={500} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
