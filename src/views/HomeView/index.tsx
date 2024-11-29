import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "@/components/layout/Home/aboutus";
import Jumbotron from "@/components/layout/Home/jumbotron";
import TrustedBy from "@/components/layout/Home/trustedby";
import OurService from "@/components/layout/Home/ourservice";
import OurProducts from "@/components/layout/Home/ourproduct";
import WorkWithUs from "@/components/layout/Home/workwithus";
import OurProjects from "@/components/layout/Home/ourprojects";
import Faq from "@/components/layout/Home/faq";
import Testimonial from "@/components/layout/Home/testimonial";
import Schedule from "@/components/layout/Home/schedule";
import Footer from "@/components/layout/Footer";

const HomeView = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi (dalam ms)
            once: false, // Animasi hanya terjadi sekali saat scroll
        });

        // Simulasi delay untuk loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <>
                {/* Skeleton loading */}
                <JumbotronSkeleton />
                <SkeletonComponent title="About Us" />
                <SkeletonComponent title="Our Services" />
                <SkeletonComponent title="Our Products" />
                <SkeletonComponent title="Work With Us" />
                <SkeletonComponent title="Trusted By" />
                <SkeletonComponent title="Our Projects" />
                <SkeletonComponent title="FAQ" />
                <SkeletonComponent title="Testimonial" />
                <SkeletonComponent title="Schedule" />
                <Footer />
            </>
        );
    }

    return (
        <>
            <Jumbotron />
            <div data-aos="fade-up">
                <AboutUs />
            </div>
            <div data-aos="fade-right">
                <OurService />
            </div>
            <div data-aos="zoom-in">
                <OurProducts />
            </div>
            <div data-aos="fade-up">
                <WorkWithUs />
            </div>
            <div data-aos="fade-up">
                <TrustedBy />
            </div>
            <div data-aos="fade-up">
                <OurProjects />
            </div>
            <div data-aos="fade-up">
                <Faq />
            </div>
            <div data-aos="fade-up">
                <Testimonial />
            </div>
            <div data-aos="fade-up">
                <Schedule />
            </div>
            <Footer />
        </>
    );
};

const JumbotronSkeleton = () => (
    <section className="bg-center bg-cover min-h-screen bg-gray-200 bg-blend-multiply animate-pulse">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-[30vh] lg:py-56">
            <div className="h-10 bg-gray-300 rounded mb-4 w-1/2 mx-auto"></div>
            <div className="h-5 bg-gray-300 rounded mb-8 w-3/4 mx-auto"></div>
            <div className="h-10 bg-gray-300 rounded w-40 mx-auto"></div>
        </div>
    </section>
);

const SkeletonComponent = ({ title }: { title: string }) => (
    <div className="py-10">
        <h2 className="text-xl font-bold text-gray-300 animate-pulse">{title}</h2>
        <div className="mt-4 h-10 bg-gray-300 rounded mb-4"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
    </div>
);

export default HomeView;
