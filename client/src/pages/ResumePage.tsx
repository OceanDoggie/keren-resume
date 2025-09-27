import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Download, 
  FileText, 
  Eye, 
  Share2, 
  Calendar,
  MapPin,
  Mail,
  Phone,
  Github,
  GraduationCap,
  Briefcase,
  Award,
  Code
} from "lucide-react";

export default function ResumePage() {
  const [downloadFormat, setDownloadFormat] = useState<'pdf' | 'docx'>('pdf');

  const handleDownloadResume = (format: 'pdf' | 'docx' = 'pdf') => {
    console.log(`Downloading resume in ${format} format...`);
    
    // Create download link and trigger download
    const downloadUrl = `/api/download/resume?format=${format}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Keren_Zhang_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeSections = [
    {
      title: "Personal Information",
      icon: <Mail className="h-5 w-5" />,
      content: [
        "Name: Keren Zhang",
        "Email: kzhang1@ggc.edu", 
        "Phone: 404-984-5878",
        "Location: Lawrenceville, GA",
        "GitHub: github.com/OceanDoggie"
      ]
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-5 w-5" />,
      content: [
        "Georgia Gwinnett College - B.S. Data Science (Sophomore, 2024-Present)",
        "Hubei University - Psychology Coursework (2023-2024)",
        "Liuzhou High School - Physics Class Representative (2019-2023)"
      ]
    },
    {
      title: "Research Experience", 
      icon: <FileText className="h-5 w-5" />,
      content: [
        "Workplace Bullying in Higher-Education Health Sciences (Nov 2024 – Apr 2025)",
        "Workplace Bullying Study - Quantitative Continuation (Aug 2025 – Present)",
        "Published 30-page qualitative research report"
      ]
    },
    {
      title: "Projects",
      icon: <Code className="h-5 w-5" />,
      content: [
        "AI Pose Coach - Product Concept & MVP Development (Aug 2025 – Present)",
        "Gesture Control - ASL Hand-Recognition Learning Tool (Aug 2025 – Present)",
        "Technology Ambassador Program participation"
      ]
    },
    {
      title: "Leadership Experience",
      icon: <Briefcase className="h-5 w-5" />,
      content: [
        "Vice President, Students' Union (2017-2019) - Led student government initiatives",
        "Vice President, Taekwondo Club (2020-2021) - Managed club operations and mentored members",
        "Founder, Environment Protection Group - Organized sustainability initiatives",
        "Physics Class Representative (2019-2023) - Academic liaison and peer support"
      ]
    },
    {
      title: "Skills & Technologies",
      icon: <Award className="h-5 w-5" />,
      content: [
        "Programming: Python, R, Java",
        "Research: NVivo, Qualitative Coding, Survey Design",
        "Data Analysis: Statistical Methods, Machine Learning",
        "Tools: Microsoft Office, Canva, VS Code, MediaPipe"
      ]
    }
  ];

  const versions = [
    {
      name: "Latest Version",
      date: "September 2025",
      description: "Complete resume with all current projects and research experience",
      format: "PDF & DOCX",
      featured: true
    },
    {
      name: "Academic Focus",
      date: "September 2025", 
      description: "Emphasizes research experience and academic achievements",
      format: "PDF",
      featured: false
    },
    {
      name: "Technical Focus",
      date: "September 2025",
      description: "Highlights programming skills and technical projects",
      format: "PDF",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={() => handleDownloadResume('pdf')} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-resume-title">
              Resume & CV
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download my comprehensive resume highlighting education, research experience, 
              projects, and technical skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Resume Preview & Download */}
            <div className="lg:col-span-2">
              {/* Download Section */}
              <Card className="mb-8" data-testid="card-download">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary flex items-center gap-2">
                    <Download className="h-6 w-6" />
                    Download Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Format Selection */}
                    <div>
                      <h3 className="font-medium text-foreground mb-3">Select Format</h3>
                      <div className="flex gap-3">
                        <Button 
                          variant={downloadFormat === 'pdf' ? 'default' : 'outline'}
                          onClick={() => setDownloadFormat('pdf')}
                          data-testid="button-format-pdf"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          PDF
                        </Button>
                        <Button 
                          variant={downloadFormat === 'docx' ? 'default' : 'outline'}
                          onClick={() => setDownloadFormat('docx')}
                          data-testid="button-format-docx"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          DOCX
                        </Button>
                      </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={() => handleDownloadResume(downloadFormat)}
                        className="bg-brand-accent hover:bg-brand-accent/90 text-white flex-1"
                        size="lg"
                        data-testid="button-download-primary"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download {downloadFormat.toUpperCase()}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => console.log("Opening resume preview")}
                        data-testid="button-preview"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => console.log("Sharing resume")}
                        data-testid="button-share"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Last Updated:</strong> September 2025 • 
                        <strong> File Size:</strong> ~150KB • 
                        <strong> Pages:</strong> 2
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Preview */}
              <Card data-testid="card-preview">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-primary">
                    Resume Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {resumeSections.map((section, index) => (
                      <div key={index} className="border-l-4 border-brand-accent/30 pl-4">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-brand-accent">{section.icon}</span>
                          {section.title}
                        </h3>
                        <ul className="space-y-1">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Resume Versions */}
              <Card data-testid="card-versions">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-primary">
                    Available Versions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {versions.map((version, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg border ${version.featured ? 'border-brand-accent bg-brand-accent/5' : 'border-border'}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-foreground text-sm">
                            {version.name}
                          </h4>
                          {version.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {version.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {version.format} • {version.date}
                          </span>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDownloadResume('pdf')}
                            data-testid={`button-download-${index}`}
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card data-testid="card-quick-info">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-primary">
                    Quick Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-accent" />
                      <span className="text-muted-foreground">Updated: Sep 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand-accent" />
                      <span className="text-muted-foreground">Based in: GA, USA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-brand-accent" />
                      <span className="text-muted-foreground">Status: Sophomore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-brand-accent" />
                      <span className="text-muted-foreground">Seeking: Internships</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle className="text-lg text-brand-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      asChild
                      data-testid="button-contact-email"
                    >
                      <a href="mailto:kzhang1@ggc.edu">
                        <Mail className="h-4 w-4 mr-2" />
                        kzhang1@ggc.edu
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      asChild
                      data-testid="button-contact-github"
                    >
                      <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub Profile
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start"
                      disabled
                      data-testid="button-contact-phone"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      404-984-5878
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}