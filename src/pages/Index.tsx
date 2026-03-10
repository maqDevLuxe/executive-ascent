import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedIn from "@/components/sections/FeaturedIn";
import Methodology from "@/components/sections/Methodology";
import Metrics from "@/components/sections/Metrics";
import MindsetPhilosophy from "@/components/sections/MindsetPhilosophy";
import Timeline from "@/components/sections/Timeline";
import Mastermind from "@/components/sections/Mastermind";
import BoardroomImage from "@/components/sections/BoardroomImage";
import StatCounters from "@/components/sections/StatCounters";
import Blog from "@/components/sections/Blog";
import ClientSelection from "@/components/sections/ClientSelection";
import Testimonials from "@/components/sections/Testimonials";
import CTAFooter from "@/components/sections/CTAFooter";

const Index = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Methodology />
      <Metrics />
      <MindsetPhilosophy />
      <Timeline />
      <Mastermind />
      <BoardroomImage />
      <StatCounters />
      <Blog />
      <ClientSelection />
      <Testimonials />
      <CTAFooter />
    </SmoothScroll>
  );
};

export default Index;
