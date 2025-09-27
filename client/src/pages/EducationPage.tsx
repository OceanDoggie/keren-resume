import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Users, Award, BookOpen } from "lucide-react";
import { downloadResume } from "@/utils/downloadResume";

export default function EducationPage() {
  const handleDownloadResume = () => {
    downloadResume('pdf');
  };

  const educationHistory = [
    {
      id: "ggc",
      institution: "Georgia Gwinnett College (GGC)",
      degree: "Bachelor of Science, IT: Data Science",
      status: "Sophomore",
      period: "Spring 2024 – Present",
      location: "Lawrenceville, GA",
      logo: "GGC",
      description: "Pursuing a comprehensive education in data science with emphasis on both technical skills and research methodology.",
      gpa: "Maintaining strong academic performance",
      highlights: [
        "Active member of Technology Ambassador Program",
        "Research assistant in Health Science Department", 
        "Focus on mixed-methods research and data analysis",
        "Developed expertise in NVivo qualitative analysis software"
      ],
      relevantCourses: [
        "Statistical Analysis",
        "Programming (Python, R, Java)",
        "Research Methods", 
        "Data Visualization",
        "Database Systems",
        "Machine Learning Fundamentals"
      ],
      current: true
    },
    {
      id: "hubei",
      institution: "Hubei University",
      degree: "Coursework toward B.S. in Psychology",
      status: "Exchange/Transfer Student", 
      period: "Sep 2023 – November 2023",
      location: "Wuhan, China",
      logo: "HU",
      description: "Foundational coursework in psychology that provided valuable research methodology training and understanding of human behavior.",
      highlights: [
        "Gained exposure to qualitative research methods",
        "Developed cross-cultural academic perspective", 
        "Built foundation in psychological research design",
        "Enhanced understanding of human behavior patterns"
      ],
      relevantCourses: [
        "Research Psychology",
        "Statistical Methods",
        "Experimental Design", 
        "Behavioral Analysis",
        "Cognitive Psychology"
      ],
      current: false
    },
    {
      id: "liuzhou",
      institution: "Liuzhou High School",
      degree: "High School Diploma",
      status: "Physics Class Representative",
      period: "2019 – 2023", 
      location: "Liuzhou, China",
      logo: "LHS",
      description: "Completed rigorous academic program with leadership responsibilities and strong performance in STEM subjects.",
      highlights: [
        "Served as Physics Class Representative",
        "Demonstrated leadership in academic environment",
        "Strong foundation in mathematics and sciences", 
        "Developed organizational and communication skills"
      ],
      relevantCourses: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science Basics"
      ],
      current: false
    }
  ];

  const achievements = [
    {
      title: "Self-taught NVivo Proficiency",
      description: "Independently mastered qualitative data analysis software to code and deliver a comprehensive dataset within one semester",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Interdisciplinary Integration", 
      description: "Successfully bridged psychology, data analysis, and software development into a human-centered, evidence-based product mindset",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "Leadership Experience",
      description: "Demonstrated leadership capabilities through class representative role and active participation in academic programs",
      icon: <Users className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-education-title">
              Education Background
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in data science through diverse academic experiences
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {educationHistory.map((edu) => (
              <Card key={edu.id} className="hover-elevate" data-testid={`card-education-${edu.id}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-brand-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm">
                          {edu.logo}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-brand-primary">
                            {edu.institution}
                          </CardTitle>
                          {edu.current && (
                            <Badge variant="default" className="mt-1">
                              Current
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="text-base font-medium text-foreground">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.status}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm text-brand-accent font-medium">
                            {edu.gpa}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center" data-testid="text-achievements-title">
              Academic Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-achievement-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="text-brand-accent mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}