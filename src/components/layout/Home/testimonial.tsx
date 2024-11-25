import Image from "next/image";
import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select"; // Import SingleValue type
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Define the type for the options
interface OptionType {
  value: string;
  label: string;
}

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

  const options: OptionType[] = [
    { value: "Client", label: "Client" },
    { value: "Mitra", label: "Mitra" },
  ];

  const [name, setName] = useState("");
  const [role, setRole] = useState<OptionType | null>(null); // Use OptionType instead of string
  const [message, setMessage] = useState("");

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

  // Constructing the mailto link with URL encoding for special characters
  const mailtoLink = `mailto:your-email@example.com?subject=New Testimonial&body=Name: ${encodeURIComponent(
    name
  )}%0D%0ARole: ${encodeURIComponent(
    role?.label || ""
  )}%0D%0AMessage: ${encodeURIComponent(message)}`;

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
          <div className="flex flex-col bg-white max-w-lg lg:max-w-md shadow-lg rounded-lg w-96 p-7 z-30">
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
              <input
                type="text"
                className="p-2 rounded-lg w-full border border-gray-300"
                placeholder="Input name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Select
                options={options}
                value={role}
                onChange={(selectedOption: SingleValue<OptionType>) =>
                  setRole(selectedOption)
                }
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    maxHeight: 150,
                    overflowY: "auto",
                  }),
                }}
              />
              <textarea
                className="p-3 h- rounded-lg w-full border border-gray-300 resize-none overflow-y-auto"
                placeholder="Input your experience"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex flex-row justify-end items-center w-full mt-5">
              <a href={mailtoLink}>
                <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg">
                  Submit
                </button>
              </a>
            </div>
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
