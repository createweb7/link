import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Senior Education Consultant",
    experience: "15+ years",
    specialization: "UK & US Admissions",
    education: "PhD Oxford, MBA Harvard",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Former Oxford admissions officer with deep expertise in Oxbridge and Ivy League applications."
  },
  {
    name: "Mr. Raj Mehta",
    role: "US Admissions Expert",
    experience: "12+ years",
    specialization: "STEM & Ivy League",
    education: "MS MIT, MBA Wharton",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Silicon Valley veteran helping students navigate competitive US university admissions."
  },
  {
    name: "Ms. Emily Chen",
    role: "Canada & Australia Expert",
    experience: "10+ years",
    specialization: "Immigration Pathways",
    education: "MSc UBC, Immigration Law",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Immigration lawyer turned education consultant specializing in pathway programs."
  }
];

const milestones = [
  { year: "2008", event: "Founded as part of Lurnable Education Group" },
  { year: "2012", event: "Reached 1,000 successful student placements" },
  { year: "2016", event: "Expanded to 10+ countries worldwide" },
  { year: "2019", event: "Launched digital platform and online services" },
  { year: "2022", event: "Achieved 500+ university partnerships" },
  { year: "2024", event: "Celebrated 10,000+ student success stories" }
];

const values = [
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision we make is guided by what's best for our students' futures"
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Honest guidance and transparent processes in everything we do"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Committed to delivering the highest quality service and outcomes"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Understanding diverse education systems and cultural nuances worldwide"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About Linkuble
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Part of Lurnable Education Group - Your trusted partner for global education since 2008. 
              We've helped over 10,000 students achieve their dreams of studying abroad.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>16+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>10,000+</div>
                <div className="text-blue-200 text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>50+</div>
                <div className="text-blue-200 text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: "#1e3a8a"}}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize access to world-class education by providing personalized guidance, 
                expert mentorship, and comprehensive support to students pursuing their international 
                education dreams.
              </p>
              <p className="text-gray-600">
                We believe that every student deserves the opportunity to unlock their potential 
                through global education experiences, regardless of their background or starting point.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Students studying"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading study abroad consultancy
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-gold"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold mb-2" style={{color: "#f59e0b"}}>
                          {milestone.year}
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full z-10 relative" style={{backgroundColor: "#1e3a8a"}}></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-white border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white" style={{backgroundColor: "#1e3a8a"}}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4" style={{color: "#1e3a8a"}}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2" style={{color: "#1e3a8a"}}>
                    {member.name}
                  </h3>
                  <p className="font-medium mb-2" style={{color: "#f59e0b"}}>
                    {member.role}
                  </p>
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="mr-2">
                      {member.experience}
                    </Badge>
                    <Badge variant="outline">
                      {member.specialization}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.education}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Why Choose Linkuble?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from other study abroad consultancies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Track Record",
                description: "98% admission success rate with 10,000+ successful placements"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Former admissions officers and industry experts with 15+ years experience"
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Partnerships with 500+ universities across 50+ countries"
              },
              {
                icon: Target,
                title: "Personalized Approach",
                description: "Tailored guidance based on your unique profile and aspirations"
              },
              {
                icon: BookOpen,
                title: "Comprehensive Support",
                description: "End-to-end assistance from application to visa and beyond"
              },
              {
                icon: TrendingUp,
                title: "Success-Oriented",
                description: "Focus on outcomes with continuous support until you achieve your goals"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <IconComponent className="w-12 h-12 mb-4" style={{color: "#f59e0b"}} />
                    <h3 className="text-lg font-semibold mb-3" style={{color: "#1e3a8a"}}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who trusted us with their international education dreams
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-consultation">
              <Button size="lg" className="text-navy text-lg px-8 py-4" style={{backgroundColor: "#f59e0b"}}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/success-stories">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}