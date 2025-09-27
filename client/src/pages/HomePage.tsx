import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const handleDownloadResume = () => {
    console.log("Downloading resume...");
    
    // Create download link and trigger download
    const downloadUrl = '/api/download/resume?format=pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Keren_Zhang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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