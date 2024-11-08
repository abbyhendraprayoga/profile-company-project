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
import Footer from "@/components/layout/Footer"; // import the wrapper
import FadeInOnScroll from "@/components/layout/FadeInOnScroll";

const HomeView = () => {
    return (
        <>
            <FadeInOnScroll><Jumbotron /></FadeInOnScroll>
            <FadeInOnScroll><TrustedBy /></FadeInOnScroll>
            <FadeInOnScroll><AboutUs /></FadeInOnScroll>
            <FadeInOnScroll><OurService /></FadeInOnScroll>
            <FadeInOnScroll><OurProducts /></FadeInOnScroll>
            <FadeInOnScroll><WorkWithUs /></FadeInOnScroll>
            <FadeInOnScroll><OurProjects /></FadeInOnScroll>
            <FadeInOnScroll><Faq /></FadeInOnScroll>
            <FadeInOnScroll><Testimonial /></FadeInOnScroll>
            <FadeInOnScroll><Schedule /></FadeInOnScroll>
            <Footer /> 
        </>
    );
};

export default HomeView;
