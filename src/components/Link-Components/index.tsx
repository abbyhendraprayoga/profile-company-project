import React from "react";
import { useState } from "react";
import Link from "next/link";

const LinkComponents = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <div className="pl-4 pt-20 md:pl-10 md:pt-28">
        <ul className="flex flex-wrap justify-center items-center">
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 0
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(0)} // Indeks0 untuk "All"
            >
              All{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 1
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(1)} // Indeks0 untuk "All"
            >
              web{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 2
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(2)} // Indeks0 untuk "All"
            >
              Mobile{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 3
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(3)} // Indeks0 untuk "All"
            >
              Dekstop{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 4
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(4)} // Indeks0 untuk "All"
            >
              Iot{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`hero-link ${
                activeIndex === 5
                  ? "after:scale-x-100"
                  : "hover:after:scale-x-100"
              } mr-4 md:mr-8`}
              onClick={() => handleLinkClick(5)} // Indeks0 untuk "All"
            >
              Ai{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinkComponents;
