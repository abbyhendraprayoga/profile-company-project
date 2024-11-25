"use client";

import React from "react";
import Image from "next/image";
import { productsData, Product } from "@/components/Products/ProductsData"; // Import data

const OurProducts = () => {
  // Gunakan data langsung dari productsData
  const products: Product[] = productsData;

  return (
    <div>
      <div className="flex flex-col p-2 lg:p-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6">
          <div className="flex flex-col gap-3">
            <div>
              <hr className="w-9 bg-indigo-900 h-0.5" />
              <span className="text-indigo-900 font-medium">OUR PRODUCTS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:w-11/12">
              Empowering your success with every product.
            </h1>
            <p className="text-sm sm:text-xl w-10/12 text-indigo-900">
              We are committed to providing a range of innovative products
              designed to empower your financial management and increase your
              success.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="inline-flex py-3 px-5 w-[6rem] text-base text-center text-white bg-indigo-800 hover:bg-indigo-900"
            >
              See All
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} data-aos="zoom-in">
                <div className="shadow-xl transform object-cover w-fit transition-all duration-700 scale-100 hover:scale-105">
                  <Image
                    src={product.image}
                    width={350}
                    height={40}
                    alt={product.name}
                    className="cursor-pointer rounded-lg relative"
                  />
                  <span className="absolute bottom-3 md:bottom-5 left-4 px-4 lg:px-10 py-2 lg:py-4 text-black bg-white rounded-md font-bold text-xs md:text-sm lg:text-base">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
