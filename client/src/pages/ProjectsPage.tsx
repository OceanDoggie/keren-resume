import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ExternalLink, Lightbulb, Brain, Target, Code, Presentation } from "lucide-react";
import { downloadResume } from "@/utils/downloadResume";

export default function ProjectsPage() {
  const handleDownloadResume = () => {
    downloadResume('pdf');
  };

  const projects = [
    {
      id: "ai-pose-coach",
      title: "AI Pose Coach",
      subtitle: "Product Concept & MVP Exploration",
      role: "Founder/Researcher",
      period: "Aug 2025 – Present",
      type: "Independent Product Development",
      status: "Active Development",
      description: "A comprehensive product development effort combining market research, system design, and prototype development for AI-powered fitness guidance. This project bridges computer vision technology with human-centered design principles.",
      overview: "Developing an intelligent fitness coaching application that uses AI to provide real-time pose correction and personalized workout guidance, making professional fitness coaching accessible to everyone.",
      objectives: [
        "Create an MVP that demonstrates core pose detection and correction functionality",
        "Validate market demand through user research and competitive analysis",
        "Develop scalable system architecture for real-time pose analysis",
        "Design intuitive user experience for fitness guidance"
      ],
      achievements: [
        "Authored comprehensive PRD-style concept document defining user flows, success metrics, and MVP scope",
        "Conducted market research analyzing 50+ fitness tutorials from Xiaohongshu and Instagram",
        "Built detailed concept whitepaper and system specification document",
        "Developing low-code MVP demo with integrated usage analytics",
        "Creating public README and one-pager documentation targeted for September 2025 release",
        "Established product development timeline with clear milestones and deliverables"
      ],
      technologies: ["Computer Vision", "AI/ML", "Product Strategy", "User Experience Design", "Market Research"],
      skills: ["Product Strategy", "Market Research", "System Design", "MVP Development", "User Flow Design", "Technical Writing"],
      challenges: [
        "Balancing technical complexity with user accessibility",
        "Developing accurate pose detection algorithms for diverse body types",
        "Creating engaging user experience for long-term retention",
        "Validating product-market fit in competitive fitness app landscape"
      ],
      icon: <Lightbulb className="h-6 w-6" />,
      externalLink: {
        url: "#",
        text: "即将发布 / Coming Soon",
        isPlaceholder: true
      },
      futureGoals: [
        "Launch public beta version with core functionality",
        "Gather user feedback and iterate on product features",
        "Explore partnership opportunities with fitness professionals",
        "Scale technology for multiple exercise categories"
      ]
    },
    {
      id: "gesture-control",
      title: "Gesture Control",
      subtitle: "ASL Hand-Recognition Learning Tool",
      role: "Technology Ambassador Program: Group Project",
      period: "Aug 2025 – Present",
      type: "Collaborative Educational Technology",
      status: "Pre-Launch",
      description: "An innovative educational application that uses computer vision and machine learning to teach American Sign Language (ASL) through real-time hand gesture recognition and interactive feedback systems.",
      overview: "Building an accessible ASL learning platform that provides immediate feedback on hand gestures, making sign language education more engaging and effective for students of all levels.",
      objectives: [
        "Develop accurate real-time ASL hand gesture recognition system",
        "Create engaging 3D visual feedback for learning enhancement",
        "Design educational curriculum framework for ASL instruction",
        "Prepare comprehensive workshop materials for classroom deployment"
      ],
      achievements: [
        "Originated project concept based on AI Pose Coach research insights",
        "Successfully collaborated with interdisciplinary team to design real-time ASL learning application",
        "Built comprehensive dataset curation pipeline for training gesture recognition models",
        "Defined rigorous prototype evaluation criteria and led iterative error-analysis loops",
        "Integrated MediaPipe framework for robust hand detection and tracking",
        "Designed innovative 3D model feedback system to teach proper hand shapes and movements",
        "Preparing 3 comprehensive classroom workshops (October 2025) for 30-40 students each",
        "Selected to present project at prestigious TAP Expo showcase event"
      ],
      technologies: ["MediaPipe", "Computer Vision", "Machine Learning", "3D Modeling", "Python", "Educational Technology"],
      skills: ["MediaPipe", "Computer Vision", "Dataset Curation", "Machine Learning", "Educational Technology", "3D Modeling", "Workshop Design", "Public Speaking"],
      challenges: [
        "Achieving high accuracy in diverse lighting and background conditions",
        "Creating intuitive 3D feedback that enhances rather than distracts from learning",
        "Developing curriculum that accommodates different learning styles and paces",
        "Ensuring accessibility for users with varying technical backgrounds"
      ],
      icon: <Brain className="h-6 w-6" />,
      externalLink: {
        url: "https://gesturecontrolworkshop.netlify.app",
        text: "查看演示 / View Demo",
        isPlaceholder: false
      },
      upcomingEvents: [
        {
          event: "Classroom Workshops",
          date: "October 2025",
          participants: "30-40 students each",
          description: "Teaching AI recognition concepts and demonstrating the ASL learning tool"
        },
        {
          event: "TAP Expo Presentation",
          date: "Fall 2025",
          description: "Showcasing project to broader academic and technology community"
        }
      ]
    },
    {
      id: "manifest-write",
      title: "Manifest Write",
      subtitle: "AI-Powered Writing Assistant",
      role: "Concept Development & Design",
      period: "Future Project",
      type: "Product Concept",
      status: "Planning Phase",
      description: "An innovative AI-powered writing platform designed to help users articulate their thoughts and ideas more effectively. This project focuses on bridging the gap between human creativity and AI assistance in written communication.",
      overview: "Developing an intelligent writing assistant that understands context, tone, and user intent to provide meaningful suggestions and improvements for various types of written content.",
      objectives: [
        "Create intuitive AI writing assistance for diverse content types",
        "Develop context-aware suggestion algorithms",
        "Design seamless user experience for writers of all levels",
        "Build collaborative writing features for teams"
      ],
      achievements: [
        "Conceptual framework and product vision defined",
        "Market research and competitive analysis in progress",
        "User experience wireframes and design concepts",
        "Technical architecture planning for AI integration"
      ],
      technologies: ["AI/ML", "Natural Language Processing", "User Experience Design", "Product Strategy"],
      skills: ["Product Strategy", "AI Integration", "UX Design", "Market Research", "Technical Planning"],
      challenges: [
        "Balancing AI assistance with human creativity",
        "Creating context-aware writing suggestions",
        "Designing intuitive interface for complex AI features",
        "Ensuring content quality and originality"
      ],
      icon: <Code className="h-6 w-6" />,
      externalLink: {
        url: "#",
        text: "即将发布 / Coming Soon",
        isPlaceholder: true
      },
      futureGoals: [
        "Develop MVP with core AI writing features",
        "Conduct user testing and feedback collection",
        "Explore partnerships with content platforms",
        "Scale AI models for various writing styles"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-projects-title">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging research insights with practical technology solutions that combine 
              AI/ML capabilities with human-centered design principles
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project) => (
              <Card key={project.id} className="hover-elevate" data-testid={`card-project-${project.id}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-brand-accent">
                          {project.icon}
                        </div>
                        <CardTitle className="text-2xl text-brand-primary">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground mb-3">
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
                  {/* Project Overview */}
                  <div className="mb-6">
                    <p className="text-foreground leading-relaxed text-lg mb-4">
                      {project.description}
                    </p>
                    <div className="bg-brand-light/20 rounded-lg p-4">
                      <h4 className="font-semibold text-brand-primary mb-2">Project Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.overview}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-brand-accent" />
                        Project Objectives
                      </h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4 text-brand-accent" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements & Milestones</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technical Challenges & Solutions</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-brand-secondary mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Upcoming Events (for Gesture Control) */}
                  {project.upcomingEvents && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Presentation className="h-4 w-4 text-brand-accent" />
                        Upcoming Presentations & Events
                      </h4>
                      <div className="space-y-3">
                        {project.upcomingEvents.map((event, index) => (
                          <div key={index} className="bg-muted/50 rounded-lg p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div>
                                <h5 className="font-medium text-foreground">{event.event}</h5>
                                <p className="text-sm text-muted-foreground">{event.description}</p>
                              </div>
                              <div className="text-sm text-brand-accent font-medium">
                                {event.date}
                                {event.participants && ` • ${event.participants}`}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Future Goals (for AI Pose Coach) */}
                  {project.futureGoals && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Future Development Goals</h4>
                      <ul className="space-y-2">
                        {project.futureGoals.map((goal, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {project.externalLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          if (!project.externalLink?.isPlaceholder) {
                            window.open(project.externalLink?.url, '_blank')
                          }
                        }}
                        disabled={project.externalLink?.isPlaceholder}
                        data-testid={`button-external-${project.id}`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.externalLink?.text}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-primary mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss project collaboration, technical insights, 
                or potential opportunities that combine AI/ML with human-centered design principles.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline"
                  onClick={() => console.log("Contact clicked")}
                  data-testid="button-contact-projects"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white"
                  data-testid="button-download-projects"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}