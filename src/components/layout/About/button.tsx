const ButtonAbout = () => {
  return (
    <div className="lg:flex lg:justify-center lg:p-20 lg:flex-col lg:items-center p-10 text-center ">
      <h1 className="lg:text-4xl font-bold text-3xl">
        “Dynamic Discussions, Visionary Decisions”
      </h1>
      <p className="text-sm mt-5 lg:text-center  ">
        Choose a committed team or allow us to craft your vision into reality.
      </p>
      <a
        href="#"
        className=" mt-5 inline-flex justify-center items-center py-3 px-5 w-40 text-base font-medium text-center text-white bg-indigo-800 hover:bg-indigo-900"
      >
        Schedule Here
      </a>
    </div>
  );
};

export default ButtonAbout;
