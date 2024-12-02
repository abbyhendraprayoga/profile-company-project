import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection
  const { data: session } = useSession();

  // Detect scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll); // Listen to scroll event
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full border-gray-200 dark:bg-gray-900 z-10 transition-all duration-300 ${isScrolled
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
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
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

          {/** Mobile Sidebar */}
          <div
            className={`${isOpen ? "flex" : "hidden"
              } flex-col bg-gray-800 w-full h-screen fixed top-0 left-0 z-20 p-4 md:hidden backdrop-blur-sm backdrop-opacity-50`}
          >
            <div className="flex justify-between items-center mb-5">
              <Image
                src="/Image/icons/dimata.svg"
                alt="dimata"
                width={100}
                height={100}
              />
              <button
                onClick={() => setIsOpen(false)} // Close sidebar button
                className="text-white text-2xl"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="font-medium text-lg flex flex-col space-y-4">
              {["Home", "About", "Services", "Products", "Projects", "Contact"].map(
                (item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`; // Handle 'Home' as root path

                  return (
                    <li key={item}>
                      <Link
                        href={path}
                        className={`block py-2 px-3 rounded-lg ${router.pathname === path
                            ? "text-amber-500"
                            : "text-white hover:text-amber-500"
                          }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
              {!session ? (
                <li>
                  <Link
                    href="/auth/signin"
                    className="block px-5 py-2 text-white bg-amber-500 rounded hover:bg-amber-600"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => signOut()}
                    className="block px-5 py-2 w-full text-start text-white bg-amber-500 rounded hover:bg-amber-600"
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/** Desktop Navbar */}
          <div className="hidden justify-end w-full md:flex md:w-auto">
            <ul className="font-medium text-xl flex flex-row space-x-8 rtl:space-x-reverse">
              {["Home", "About", "Services", "Products", "Projects", "Contact"].map(
                (item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`; // Handle 'Home' as root path
                  return (
                    <li key={item}>
                      <Link
                        href={path}
                        className={`block py-2 px-3 ${router.pathname === path
                            ? "text-amber-500"
                            : "text-white hover:text-amber-600"
                          }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
              {!session ? (
                <li>
                  <Link
                    href="/auth/signin"
                    className="block px-5 py-2 text-white bg-amber-500 rounded hover:bg-amber-600"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 text-white"
                  >
                    <Image
                      src={session.user?.image || "/Image/user.svg"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Link
        href="https://wa.me/623614484425?text=Hello%20Customer%20Services%2C%20I%20need%20assistance."
        target="_blank"
        className="fixed bottom-4 right-4 p-2 z-10 bg-amber-500 border-4 border-white text-white rounded-full shadow-lg hover:bg-amber-600 focus:outline-none transition-all duration-300 ease-in-out"
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
