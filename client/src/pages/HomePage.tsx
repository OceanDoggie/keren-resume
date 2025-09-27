import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const handleDownloadResume = () => {
    // TODO: Implement actual resume download functionality
    console.log("Downloading resume...");
    
    // For now, we'll create a simple alert
    alert("Resume download would be implemented here. In a real application, this would download the PDF file from the server.");
    
    // In the future, this could be:
    // const link = document.createElement('a');
    // link.href = '/api/resume/download';
    // link.download = 'Keren_Zhang_Resume.pdf';
    // link.click();
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