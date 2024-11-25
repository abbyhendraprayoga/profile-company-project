import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection

  // Detect scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); // If scrolled more than 10px, set to true
      } else {
        setIsScrolled(false); // If at the top, set to false
      }
    };

    window.addEventListener("scroll", handleScroll); // Listen to scroll event

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full border-gray-200 dark:bg-gray-900 z-10 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-sm bg-opacity-50 bg-gray-900"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto h-20 px-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-white self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              DIMATA
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col bg-gray-800 w-full h-screen fixed top-0 left-0 z-20 p-4 md:hidden backdrop-blur-sm backdrop-opacity-50`}
            id="navbar-default"
          >
            <div className="flex justify-between items-center mb-5">
              <Image
                src="/Image/icons/dimata.svg"
                alt="dimata"
                className="flex items-center justify-center"
                width={100}
                height={100}
              />
              <button
                onClick={() => setIsOpen(false)} // Close sidebar button
                className="self-end text-white text-2xl mb-4"
              ></button>
            </div>
            <ul className="font-medium text-lg flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/about"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/services"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/products"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/projects"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 rounded-lg ${
                    router.pathname === "/contact"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/auth"
                  className="block px-5 py-2 text-white bg-amber-500 rounded-lg hover:bg-amber-600"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="hidden justify-end w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium text-xl flex flex-row space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 ${
                    router.pathname === "/"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 ${
                    router.pathname === "/about"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 px-3 ${
                    router.pathname === "/services"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`block py-2 px-3 ${
                    router.pathname === "/products"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block py-2 px-3 ${
                    router.pathname === "/projects"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 ${
                    router.pathname === "/contact"
                      ? "text-amber-500"
                      : "text-white hover:text-amber-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/auth"
                  className="block px-5 py-2 text-white bg-amber-500 rounded hover:bg-amber-600"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Link
        href="https://wa.me/623614484425?text=Hello%20Customer%20Services%2C%20I%20need%20assistance."
        target="_blank"
        className="fixed bottom-4 right-4 p-2 z-10 bg-amber-500 border border-4 border-white text-white rounded-full shadow-lg hover:bg-amber-600 focus:outline-none transition-all duration-300 ease-in-out"
      >
        <Image
          src="/Image/icons/cs.svg"
          alt="Customer Service"
          width={30}
          height={30}
        />
      </Link>
    </>
  );
}
