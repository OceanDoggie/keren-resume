import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Mail, 
  Github, 
  MapPin, 
  Phone, 
  Send, 
  MessageCircle, 
  Briefcase, 
  GraduationCap,
  Heart 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleDownloadResume = () => {
    console.log("Downloading resume...");
    alert("Resume download would be implemented here.");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactReasons = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Job Opportunities",
      description: "Internships, part-time roles, or entry-level positions in data science"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Research Collaboration",
      description: "Academic research projects, especially in workplace psychology or mixed-methods"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Project Discussion",
      description: "Technical advice, mentorship, or collaboration on AI/ML projects"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "General Networking",
      description: "Industry insights, career advice, or just connecting with fellow researchers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDownloadResume={handleDownloadResume} />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-4" data-testid="text-contact-title">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you! Whether you're interested in collaboration, 
              have questions about my research, or just want to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card className="mb-8" data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <p className="text-muted-foreground">kzhang1@ggc.edu</p>
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="h-auto p-0 text-brand-accent"
                          asChild
                          data-testid="button-email-direct"
                        >
                          <a href="mailto:kzhang1@ggc.edu">Send Email</a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Phone</h3>
                        <p className="text-muted-foreground">404-984-5878</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <Github className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">GitHub</h3>
                        <p className="text-muted-foreground">@OceanDoggie</p>
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="h-auto p-0 text-brand-accent"
                          asChild
                          data-testid="button-github-direct"
                        >
                          <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer">
                            View Profile
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Location</h3>
                        <p className="text-muted-foreground">Lawrenceville, GA</p>
                        <p className="text-sm text-muted-foreground">Georgia Gwinnett College</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Me */}
              <Card data-testid="card-contact-reasons">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-primary">
                    Great Reasons to Reach Out
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactReasons.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-brand-accent mt-1">
                          {reason.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">
                            {reason.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle className="text-2xl text-brand-primary">
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                        data-testid="input-subject"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about what you'd like to discuss..."
                        rows={6}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white"
                      data-testid="button-send-message"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">
                  Prefer Quick Contact?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    asChild
                    className="flex-1"
                    data-testid="button-quick-email"
                  >
                    <a href="mailto:kzhang1@ggc.edu?subject=Hello from your website!">
                      <Mail className="h-4 w-4 mr-2" />
                      Quick Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="flex-1"
                    data-testid="button-quick-github"
                  >
                    <a href="https://github.com/OceanDoggie" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time & Availability */}
          <div className="mt-12 text-center">
            <Card className="bg-muted/30" data-testid="card-availability">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">
                  Response Time & Availability
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Badge variant="secondary" className="mb-2">Email</Badge>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24-48 hours
                    </p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Projects</Badge>
                    <p className="text-sm text-muted-foreground">
                      Open to part-time opportunities
                    </p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">Research</Badge>
                    <p className="text-sm text-muted-foreground">
                      Always interested in collaboration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}