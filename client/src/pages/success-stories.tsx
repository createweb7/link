import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import VideoTestimonials from "@/components/video-testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap,
  MapPin,
  Star,
  Quote,
  Play,
  ExternalLink,
  Trophy,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    university: "Oxford University",
    program: "MSc in Economics",
    country: "United Kingdom",
    previousEducation: "Delhi University",
    gpa: "8.7/10",
    testScore: "IELTS 8.0",
    scholarship: "£15,000 merit scholarship",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "Coming from a middle-class family in Delhi, I never imagined I could study at Oxford. Linkuble's comprehensive guidance helped me craft a compelling personal statement and prepare for interviews. The scholarship support was incredible!",
    outcome: "Now working as an economist at a leading consulting firm in London",
    serviceUsed: "Elite Services",
    year: "2023"
  },
  {
    id: 2,
    name: "Rahul Patel",
    university: "MIT",
    program: "MS in Computer Science",
    country: "United States",
    previousEducation: "IIT Bombay",
    gpa: "9.2/10",
    testScore: "GRE 330, TOEFL 118",
    scholarship: "Full funding + stipend",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "Despite having good grades, I was struggling with my application essays. Linkuble's mentors helped me showcase my research experience effectively. The unlimited editing support was game-changing.",
    outcome: "Landed a software engineering role at Google after graduation",
    serviceUsed: "Elite Services",
    year: "2022"
  },
  {
    id: 3,
    name: "Anjali Mehta",
    university: "University of Cambridge",
    program: "MPhil in Engineering",
    country: "United Kingdom",
    previousEducation: "NIT Trichy",
    gpa: "8.9/10",
    testScore: "IELTS 7.5",
    scholarship: "Cambridge Trust Scholarship",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "The application process seemed overwhelming until I found Linkuble. Their structured approach and expert guidance helped me secure admission to my dream university with a full scholarship.",
    outcome: "Currently pursuing PhD at Cambridge with industry partnerships",
    serviceUsed: "Elite Services",
    year: "2023"
  },
  {
    id: 4,
    name: "Arjun Singh",
    university: "University of Toronto",
    program: "MBA",
    country: "Canada",
    previousEducation: "BITS Pilani",
    gpa: "8.5/10",
    testScore: "GMAT 720, IELTS 7.0",
    scholarship: "Merit-based scholarship",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "Working in consulting for 4 years, I wanted to transition to tech leadership. Linkuble helped me craft a compelling career narrative that resonated with admissions committees.",
    outcome: "Product Manager at a unicorn startup in Toronto",
    serviceUsed: "Premium Services",
    year: "2021"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    university: "University of Melbourne",
    program: "Master of Data Science",
    country: "Australia",
    previousEducation: "Anna University",
    gpa: "8.3/10",
    testScore: "IELTS 7.5",
    scholarship: "Australia Awards Scholarship",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "As a working professional, I needed flexible support for my applications. Linkuble's premium service provided the perfect balance of guidance and independence.",
    outcome: "Data Scientist at a major Australian bank",
    serviceUsed: "Premium Services",
    year: "2022"
  },
  {
    id: 6,
    name: "Vikram Choudhary",
    university: "Technical University of Munich",
    program: "MS in Automotive Engineering",
    country: "Germany",
    previousEducation: "VIT Vellore",
    gpa: "8.6/10",
    testScore: "IELTS 6.5",
    scholarship: "DAAD Scholarship",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    story: "Germany's tuition-free education was attractive, but the application process was complex. Linkuble's free PG service provided excellent guidance for navigating German university requirements.",
    outcome: "Automotive engineer at BMW in Munich",
    serviceUsed: "Free PG Services",
    year: "2021"
  }
];

const achievements = [
  { metric: "98%", label: "Admission Success Rate", icon: Trophy },
  { metric: "£25M+", label: "Scholarships Secured", icon: Target },
  { metric: "10,000+", label: "Students Placed", icon: Users },
  { metric: "500+", label: "University Partners", icon: TrendingUp }
];

export default function SuccessStories() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Stories" },
    { id: "uk", label: "United Kingdom" },
    { id: "us", label: "United States" },
    { id: "canada", label: "Canada" },
    { id: "australia", label: "Australia" },
    { id: "germany", label: "Germany" }
  ];

  const filteredStories = selectedFilter === "all" 
    ? successStories 
    : successStories.filter(story => 
        story.country.toLowerCase().includes(selectedFilter) || 
        (selectedFilter === "uk" && story.country === "United Kingdom") ||
        (selectedFilter === "us" && story.country === "United States")
      );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories That Inspire
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Meet our students who achieved their dreams of studying at the world's top universities with our expert guidance
            </p>
            
            {/* Achievements Grid */}
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                    <div className="text-3xl font-bold mb-2" style={{color: "#f59e0b"}}>
                      {achievement.metric}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Hear From Our Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our students share their journey and success stories
            </p>
          </div>
          
          <VideoTestimonials />
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 bg-gray-50 rounded-full p-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "ghost"}
                  className={`rounded-full px-6 ${
                    selectedFilter === filter.id 
                      ? "text-white" 
                      : "text-gray-600 hover:text-navy"
                  }`}
                  style={selectedFilter === filter.id ? {backgroundColor: "#1e3a8a"} : {}}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                    <Badge 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs"
                      style={{backgroundColor: "#f59e0b", color: "#1e3a8a"}}
                    >
                      {story.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2" style={{color: "#1e3a8a"}}>
                    {story.name}
                  </CardTitle>
                  <p className="text-gray-600 font-medium">
                    {story.program}
                  </p>
                  <p className="text-sm" style={{color: "#f59e0b"}}>
                    {story.university}, {story.country}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Academic Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Previous:</span>
                      <div className="text-gray-600">{story.previousEducation}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">GPA:</span>
                      <div className="text-gray-600">{story.gpa}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Test Score:</span>
                      <div className="text-gray-600">{story.testScore}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Service:</span>
                      <div className="text-gray-600">{story.serviceUsed}</div>
                    </div>
                  </div>

                  {/* Scholarship */}
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">
                        {story.scholarship}
                      </span>
                    </div>
                  </div>

                  {/* Story Quote */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Quote className="w-4 h-4 mb-2" style={{color: "#1e3a8a"}} />
                    <p className="text-sm text-gray-700 italic">
                      "{story.story}"
                    </p>
                  </div>

                  {/* Current Outcome */}
                  <div className="border-t pt-4">
                    <span className="font-medium text-gray-700 text-sm">Current Role:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      {story.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-white" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who achieved their dreams with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-consultation">
              <Button size="lg" className="text-navy text-lg px-8 py-4" style={{backgroundColor: "#f59e0b"}}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}