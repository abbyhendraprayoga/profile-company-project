"use client";
import React from "react";

const LinkComponents = ({ onSelectCategory, activeCategory }: any) => {
  const heroLinks = [
    { name: "All", id: "1" },
    { name: "Web", id: "2" },
    { name: "Mobile", id: "3" },
    { name: "Desktop", id: "4" },
  ];

  return (
    <div>
      <div className="pl-4 pt-20 md:pl-10 md:pt-28">
        <div className="flex flex-wrap justify-center items-center">
          {heroLinks.map((link) => {
            const isActive = activeCategory === link.name.toLowerCase();
            return (
              <button
                key={link.id}
                onClick={() => onSelectCategory(link.name.toLowerCase())}
                className={`hero-link ${
                  isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                } mr-4 md:mr-8`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LinkComponents;
