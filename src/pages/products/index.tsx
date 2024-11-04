import { Products, LinkComponents } from "@/components";
import Footer from "@/components/layout/Footer";
import Schedule from "@/components/layout/Home/schedule";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <div className="bg-products">
        <div className="flex justify-center items-center pt-56">
          <h1 className="text-5xl text-white font-bold">PRODUCTS</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="font-bold text-5xl text-center px-4">
          Empowering your success with every product
        </h1>
        <p className="pt-5 text-xl text-center px-4">
          Discover our range of inovative products degsigned to meet your needs.
        </p>
      </div>
      <LinkComponents />
      <Products />
      <Schedule />
      <Footer />
    </div>
  );
};

export default ProductsPage;
