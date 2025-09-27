import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, FileText, Users, Database, BarChart3, ExternalLink } from "lucide-react";
import { downloadResume } from "@/utils/downloadResume";

export default function ResearchPage() {
  const handleDownloadResume = () => {
    downloadResume('pdf');
  };

  const researchProjects = [
    {
      id: "qualitative-workplace-bullying",
      title: "Workplace Bullying in Higher-Education Health Sciences",
      subtitle: "Qualitative Research Study", 
      organization: "Health Science Department, GGC",
      period: "Nov 2024 – Apr 2025",
      location: "Lawrenceville, GA",
      status: "Completed",
      type: "Qualitative Study",
      description: "Comprehensive qualitative analysis of workplace bullying dynamics within higher education health science departments, utilizing grounded theory methodology.",
      objectives: [
        "Identify recurring patterns of workplace bullying in academic health science settings",
        "Analyze power dynamics and reporting mechanisms",
        "Assess psychological safety within departmental structures",
        "Develop evidence-based recommendations for policy interventions"
      ],
      methodology: [
        "Grounded theory approach",
        "Semi-structured interviews with 18+ participants",
        "Field notes and observational data",
        "NVivo software for qualitative coding",
        "Thematic analysis and pattern identification"
      ],
      achievements: [
        "Self-taught NVivo qualitative analysis software within one semester",
        "Developed comprehensive grounded-theory codebook",
        "Analyzed 18+ interviews and extensive field notes",
        "Identified key themes: power dynamics, reporting friction, psychological safety",
        "Delivered 29-page synthesis with exemplar quotes and actionable insights",
        "Findings referenced in departmental training proposals and policy discussions"
      ],
      skills: ["NVivo", "Qualitative Coding", "Grounded Theory", "Interview Analysis", "Academic Writing"],
      publications: [
        {
          title: "Workplace Bullying in Higher-Education Health Sciences — Qualitative Report",
          pages: "30 pages",
          date: "May 2025",
          status: "Archived at GGC Health Science Department",
          availability: "Available upon request"
        }
      ],
      externalLinks: [
        {
          url: "/api/download/research/bullying-trends-report",
          text: "查看研究报告 / View Research Report",
          type: "report"
        },
        {
          url: "/api/download/research/methodology-report", 
          text: "查看方法论 / View Methodology",
          type: "methodology"
        }
      ]
    },
    {
      id: "quantitative-workplace-bullying", 
      title: "Workplace Bullying Study",
      subtitle: "Quantitative Continuation",
      organization: "Health Science Department, GGC",
      period: "Aug 2025 – Present",
      location: "Lawrenceville, GA", 
      status: "In Progress",
      type: "Quantitative Study",
      description: "Building upon qualitative findings to develop and validate a comprehensive survey instrument for measuring workplace bullying in academic health science environments.",
      objectives: [
        "Translate qualitative themes into measurable survey constructs",
        "Develop psychometrically sound assessment instrument",
        "Establish baseline prevalence data for workplace bullying",
        "Create statistical models for predictive analysis"
      ],
      methodology: [
        "Survey instrument development based on qualitative themes",
        "Pilot testing and validation procedures", 
        "Statistical analysis planning (Python/R)",
        "Descriptive statistics and inferential testing",
        "IRB/ethics documentation preparation"
      ],
      achievements: [
        "Translating complex qualitative themes into quantifiable survey items",
        "Designing comprehensive statistical analysis plan",
        "Setting up code templates in Python and R for data analysis",
        "Preparing visual results framework for stakeholder communication",
        "Developing IRB protocols and ethics documentation"
      ],
      skills: ["Python", "R", "Survey Design", "Statistical Analysis", "Research Ethics", "Data Visualization"],
      publications: [],
      externalLinks: []
    }
  ];

  const researchInterests = [
    "Workplace Dynamics & Organizational Psychology",
    "Mixed-Methods Research Design",
    "Qualitative Data Analysis & Grounded Theory", 
    "Statistical Modeling & Quantitative Analysis",
    "Human-Computer Interaction",
    "Evidence-Based Policy Development"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-research-title">
              Research Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring workplace dynamics through rigorous mixed-methods research approaches, 
              bridging qualitative insights with quantitative validation
            </p>
          </div>

          {/* Research Projects */}
          <div className="space-y-12 mb-16">
            {researchProjects.map((project) => (
              <Card key={project.id} className="hover-elevate" data-testid={`card-research-${project.id}`}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-brand-accent">
                          {project.type === "Qualitative Study" ? 
                            <Users className="h-6 w-6" /> : 
                            <BarChart3 className="h-6 w-6" />
                          }
                        </div>
                        <CardTitle className="text-2xl text-brand-primary">
                          {project.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground mb-3">
                        {project.subtitle}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{project.organization}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
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
                  <p className="text-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Database className="h-4 w-4 text-brand-accent" />
                        Research Objectives
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
                      <h4 className="font-semibold text-foreground mb-3">Methodology & Approach</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.methodology.map((method, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements & Outcomes</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-brand-accent mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {project.externalLinks && project.externalLinks.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.externalLinks.map((link, index) => (
                          <Button 
                            key={index}
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(link.url, '_blank')}
                            data-testid={`button-external-${project.id}-${index}`}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {link.text}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Publications */}
                  {project.publications.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-brand-accent" />
                        Publications & Reports
                      </h4>
                      {project.publications.map((pub, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-4">
                          <h5 className="font-medium text-foreground mb-1">{pub.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {pub.pages} | {pub.date} | {pub.status} | {pub.availability}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Interests */}
          <Card className="mb-8" data-testid="card-research-interests">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-primary text-center">
                Research Interests & Areas of Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {researchInterests.map((interest) => (
                  <Badge key={interest} variant="outline" className="text-sm py-1 px-3">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-primary mb-4">
                Interested in Research Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss research opportunities, methodology insights, 
                or potential collaborations in workplace psychology and mixed-methods research.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline"
                  onClick={() => console.log("Contact clicked")}
                  data-testid="button-contact-research"
                >
                  Get in Touch
                </Button>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white"
                  data-testid="button-download-research"
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