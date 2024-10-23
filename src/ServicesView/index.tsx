import JumbotronServices from "@/components/layout/Services/jumbotron";
import ServicesGrid from "@/components/layout/Services/servicesgrid";

const ServicesView = () => {
  return (
    <>
      <JumbotronServices />
      <div className="p-4 mt-12 text-center">
        <h2 className="text-4xl font-bold">
          Innovative solutions for every step forward
        </h2>
        <p className="mt-2 text-lg font-light">
          We provide software solutions for businesses, government, and public
          services. Our expertise includes integration of
          <br />
          digital devices and 4.0 technologies.
        </p>
      </div>
      {/* Services Grid Component */}
      <ServicesGrid /> {/* Render the Services Grid here */}
      <div className="p-4 mt-12 text-center">
        <h2 className="text-4xl font-bold">
          “Dynamic Discussions, Visionary Decisions”
        </h2>
        <p className="mt-2 text-lg font-light">
          Choose a committed team or allow us to craft your vision into reality.
        </p>
      </div>
      <div className="p-4 mt-12 text-center">
        {/* Tombol dengan kotak biru */}
        <button className=" button-cta mt-4 relative inline-flex items-center  transition-transform duration-300 hover:scale-105">
          {/* Kotak biru di belakang teks */}
          <span className="absolute inset-0 bg-blue-500 rounded-md opacity-100" />
          <span className="relative text-white py-2 px-4 rounded-md z-10">
            Schedule Here
          </span>
        </button>
      </div>
    </>
  );
};

export default ServicesView;
