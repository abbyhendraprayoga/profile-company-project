import Image from "next/image";

const StoryAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 lg:p-32 h-100vh justify-center items-center">
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/Image/aboutus.svg"
          alt="story"
          width={500}
          height={500}
          className="w-full max-w-md" // ensures the image is responsive
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-2/5 gap-3 p-5 lg:p-0">
        <div>
          <hr className="w-9 bg-indigo-900 h-0.5" />
          <span className="text-indigo-900 font-medium">ABOUT US</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:w-96">
          Turning visions into reality.
        </h1>
        <p className="w-full text-sm sm:text-lg text-indigo-900">
          Dimata IT Solutions was founded in 2002 with a vision to develop smart
          information systems using the latest technologies. We have
          successfully delivered software solutions for various industries.
        </p>
      </div>
    </div>
  );
};

export default StoryAbout;
