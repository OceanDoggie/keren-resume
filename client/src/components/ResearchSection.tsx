import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, FileText } from "lucide-react";

export default function ResearchSection() {
  const researchProjects = [
    {
      id: "qualitative-workplace-bullying",
      title: "Workplace Bullying in Higher-Education Health Sciences",
      subtitle: "Qualitative Research",
      organization: "Health Science Department, GGC",
      period: "Nov 2024 – Apr 2025",
      location: "Lawrenceville, GA",
      description: "Designed a grounded-theory codebook and self-taught NVivo to analyze 18+ interviews and field notes",
      achievements: [
        "Identified recurring themes (power dynamics, reporting friction, psychological safety) that informed faculty policy discussions",
        "Delivered a 29-page synthesis with exemplar quotes and \"opportunity areas,\" later referenced in departmental training proposals"
      ],
      skills: ["NVivo", "Qualitative Coding", "Grounded Theory", "Interview Analysis"],
      status: "Completed"
    },
    {
      id: "quantitative-workplace-bullying",
      title: "Workplace Bullying Study",
      subtitle: "Quantitative Continuation",
      organization: "Health Science Department, GGC",
      period: "Aug 2025 – Present",
      location: "Lawrenceville, GA",
      description: "Translating qualitative themes into a draft survey instrument",
      achievements: [
        "Designing analysis plan; setting up code templates in Python/R for descriptive stats and simple tests",
        "Preparing visual results brief and IRB/ethics docs as needed"
      ],
      skills: ["Python", "R", "Survey Design", "Statistical Analysis"],
      status: "In Progress"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4" data-testid="text-research-title">
            Research Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring workplace dynamics through mixed-methods research approaches
          </p>
        </div>

        <div className="grid gap-8">
          {researchProjects.map((project) => (
            <Card key={project.id} className="hover-elevate" data-testid={`card-research-${project.id}`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-brand-primary mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mb-2">
                      {project.subtitle}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.organization}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    data-testid={`badge-status-${project.id}`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Skills & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publication */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-brand-primary mb-6" data-testid="text-publications-title">
            Publications & Reports
          </h3>
          <Card data-testid="card-publication">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Workplace Bullying in Higher-Education Health Sciences — Qualitative Report (30 pages)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Author, May 2025 | Archived at GGC Health Science Department | Available upon request
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Synthesized 14 interviews into themes on power dynamics & reporting friction</li>
                    <li>• Proposed "opportunity areas" for faculty training & policy interventions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}