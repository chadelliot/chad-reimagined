import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PillarsSection from "@/components/PillarsSection";
import QxoStorySection from "@/components/QxoStorySection";
import TimelineSection from "@/components/TimelineSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EducationSection from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <PillarsSection />
      <QxoStorySection />
      <TimelineSection />
      <ExpertiseSection />
      <EducationSection />
    </div>
  );
};

export default Index;
