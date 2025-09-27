import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin } from "lucide-react";

interface HeroSectionProps {
  onDownloadResume?: () => void;
}

export default function HeroSection({ onDownloadResume }: HeroSectionProps) {
  const handleDownload = () => {
    console.log("Download resume triggered from hero");
    onDownloadResume?.();
  };

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4" data-testid="text-name">
            Keren Zhang
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-2">
            <span data-testid="text-title">Georgia Gwinnett College</span>
            <span className="text-border">•</span>
            <span>Sophomore | Data Science</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span data-testid="text-location">Lawrenceville, GA</span>
          </div>
        </div>

        {/* Self Introduction */}
        <p className="text-xl text-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-intro">
          Curious, systems-minded sophomore blending qualitative & quantitative research with hands-on prototyping.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              data-testid="button-email-contact"
            >
              <a href="mailto:kzhang1@ggc.edu" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                kzhang1@ggc.edu
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              asChild
              data-testid="button-github-contact"
            >
              <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="mb-12">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3"
            data-testid="button-download-resume-hero"
          >
            Download Resume
          </Button>
        </div>

        {/* Skills Preview */}
        <div className="text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6" data-testid="text-skills-title">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-foreground mb-3">Research & Analysis</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="skill-nvivo">NVivo</Badge>
                <Badge variant="secondary" data-testid="skill-qualitative">Qualitative Coding</Badge>
                <Badge variant="secondary" data-testid="skill-interviews">Interview Design</Badge>
                <Badge variant="secondary" data-testid="skill-surveys">Survey Design</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Data & Programming</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="skill-python">Python</Badge>
                <Badge variant="secondary" data-testid="skill-r">R</Badge>
                <Badge variant="secondary" data-testid="skill-java">Java</Badge>
                <Badge variant="secondary" data-testid="skill-statistics">Statistics</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Product & Design</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="skill-prd">PRD Writing</Badge>
                <Badge variant="secondary" data-testid="skill-mvp">MVP Scoping</Badge>
                <Badge variant="secondary" data-testid="skill-wireframes">Wireframes</Badge>
                <Badge variant="secondary" data-testid="skill-usability">Usability Studies</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Tools & Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="skill-office">Microsoft Office</Badge>
                <Badge variant="secondary" data-testid="skill-canva">Canva</Badge>
                <Badge variant="secondary" data-testid="skill-vscode">VS Code</Badge>
                <Badge variant="secondary" data-testid="skill-chinese">Chinese (Native)</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}