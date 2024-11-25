import Image from "next/image";

const services = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/1.svg",
        imageAlt: "Web Development",
    },
    {
        id: 2,
        title: "Mobile Development",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/2.svg",
        imageAlt: "Mobile Development",
    },
    {
        id: 3,
        title: "Internet of Things",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/3.svg",
        imageAlt: "Internet of Things",
    },
];

const OurService = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 lg:p-32">
            {/* Header Section */}
            <div className="flex flex-col justify-center w-full lg:w-2/5 gap-3">
                <div>
                    <hr className="w-9 bg-indigo-900 h-0.5" />
                    <span className="text-indigo-900 font-medium">OUR SERVICES</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-gray-800">
                    Innovative solutions for every step forward.
                </h1>
                <p className="text-sm sm:text-lg text-indigo-900 sm:w-full lg:w-96">
                    We provide software solutions for businesses, government, and public services.
                    Our expertise includes integration of digital devices and 4.0 technologies.
                </p>
            </div>

            {/* Services Section */}
            <div className="flex flex-col justify-center w-full lg:w-3/5">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col items-center gap-6 mt-5 lg:gap-10 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden group w-full lg:w-[209px]">
                            <Image
                                src={service.imageSrc}
                                alt={service.imageAlt}
                                width={209}
                                height={200}
                                className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-3 text-center lg:text-left">
                            <h1 className="font-bold text-lg sm:text-xl">{service.title}</h1>
                            <p className="w-full sm:w-72 text-sm text-indigo-900">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurService;
