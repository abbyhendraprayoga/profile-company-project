"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponents = () => {
  const heroLinks = [
    { href: "#", name: "All" },
    { href: "#", name: "Web" },
    { href: "#", name: "Mobile" },
    { href: "#", name: "Dekstop" },
    { href: "#", name: "Iot" },
    { href: "#", name: "Ai" },
  ];

  const pathname = usePathname();

  return (
    <div>
      <div className="pl-4 pt-20 md:pl-10 md:pt-28">
        <div className="flex flex-wrap justify-center items-center">
          {heroLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`hero-link ${
                  isActive ? "after:scale-x-100" : "hover:after:scale-x-100"
                } mr-4 md:mr-8`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LinkComponents;
