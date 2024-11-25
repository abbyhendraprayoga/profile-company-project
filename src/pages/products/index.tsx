import { Footer, Products, Detail, LinkComponents } from "@/components";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsPage = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const openDetHandler = (product: any) => {
    setSelectedProduct(product);
  };

  const closeDetHandler = () => {
    setSelectedProduct(null);
  };

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="pt-20">
      {selectedProduct ? (
        <Detail product={selectedProduct} closeDet={closeDetHandler} />
      ) : (
        <>
          <div className="bg-[url('https://img.freepik.com/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg?t=st=1732503330~exp=1732506930~hmac=f69ce59a155c9ea7d9703c890229ada30231d9320900b857a4e9d1f5e5520c48&w=1380')] bg-center bg-cover bg-no-repeat relative h-[500px] bg-neutral-500 bg-blend-multiply -z-10">
            <div className="flex flex-col justify-center items-center pt-48">
              <h1 className="text-5xl text-white font-bold">PRODUCTS</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-20">
            <h1 className="font-bold text-5xl text-center px-4">
              Empowering your success with every product
            </h1>
            <p className="pt-5 text-xl text-center px-4">
              Discover our range of innovative products designed to meet your
              needs.
            </p>
          </div>
          <LinkComponents
            onSelectCategory={handleSelectCategory}
            activeCategory={activeCategory}
          />
          <Products category={selectedCategory} openDet={openDetHandler} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
