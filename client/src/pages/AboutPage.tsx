import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download, MapPin, Heart, Target, Lightbulb, Users, Award } from "lucide-react";

export default function AboutPage() {
  const handleDownloadResume = () => {
    console.log("Downloading resume...");
    
    // Create download link and trigger download
    const downloadUrl = '/api/download/resume?format=pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Keren_Zhang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const interests = [
    "Data Science & Analytics",
    "Qualitative Research", 
    "Product Development",
    "Human-Computer Interaction",
    "Taekwondo & Martial Arts",
    "Video Editing & Content Creation",
    "Mind Mapping & Visual Thinking",
    "Environment Protection",
    "Community Leadership"
  ];

  const traits = [
    "Quick Learner",
    "Positive Attitude", 
    "Open-minded",
    "Responsible",
    "Kind & Collaborative",
    "Hardworking",
    "Creative Problem Solver"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="text-2xl bg-brand-primary text-white">
                  KZ
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-about-title">
              About Keren Zhang
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A dedicated and hardworking individual with an open mind and positive attitude, passionate about turning new ideas into reality.
            </p>
          </div>

          {/* Personal Introduction */}
          <Card className="mb-8" data-testid="card-introduction">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-primary">
                <Heart className="h-5 w-5" />
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                I'm a curious, systems-minded sophomore at Georgia Gwinnett College, studying Data Science. 
                My journey combines qualitative and quantitative research with hands-on prototyping, bridging 
                psychology insights with data analysis and software development.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Coming from a background that includes both psychology coursework at Hubei University and 
                leadership roles in student organizations, I bring a unique perspective to data science that 
                emphasizes human-centered, evidence-based approaches to problem-solving.
              </p>
              <p className="text-foreground leading-relaxed">
                My leadership journey began early with roles as Vice President of our Students' Union (2017-2019) 
                and later as Vice President of the Taekwondo Club (2020-2021). I also founded an Environment 
                Protection Group, demonstrating my commitment to both community building and environmental 
                responsibility. These experiences taught me the importance of collaboration, strategic thinking, 
                and taking initiative to create positive change.
              </p>
            </CardContent>
          </Card>

          {/* What I Love */}
          <Card className="mb-8" data-testid="card-interests">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-primary">
                <Lightbulb className="h-5 w-5" />
                What I Love
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Academic & Professional Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.slice(0, 4).map((interest) => (
                      <Badge key={interest} variant="secondary" className="mb-2">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Personal Interests & Leadership</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.slice(4).map((interest) => (
                      <Badge key={interest} variant="outline" className="mb-2">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership & Activities */}
          <Card className="mb-8" data-testid="card-leadership">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-primary">
                <Users className="h-5 w-5" />
                Leadership & Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-accent/30 pl-4">
                  <h4 className="font-medium text-foreground mb-1">Vice President, Students' Union</h4>
                  <p className="text-sm text-muted-foreground mb-2">2017 - 2019</p>
                  <p className="text-sm text-foreground">
                    Led student government initiatives, coordinated campus events, and represented student interests 
                    in administrative meetings. Developed strong organizational and communication skills while 
                    managing diverse student committees.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-accent/30 pl-4">
                  <h4 className="font-medium text-foreground mb-1">Vice President, Taekwondo Club</h4>
                  <p className="text-sm text-muted-foreground mb-2">2020 - 2021</p>
                  <p className="text-sm text-foreground">
                    Managed club operations, organized training sessions and tournaments, and mentored new members. 
                    Balanced athletic excellence with leadership responsibility, fostering team unity and discipline.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-accent/30 pl-4">
                  <h4 className="font-medium text-foreground mb-1">Founder, Environment Protection Group</h4>
                  <p className="text-sm text-muted-foreground mb-2">Initiative Period</p>
                  <p className="text-sm text-foreground">
                    Founded and led environmental awareness initiatives on campus. Organized clean-up campaigns, 
                    educational workshops, and sustainability projects, demonstrating entrepreneurial spirit and 
                    commitment to environmental responsibility.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-accent/30 pl-4">
                  <h4 className="font-medium text-foreground mb-1">Physics Class Representative</h4>
                  <p className="text-sm text-muted-foreground mb-2">2019 - 2023</p>
                  <p className="text-sm text-foreground">
                    Served as liaison between students and faculty, coordinated study groups, and facilitated 
                    academic discussions. Helped peers succeed in challenging physics coursework while maintaining 
                    strong academic performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What I'm Good At */}
          <Card className="mb-8" data-testid="card-strengths">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-primary">
                <Target className="h-5 w-5" />
                My Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {traits.map((trait) => (
                  <div key={trait} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                    <span className="text-sm font-medium text-foreground">{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact & Location */}
          <Card className="mb-8" data-testid="card-location">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Currently based in Lawrenceville, GA</span>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8"
              data-testid="button-download-resume-about"
            >
              <Download className="h-4 w-4 mr-2" />
              Download My Resume
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}