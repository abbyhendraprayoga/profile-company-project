import Image from "next/image";
import conferenceImage from "@/images/image24.png";

const JumbotronServices = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-gray-700 z-1">
      {" "}
      {/* z-10 is low */}
      <Image
        src={conferenceImage}
        alt="Conference"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-1 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          SERVICES
        </h1>
      </div>
    </section>
  );
};

export default JumbotronServices;
