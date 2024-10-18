import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="bg-hero">
        <nav className="pt-10 px-10 flex md:px-6 pr-10 pb-5 mb-12  justify-between">
          <h1 className="text-2xl text-white pl-4 md:pl-12">Dimata</h1>
          <ul className="items-center gap-10 hidden lg:flex">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Hero" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                Service
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link ">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="relative hidden lg:inline-flex items-center justify-center px-10 py-3
                 overflow-hidden font-medium tracking-tighter text-white bg-secondary rounded-lg group"
              >
                <span
                  className="absolute w-0 h-0 transition-all duration-500 ease-out
                 bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"
                ></span>
                <span
                  className="absolute inset-0 w-full h-full rounded-lg
                 opacity-30 bg-gradient-to-t from-transparent via-transparent to-secondary"
                ></span>
                <span className="relative">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-5xl text-white font-bold">PRODUCTS</h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
