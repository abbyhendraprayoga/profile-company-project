import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ExperienceAbout = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="bg-slate-300 h-94 w-full lg:p-20 p-10" data-aos="fade-down">
      <div className="lg:flex justify-center items-center">
        <div>
          <hr className="w-9 bg-indigo-900 h-0.5" />
          <h1 className="text-indigo-900">OUR EXPERIENCE</h1>
          <h1 className="text-black w-4/5 font-bold text-3xl mt-4 text-gray-800 lg:w-4/5">
            Building Success Through Experience
          </h1>
        </div>
        <div
          ref={experienceRef}
          className="flex lg:flex-row lg:justify-between lg:items-center space-x-2 lg:space-y-0 mt-10 lg:mt-0"
        >
          <div className="border-2 items-center text-center w-42 h-32 border-gray-800  lg:h-32">
            {experienceInView && (
              <p className="text-5xl font-black text-gray-800 mt-5 lg:mt-5">
                <CountUp start={0} end={20} duration={3} />
              </p>
            )}
            <p className="text-gray-800 ml-1 mr-1 text-sm mt-2 font-bold">
              Years of Experience
            </p>
          </div>
          <p className="border-l-2 border-gray-800 h-16 ml-0 mr-0 mt-8 lg:mt-0"></p>
          <div className="border-2 items-center text-center w-42 h-32 border-gray-800  lg:h-32">
            {experienceInView && (
              <p className="text-5xl font-black text-gray-800 mt-5 lg:mt-5">
                <CountUp start={0} end={10} duration={3} />
              </p>
            )}
            <p className="text-gray-800 mr-1 ml-1 text-sm mt-2 font-bold">
              Projects Completed
            </p>
          </div>
          <p className="border-l-2 border-gray-800 h-16 ml-0 mr-0 mt-8 lg:mt-0"></p>
          <div className="border-2 p-2 items-center text-center w-42 h-32 border-gray-800 lg:h-32">
            {experienceInView && (
              <p className="text-5xl font-black text-gray-800 mt-3 lg:mt-3">
                <CountUp start={0} end={15} duration={3} />
              </p>
            )}
            <p className="mr-3 ml-3 text-gray-800 text-sm mt-2 font-bold">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAbout;
