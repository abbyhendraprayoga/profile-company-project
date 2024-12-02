import Image from "next/image";
import { useState, useEffect } from "react";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Define the type for the options

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Saraswati",
      role: "Client",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      imageUrl: "/Image/user.svg",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Customer",
      message: "This is a sample testimonial from a satisfied customer.",
      imageUrl: "/Image/user.svg",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Client",
      message: "Great service and support. Highly recommend!",
      imageUrl: "/Image/user.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 1) {
      setAnimationDirection("right");
      setIsAnimating(true);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 500); // Extend transition time
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationDirection("left");
      setIsAnimating(true);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 500); // Extend transition time
    }
  };

  useEffect(() => {
    setIsAnimating(false);
  }, [currentIndex]);

  const toggleTestimonial = () => {
    setShowTestimonial(!showTestimonial);
  };

  const closeTestimonial = () => {
    setShowTestimonial(false);
  };

  const dontShowTestimonial = () => {
    if (window.scrollY > 2) {
      setShowTestimonial(false);
    } else {
      setShowTestimonial(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", dontShowTestimonial);
    return () => {
      window.removeEventListener("scroll", dontShowTestimonial);
    };
  }, []);

  return (
    <div className="relative flex pt-16 md:pt-32 font-sans">
      <div
        className={`flex flex-col lg:flex-row lg:p-32 p-5 justify-between items-center w-full h-[50vh] lg:h-[90vh] bg-[url('/Image/testimonial/1.svg')] bg-cover bg-center transition-all duration-300 ${
          showTestimonial ? "z-20" : "z-0"
        }`}
      >
        <div className="flex flex-col items-center lg:items-start justify-start text-white gap-3">
          <h1 className="text-xl md:text-2xl italic font-medium">
            TESTIMONIAL
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">
            What They Say About Us
          </h1>
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg mt-4"
            onClick={toggleTestimonial}
          >
            Testimonial
          </button>
        </div>
        {showTestimonial && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 backdrop-blur-md"></div>
        )}

        {showTestimonial && (
          <div
            data-aos="fade-up"
            className="flex flex-col bg-white max-w-lg lg:max-w-md shadow-lg rounded-lg w-96 p-7 z-30"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="text-lg font-bold">Share Your Experience</h1>
              <button
                className="hover:scale-110 text-2xl"
                onClick={closeTestimonial}
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col w-full mt-5 gap-4">
              <form
                className="flex flex-col gap-4"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="81e183a4-2b1e-423e-b64d-308188614f9e"
                ></input>
                <input
                  type="text"
                  placeholder="Input your name"
                  className="p-3 rounded-lg w-full border border-gray-300"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Input your email"
                  className="p-3 rounded-lg w-full border border-gray-300"
                  name="email"
                  required
                />
                <textarea
                  className="p-3 h- rounded-lg w-full border border-gray-300 resize-none overflow-y-auto"
                  placeholder="Input your experience"
                  typeof="text"
                  name="message"
                  required
                />
                <button
                  type="submit"
                  name="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="flex flex-row justify-end items-center w-full mt-5"></div>
          </div>
        )}

        <div className="lg:flex lg:flex-col">
          <div className="flex flex-col p-5 gap-5 bg-white w-full max-w-lg lg:max-w-md shadow-lg rounded-lg overflow-hidden">
            <div
              className={`flex flex-col transition-transform ease-in-out duration-[500ms] transform ${
                isAnimating
                  ? animationDirection === "right"
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="flex flex-row justify-end items-center gap-4">
                <div className="flex flex-col justify-center items-end">
                  <h1 className="font-bold text-lg md:text-xl">
                    {testimonialsData[currentIndex].name}
                  </h1>
                  <p className="text-sm">
                    {testimonialsData[currentIndex].role}
                  </p>
                </div>
                <Image
                  src={testimonialsData[currentIndex].imageUrl}
                  alt="pp"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col text-right mt-4">
                <p className="text-sm md:text-base">
                  {testimonialsData[currentIndex].message}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end">
              <FaArrowLeftLong
                size={24}
                className="cursor-pointer"
                onClick={handlePrevious}
              />
              <FaArrowRightLong
                size={24}
                className="cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
