import Image from "next/image";
import conferenceImage from "@/images/images25.jpg";

const Jumbotron = () => {
  return (
    <section className="relative bg-center bg-cover min-h-screen bg-gray-600 bg-blend-multiply">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={conferenceImage}
          alt="Conference"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* Overlay to Darken Background */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-[30vh] lg:py-56">
        <h1
          className="mb-4 text-4xl font-light tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          style={{
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.6)",
          }}
        >
          RETAILS SYSTEM & <br /> ONLINE DISTRIBUTED
        </h1>
        <p
          className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          style={{
            textShadow: "1px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Centralized & Distributed in Harmony
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-amber-500 hover:bg-amber-600"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
