import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export default function EducationSection() {
  const educationHistory = [
    {
      id: "ggc",
      institution: "Georgia Gwinnett College (GGC)",
      degree: "Bachelor of Science, IT: Data Science",
      status: "Sophomore",
      period: "Spring 2024 – Present",
      location: "Lawrenceville, GA",
      description: "Pursuing a comprehensive education in data science with emphasis on both technical skills and research methodology.",
      highlights: [
        "Current GPA: Maintaining strong academic performance",
        "Active in Technology Ambassador Program",
        "Research assistant in Health Science Department",
        "Focus on mixed-methods research and data analysis"
      ],
      relevantCourses: [
        "Statistical Analysis",
        "Programming (Python, R, Java)",
        "Research Methods",
        "Data Visualization",
        "Database Systems"
      ],
      current: true
    },
    {
      id: "hubei",
      institution: "Hubei University",
      degree: "Coursework toward B.S. in Psychology",
      status: "Transfer Student",
      period: "Sep 2023 – November 2023",
      location: "Wuhan, China",
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
        "Behavioral Analysis"
      ],
      current: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4" data-testid="text-education-title">
            Education Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data science and research methodology
          </p>
        </div>

        <div className="space-y-8">
          {educationHistory.map((edu) => (
            <Card key={edu.id} className="hover-elevate" data-testid={`card-education-${edu.id}`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-5 w-5 text-brand-accent" />
                      <CardTitle className="text-xl text-brand-primary">
                        {edu.institution}
                      </CardTitle>
                      {edu.current && (
                        <Badge variant="default" data-testid={`badge-current-${edu.id}`}>
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="mb-2">
                      <p className="text-base font-medium text-foreground">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.status}
                      </p>
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-brand-primary mb-6" data-testid="text-achievements-title">
            Selected Academic Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card data-testid="card-achievement-nvivo">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Self-taught NVivo Proficiency
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Independently mastered qualitative data analysis software to code and deliver a comprehensive dataset within one semester
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-achievement-mindset">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Interdisciplinary Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully bridged psychology, data analysis, and software development into a human-centered, evidence-based product mindset
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}