import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Github, Mail, ChevronDown } from "lucide-react";

interface NavigationProps {
  onDownloadResume?: () => void;
}

export default function Navigation({ onDownloadResume }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const handleDownload = () => {
    console.log("Download resume triggered");
    onDownloadResume?.();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name/Logo */}
          <Link href="/" data-testid="link-home">
            <div className="text-xl font-semibold text-brand-primary hover:text-brand-accent transition-colors">
              Keren Zhang
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* About Link */}
            <Link href="/about" data-testid="link-about">
              <Button variant="ghost" className={location === '/about' ? 'bg-muted' : ''}>
                About
              </Button>
            </Link>

            {/* Education Dropdown */}
            <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? 'education' : null)}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1"
                  data-testid="button-education-dropdown"
                >
                  Education
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64">
                <DropdownMenuItem asChild data-testid="dropdown-item-ggc">
                  <Link href="/education">
                    <div className="flex flex-col">
                      <div className="font-medium">Georgia Gwinnett College</div>
                      <div className="text-sm text-muted-foreground">B.S. Data Science (Sophomore)</div>
                      <div className="text-xs text-muted-foreground">Spring 2024 – Present</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild data-testid="dropdown-item-hubei">
                  <Link href="/education">
                    <div className="flex flex-col">
                      <div className="font-medium">Hubei University</div>
                      <div className="text-sm text-muted-foreground">B.S. Psychology Coursework</div>
                      <div className="text-xs text-muted-foreground">Sep 2023 – Nov 2023</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Research Dropdown */}
            <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? 'research' : null)}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1"
                  data-testid="button-research-dropdown"
                >
                  Research
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-80">
                <DropdownMenuItem asChild data-testid="dropdown-item-qualitative-research">
                  <Link href="/research">
                    <div className="flex flex-col">
                      <div className="font-medium">Workplace Bullying - Qualitative Research</div>
                      <div className="text-sm text-muted-foreground">Health Science Department, GGC</div>
                      <div className="text-xs text-muted-foreground">Nov 2024 – Apr 2025</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild data-testid="dropdown-item-quantitative-research">
                  <Link href="/research">
                    <div className="flex flex-col">
                      <div className="font-medium">Workplace Bullying - Quantitative Study</div>
                      <div className="text-sm text-muted-foreground">Health Science Department, GGC</div>
                      <div className="text-xs text-muted-foreground">Aug 2025 – Present</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Projects Dropdown */}
            <DropdownMenu onOpenChange={(open) => setActiveDropdown(open ? 'projects' : null)}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1"
                  data-testid="button-projects-dropdown"
                >
                  Projects
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-80">
                <DropdownMenuItem asChild data-testid="dropdown-item-ai-pose-coach">
                  <Link href="/projects">
                    <div className="flex flex-col">
                      <div className="font-medium">AI Pose Coach</div>
                      <div className="text-sm text-muted-foreground">Product Concept & MVP Exploration</div>
                      <div className="text-xs text-muted-foreground">Aug 2025 – Present</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild data-testid="dropdown-item-gesture-control">
                  <Link href="/projects">
                    <div className="flex flex-col">
                      <div className="font-medium">Gesture Control</div>
                      <div className="text-sm text-muted-foreground">ASL Hand-Recognition Learning Tool</div>
                      <div className="text-xs text-muted-foreground">Aug 2025 – Present</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact & Resume Links */}
            <Link href="/contact" data-testid="link-contact">
              <Button variant="ghost" className={location === '/contact' ? 'bg-muted' : ''}>
                Contact
              </Button>
            </Link>

            <Link href="/resume" data-testid="link-resume">
              <Button variant="ghost" className={location === '/resume' ? 'bg-muted' : ''}>
                Resume
              </Button>
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                data-testid="button-email"
              >
                <a href="mailto:kzhang1@ggc.edu">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                data-testid="button-github"
              >
                <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Download Resume Button */}
            <Button 
              onClick={handleDownload}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white"
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Button - placeholder for future */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <div className="h-4 w-4">☰</div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}