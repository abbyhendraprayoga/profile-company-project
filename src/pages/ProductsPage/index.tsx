import { Products, LinkComponents, Navbar, Footer } from "@/components";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-products">
        <div className="flex flex-col justify-center items-center pt-56">
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
      <div className="flex flex-col justify-center items-center pt-32 pb-32 px-1 gap-4">
        <div>
          <h1 className="text-4xl text-center">
            “Dynamic Discussions, Visionary Decisions”
          </h1>
        </div>
        <p className="text-center text-xl">
          Choose a committed team or allow us to craft your vision into reality.
        </p>
        <button className="bg-primary text-white p-1 px-4 text-xl">
          Schedule Here
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
