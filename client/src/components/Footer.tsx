import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-primary-foreground py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4" data-testid="text-footer-title">
            Let's Connect
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            I'm always interested in discussing research opportunities, collaboration ideas, or innovative projects that combine data science with human-centered design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button 
            variant="outline" 
            size="sm"
            asChild
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            data-testid="button-footer-email"
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
            className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            data-testid="button-footer-github"
          >
            <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
          </Button>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-footer-location">Lawrenceville, GA</span>
            </div>
            <div className="text-sm text-primary-foreground/60" data-testid="text-footer-copyright">
              © 2025 Keren Zhang. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}