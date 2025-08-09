import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CountrySelector from "@/components/country-selector";
import ServicesSection from "@/components/services-section";
import VideoTestimonials from "@/components/video-testimonials";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  MapPin, 
  TrendingUp, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  BookOpen,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Why Study Abroad Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Why Choose International Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of studying abroad and why millions of students choose international education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">World-Class Education</h3>
                <p className="text-gray-600">Access to top-ranked universities with cutting-edge research facilities and renowned faculty</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Global Network</h3>
                <p className="text-gray-600">Build lifelong connections with peers from around the world and expand your professional network</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Career Advancement</h3>
                <p className="text-gray-600">Enhance your career prospects with international exposure and globally recognized qualifications</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Personal Growth</h3>
                <p className="text-gray-600">Develop independence, cultural awareness, and adaptability in a globalized world</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CountrySelector />
      <ServicesSection />

      {/* Success Stories Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with Linkuble's guidance
            </p>
          </div>

          <VideoTestimonials />

          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <div className="text-blue-200">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-blue-200">University Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Your Journey to Global Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process ensures your success from profile building to university admission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Profile Assessment", desc: "Comprehensive evaluation of your academic background, achievements, and career goals" },
              { step: 2, title: "University Shortlisting", desc: "Strategic selection of universities that match your profile and aspirations" },
              { step: 3, title: "Application Preparation", desc: "Expert guidance on SOPs, LORs, and all application documents" },
              { step: 4, title: "Test Preparation", desc: "IELTS, TOEFL, GRE, GMAT preparation with expert trainers" },
              { step: 5, title: "Visa Support", desc: "Complete visa guidance with mock interviews and document preparation" },
              { step: 6, title: "Pre-Departure", desc: "Accommodation, travel, and settling-in support for a smooth transition" }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold text-navy rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Trusted by Leading Universities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official partnerships with 500+ top universities worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Oxford University",
              "Harvard University", 
              "MIT",
              "Cambridge University",
              "Stanford University",
              "University of Toronto"
            ].map((uni, index) => (
              <Card key={index} className="bg-white p-4 hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-4">
                  <div className="h-16 flex items-center justify-center">
                    <div className="text-navy font-semibold text-sm text-center">{uni}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced counselors with deep knowledge of global education systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Senior Education Consultant",
                experience: "15+ years experience in UK & US admissions. Oxford alumna specializing in Oxbridge applications.",
                specialties: ["UK Specialist", "Oxbridge Expert"]
              },
              {
                name: "Mr. Raj Mehta", 
                role: "US Admissions Expert",
                experience: "Harvard MBA with 12+ years in Ivy League admissions. Specialized in STEM applications.",
                specialties: ["USA Specialist", "STEM Expert"]
              },
              {
                name: "Ms. Emily Chen",
                role: "Canada & Australia Expert", 
                experience: "UBC graduate with expertise in Canadian and Australian immigration policies and university systems.",
                specialties: ["Canada Specialist", "Australia Expert"]
              }
            ].map((expert, index) => (
              <Card key={index} className="text-center bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-navy to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{expert.name}</h3>
                  <p className="text-gold font-medium mb-3">{expert.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{expert.experience}</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    {expert.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dreams with Linkuble. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-light text-lg px-8 py-4">
              <GraduationCap className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Call +44 20 1234 5678
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            No obligation • Expert guidance • Personalized recommendations
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
