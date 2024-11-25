// components/Products.tsx
import React from "react";
import Image from "next/image";
import { productsData, Product } from "./ProductsData";

interface Props {
  category: string;
  openDet: (product: Product | string) => void;
}

const Products = ({ category, openDet }: Props) => {
  const filteredProducts =
    category === "all"
      ? productsData
      : productsData.filter((prod) => prod.category === category);

  return (
    <div className="flex justify-center items-center pb-32">
      <div className="grid grid-cols-2 gap-4 w-fit md:grid-cols-3 md:gap-8 px-4 md:px-80 pt-10">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} data-aos="zoom-in">
              <div className="shadow-xl transform object-cover w-fit transition-all duration-700 scale-100 hover:scale-105">
                <Image
                  src={product.image}
                  width={400}
                  height={40}
                  alt={product.name}
                  onClick={() => openDet(product)}
                  className="cursor-pointer w-full h-auto rounded-lg relative"
                />
                <span className="absolute bottom-3 md:bottom-5 left-4 px-4 lg:px-10 py-2 lg:py-4 text-black bg-white rounded-md font-bold text-xs md:text-sm lg:text-base">
                  {product.name}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
