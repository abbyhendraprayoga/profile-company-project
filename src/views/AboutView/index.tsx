import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import JumbotronAbout from "@/components/layout/About/jumbotron";
import StoryAbout from "@/components/layout/About/story";
import VisionAbout from "@/components/layout/About/vision";
import TeamAbout from "@/components/layout/About/team";
import ExperienceAbout from "@/components/layout/About/experience";
import OfficeAbout from "@/components/layout/About/office";
import Schedule from "@/components/layout/Home/schedule";
import Footer from "@/components/layout/Footer";

const AboutView = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (dalam ms)
      once: true, // Animasi hanya terjadi sekali saat scroll
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <JumbotronAbout />
      </div>
      <div data-aos="fade-right">
        <StoryAbout />
      </div>
      <div data-aos="fade-left">
        <VisionAbout />
      </div>
      <div data-aos="fade-up">
        <TeamAbout />
      </div>
      <div data-aos="fade-right">
        <ExperienceAbout />
      </div>
      <div data-aos="fade-left">
        <OfficeAbout />
      </div>
      <div data-aos="fade-up">
        <Schedule />
      </div>
      <Footer />
    </>
  );
};

export default AboutView;
