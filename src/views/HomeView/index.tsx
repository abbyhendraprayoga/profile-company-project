import { useEffect } from "react";
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
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi (dalam ms)
            once: false, // Animasi hanya terjadi sekali saat scroll
        });
    }, []);

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

export default HomeView;
