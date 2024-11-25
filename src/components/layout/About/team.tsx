import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const TeamAbout = () => {
  const members = [
    { name: "Jane Smith", role: "Manager", image: "/img/about/ahmad.png" },
    { name: "James Brown", role: "CEO", image: "/img/about/ahmad.png" },
    { name: "Sarah Wilson", role: "COO", image: "/img/about/ahmad.png" },
    { name: "Chris Evans", role: "CTO", image: "/img/about/ahmad.png" },
    { name: "Anna Taylor", role: "CFO", image: "/img/about/ahmad.png" },
    { name: "Laura White", role: "CMO", image: "/img/about/ahmad.png" },
    {
      name: "Michael Scott",
      role: "Sales Lead",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Dwight Schrute",
      role: "Assistant Manager",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Abdul",
      role: "Star Boy",
      image: "/img/about/ahmad.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State untuk deteksi layar kecil
  const [maxItems, setMaxItems] = useState(8); // Default untuk layar besar

  // Menyesuaikan maxItems untuk layar besar/kecil
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 860) {
        setIsSmallScreen(true);
        setMaxItems(4); // 4 items untuk layar kecil
      } else {
        setIsSmallScreen(false);
        setMaxItems(8); // 8 items untuk layar besar
      }
    };

    // Set nilai awal
    handleResize();

    // Dengarkan perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + maxItems) % members.length);
  }, [maxItems, members.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - maxItems + members.length) % members.length
    );
  }, [maxItems, members.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="p-10 lg:p-20">
      <div className="flex flex-col  justify-center items-center ">
        <div className="flex flex-col items-left ">
          <div className="lg:mr-40 ">
            <hr className="w-9 bg-indigo-900 font-weight h-0.5" />
            <h1 className="text-indigo-900 font-medium">OUR TEAM</h1>
            <p className="text-black font-bold text-3xl mt-3 text-gray-700">
              The Minds Behind Dimata
            </p>
            <p className="text-m mt-5 text-gray-700">
              Dimata’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful
              <br /> solutions to our clients.
            </p>
          </div>
        </div>
        <div className="relative mt-10">
          {/* Grid Responsif */}
          <div
            className={`grid ${
              isSmallScreen ? "grid-cols-2" : "grid-cols-4"
            } gap-6`}
          >
            {members
              .slice(currentIndex, currentIndex + maxItems)
              .concat(
                members.slice(
                  0,
                  Math.max(0, currentIndex + maxItems - members.length)
                )
              ) // Untuk mendukung looping array
              .map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-40 h-auto lg:w-72 lg:h-auto justify-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className=""
                  />
                  <h2 className="mt-3 text-black font-bold">{member.name}</h2>
                  <p className="text-sm">{member.role}</p>
                </div>
              ))}
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform lg:-translate-y-1/2 -translate-x-20 -translate-y-20 lg:-translate-x-20 text-white p-3 rounded-full hover:text-opacity-100 text-opacity-70 transition duration-300 ease-in-ou "
          >
            <Image
              src="/img/about/lebih.png"
              alt="Previous"
              width={80}
              height={90}
              className="fill-current text-blue-500"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform lg:-translate-y-1/2 translate-x-20 -translate-y-20 lg:translate-x-20 text-white p-3 rounded-full hover:text-opacity-100 text-opacity-70 transition duration-300 ease-in-out"
          >
            <Image
              src="/img/about/kurang.png"
              alt="Next"
              width={80}
              height={90}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;
