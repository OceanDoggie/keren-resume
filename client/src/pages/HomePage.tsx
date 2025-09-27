import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { downloadResume } from "@/utils/downloadResume";

export default function HomePage() {
  const handleDownloadResume = () => {
    downloadResume('pdf');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main>
        <HeroSection onDownloadResume={handleDownloadResume} />
        <EducationSection />
        <ResearchSection />
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
}