import Image from "next/image";

const works = [
    {
        id: 1,
        title: "Expertise and Innovation",
        description: "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
        imageSrc: "/Image/work/1.svg",
        imageAlt: "Product 1",
    },
    {
        id: 2,
        title: "Client-Centric Approach",
        description: "We prioritize your goals by working closely with you throughout the development process, ensuring that our solutions align perfectly with your vision.",
        imageSrc: "/Image/work/2.svg",
        imageAlt: "Product 1",
    },
    {
        id: 3,
        title: "Proven Track Record",
        description: "We have a strong track record of delivering high-quality results that drive growth across various industries.",
        imageSrc: "/Image/work/3.svg",
        imageAlt: "Product 1",
    },
];

const WorkWithUs = () => {
    return (
        <div className="flex flex-col lg:p-32 bg-indigo-100">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6">
                <div className="flex flex-col gap-3">
                    <div>
                        <hr className="w-9 bg-indigo-900 h-0.5" />
                        <span className="text-indigo-900 font-medium">Work With Us</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 w-full lg:w-[20rem]">
                        Why Choose Us?
                    </h1>
                </div>
                <div className="flex justify-end">
                    <p className="text-sm sm:text-xl w-full lg:w-9/12 text-right">
                        Experience our unmatched expertise and dedication to exceptional results.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {works.map((work) => (
                    <div
                        key={work.id}
                        className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src={work.imageSrc}
                            alt={work.imageAlt}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain mb-5"
                        />
                        <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                            {work.title}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">{work.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkWithUs;
