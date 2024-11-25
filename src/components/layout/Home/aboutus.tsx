import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Gunakan dari "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";

const aboutData = [
    {
        id: 1,
        title: "Meet Our CEO",
        description:
            "Our CEO brings years of experience and leadership to drive the company towards innovation and excellence.",
        imageSrc: "/Image/ceo.svg",
        alt: "CEO",
    },
    {
        id: 2,
        title: "Our Story",
        description:
            "Dimata IT Solutions was founded in 2002 with a vision to develop smart information systems using the latest technologies.",
        imageSrc: "/Image/aboutus.svg",
        alt: "Story",
    },
    {
        id: 3,
        title: "Innovating for the Future",
        description:
            "We create cutting-edge solutions to empower businesses to stay ahead in a rapidly evolving technological landscape.",
        imageSrc: "/Image/future.svg",
        alt: "Future",
    },
    {
        id: 4,
        title: "Years of Experience",
        description:
            "With decades of experience, we excel in delivering high-quality software solutions tailored to client needs.",
        imageSrc: "/Image/experience.svg",
        alt: "Experience",
    },
];

const AboutUs = () => {
    return (
        <div className="py-10">
            <Swiper
                modules={[Autoplay, Navigation]} // Daftarkan modul di sini
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                className="w-full"
            >
                {aboutData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 lg:p-32">
                            <div className="flex justify-center lg:justify-start">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.alt}
                                    width={500}
                                    height={500}
                                    className="w-full max-w-md"
                                />
                            </div>
                            <div className="flex flex-col justify-center w-full lg:w-2/5 gap-3">
                                <div>
                                    <hr className="w-9 bg-indigo-900 h-0.5" />
                                    <span className="text-indigo-900 font-medium">ABOUT US</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:w-96">
                                    {item.title}
                                </h1>
                                <p className="w-full text-sm sm:text-lg text-indigo-900">
                                    {item.description}
                                </p>
                                <div className="flex flex-row space-y-4 mt-3">
                                    <Link
                                        href="/about"
                                        className="inline-flex py-3 px-10 text-base font-medium text-center text-white bg-indigo-800 hover:bg-indigo-900"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AboutUs;
