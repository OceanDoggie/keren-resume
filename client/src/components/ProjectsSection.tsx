import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ExternalLink, Lightbulb } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: "ai-pose-coach",
      title: "AI Pose Coach",
      subtitle: "Product Concept & MVP Exploration",
      role: "Founder/Researcher",
      period: "Aug 2025 – Present",
      type: "Independent Project",
      description: "A comprehensive product development effort combining market research, system design, and prototype development for AI-powered fitness guidance.",
      achievements: [
        "Authored PRD-style concept doc defining user flows, success metrics, and MVP scope",
        "Built concept whitepaper & system spec; extracted pose guidance patterns from 50+ tutorials (Xiaohongshu/Instagram)",
        "Developing low-code MVP demo with usage analytics; public README & one-pager targeted for Sep 2025 release"
      ],
      skills: ["Product Strategy", "Market Research", "System Design", "MVP Development", "User Flow Design"],
      status: "Active Development",
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      id: "gesture-control",
      title: "Gesture Control",
      subtitle: "ASL Hand-Recognition Learning Tool",
      role: "Technology Ambassador Program: Group Project",
      period: "Aug 2025 – Present",
      type: "Collaborative Project",
      description: "Real-time ASL learning application using computer vision and machine learning for educational purposes.",
      achievements: [
        "Originated concept based on prior AI Pose Coach work; collaborated with team to design real-time ASL learning app",
        "Built dataset curation pipeline, defined prototype evaluation criteria, and led error-analysis loop for model iteration",
        "Integrated MediaPipe for hand detection; designed 3D model feedback system to teach hand shapes",
        "Preparing 3 classroom workshops (Oct 2025, 30–40 students each) to teach AI recognition concepts and demo the tool",
        "Presenting project at TAP Expo"
      ],
      skills: ["MediaPipe", "Computer Vision", "Dataset Curation", "Machine Learning", "Educational Technology", "3D Modeling"],
      status: "Pre-Launch",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging research insights with practical technology solutions
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover-elevate" data-testid={`card-project-${project.id}`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-brand-accent">
                        {project.icon}
                      </div>
                      <CardTitle className="text-xl text-brand-primary">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base font-medium text-foreground mb-2">
                      {project.subtitle}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{project.role}</span>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={project.status === "Active Development" ? "default" : "secondary"}
                      data-testid={`badge-status-${project.id}`}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Accomplishments:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {project.id === "ai-pose-coach" && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => console.log("View project details")}
                      data-testid={`button-view-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-brand-primary mb-4">
              Interested in my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss research opportunities, collaboration ideas, or potential projects that combine data science with human-centered design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline"
                onClick={() => console.log("Contact clicked")}
                data-testid="button-contact-projects"
              >
                Get in Touch
              </Button>
              <Button 
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
                onClick={() => console.log("Download resume clicked")}
                data-testid="button-download-projects"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}