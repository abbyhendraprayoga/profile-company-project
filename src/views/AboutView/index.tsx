import JumbotronAbout from "@/components/layout/About/jumbotron";
import StoryAbout from "@/components/layout/About/story";
import VisionAbout from "@/components/layout/About/vision";
import TeamAbout from "@/components/layout/About/team";
import ExperienceAbout from "@/components/layout/About/experience";
import OfficeAbout from "@/components/layout/About/office";
import Schedule from "@/components/layout/Home/schedule";
import Footer from "@/components/layout/Footer";
import FadeInOnScroll from "@/components/layout/FadeInOnScroll";

const AboutView = () => {
  return (
    <>
      <FadeInOnScroll><JumbotronAbout /></FadeInOnScroll>
      <FadeInOnScroll><StoryAbout /></FadeInOnScroll>
      <FadeInOnScroll><VisionAbout /></FadeInOnScroll>
      <FadeInOnScroll><TeamAbout /></FadeInOnScroll>
      <FadeInOnScroll><ExperienceAbout /></FadeInOnScroll>
      <FadeInOnScroll><OfficeAbout /></FadeInOnScroll>
      <FadeInOnScroll><Schedule /></FadeInOnScroll>
      <Footer />
    </>
  );
};
export default AboutView;
