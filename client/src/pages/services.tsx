import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Star, 
  Crown, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  Video,
  Globe,
  Target,
  Award,
  BookOpen,
  MessageSquare,
  Clock,
  GraduationCap
} from "lucide-react";

const services = [
  {
    id: "free-pg",
    title: "Free PG Services",
    subtitle: "For postgraduate applicants",
    price: "Free",
    icon: Gift,
    color: "green",
    gradient: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    features: [
      "University shortlisting & application guidance",
      "Basic SOP & LOR templates",
      "Visa application support", 
      "Pre-departure guidance",
      "Online webinars and resources",
      "Email support"
    ],
    description: "Perfect for independent students who need basic guidance and resources for their postgraduate applications.",
    idealFor: "Self-motivated students with strong academic backgrounds applying to 2-3 universities"
  },
  {
    id: "premium",
    title: "Premium Services", 
    subtitle: "For UG & competitive PG applicants",
    price: "From £499",
    icon: Star,
    color: "blue",
    gradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    popular: true,
    features: [
      "Profile Building Support",
      "6-8 university applications (UG & PG)",
      "2 rounds of SOP/LOR edits",
      "Mock interview preparation",
      "Scholarship guidance",
      "Dedicated counselor support",
      "Application timeline management",
      "Visa interview preparation"
    ],
    description: "Comprehensive support for students targeting competitive universities with personalized guidance throughout the process.",
    idealFor: "Students targeting top-tier universities who need structured guidance and professional editing"
  },
  {
    id: "elite",
    title: "Extensive Profile Building Support",
    subtitle: "For Oxbridge, Ivy League & UG applicants", 
    price: "From £2,000",
    icon: Crown,
    color: "purple",
    gradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    features: [
      "Extensive Profile Building Support",
      "Strategic mentorship program",
      "10-12 university applications (UG & PG)",
      "Unlimited SOP/LOR edits",
      "Multiple mock interviews",
      "Application management",
      "Research proposal guidance",
      "Portfolio development",
      "Scholarship application support",
      "Alumni network access"
    ],
    description: "Elite-level support for ambitious students targeting the world's most prestigious universities.",
    idealFor: "High-achieving students targeting Oxbridge, Ivy League, and other elite institutions"
  }
];

const additionalServices = [
  {
    title: "Test Preparation",
    description: "IELTS, TOEFL, GRE, GMAT preparation with expert trainers",
    icon: BookOpen,
    features: ["One-on-one coaching", "Practice tests", "Score improvement guarantee"]
  },
  {
    title: "Scholarship Guidance", 
    description: "Complete support for scholarship applications and funding opportunities",
    icon: Award,
    features: ["Scholarship research", "Application writing", "Interview preparation"]
  },
  {
    title: "Visa Consultation",
    description: "Expert visa guidance with high success rates",
    icon: Globe,
    features: ["Document checklist", "Interview preparation", "Application review"]
  },
  {
    title: "Career Counseling",
    description: "Post-graduation career planning and job search support",
    icon: Target,
    features: ["Career assessment", "Job search strategy", "Interview coaching"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Study Abroad Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive support from university selection to visa approval and beyond. Choose the service level that matches your needs and aspirations.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>10K+</div>
                <div className="text-blue-200 text-sm">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Choose Your Service Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From free resources to comprehensive elite support - we have the right service level for every student
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className={`relative bg-gradient-to-br ${service.gradient} border-2 ${service.borderColor} hover:shadow-xl transition-all duration-300 ${
                    service.popular ? 'scale-105' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="px-4 py-1 font-semibold" style={{backgroundColor: "#f59e0b", color: "#1e3a8a"}}>
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}-500 text-white rounded-full mb-4 mx-auto`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2" style={{color: service.color === 'green' ? '#16a34a' : service.color === 'blue' ? '#1e3a8a' : '#7c3aed'}}>
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 font-medium">{service.subtitle}</p>
                    <div className="text-3xl font-bold mt-4" style={{color: service.color === 'green' ? '#16a34a' : service.color === 'blue' ? '#1e3a8a' : '#7c3aed'}}>
                      {service.price}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-${service.color}-500`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`bg-${service.color === 'green' ? 'green' : service.color === 'blue' ? 'blue' : 'purple'}-50 p-4 rounded-lg`}>
                      <p className="text-sm font-medium text-gray-700">
                        <strong>Ideal for:</strong> {service.idealFor}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Link href="/book-consultation">
                        <Button 
                          className={`w-full text-white font-semibold py-3`}
                          style={{backgroundColor: service.color === 'green' ? '#16a34a' : service.color === 'blue' ? '#1e3a8a' : '#7c3aed'}}
                        >
                          {service.id === 'free-pg' ? (
                            <>
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Get Started Free
                            </>
                          ) : (
                            <>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Book Consultation
                            </>
                          )}
                        </Button>
                      </Link>
                      
                      {service.id !== 'free-pg' && (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            const faqElement = document.getElementById('service-faq');
                            if (faqElement) {
                              faqElement.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          View Service FAQ
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Additional Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complement your main service package with these specialized offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow border-0">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{backgroundColor: "#1e3a8a", color: "white"}}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{color: "#1e3a8a"}}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2" style={{color: "#f59e0b"}} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that has helped thousands of students achieve their study abroad dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Consultation", desc: "Understanding your goals, background, and preferences" },
              { step: 2, title: "Profile Building", desc: "Strengthening your academic and extracurricular profile" },
              { step: 3, title: "University Selection", desc: "Strategic shortlisting based on your profile and goals" },
              { step: 4, title: "Application Success", desc: "Submission, tracking, and securing admission offers" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold mb-6 text-white" style={{backgroundColor: "#f59e0b"}}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: "#1e3a8a"}}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="service-faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's the difference between Premium and Elite services?",
                answer: "Premium services cover 6-8 university applications with 2 rounds of editing, ideal for competitive universities. Elite services include 10-12 applications with unlimited editing, extensive profile building support, research proposal guidance, and access to our alumni network - designed for Oxbridge, Ivy League, and other top-tier institutions."
              },
              {
                question: "How long does the application process take?",
                answer: "The timeline varies by service level and destination. Free PG services provide immediate access to resources. Premium services typically take 3-6 months from initial consultation to application submission. Elite services may take 6-12 months as they include extensive profile building and strategic planning."
              },
              {
                question: "Do you guarantee admission?",
                answer: "While we cannot guarantee admission (no ethical consultant can), we have a 98% success rate. We carefully assess your profile during the consultation and only recommend universities where you have strong admission chances. Our success comes from strategic university selection and exceptional application quality."
              },
              {
                question: "What if I don't get into any universities?",
                answer: "This is extremely rare with our strategic approach. If it happens, we provide additional application rounds at no extra cost for Premium and Elite clients. We also offer alternative pathway recommendations and gap year planning."
              },
              {
                question: "Can I upgrade my service package later?",
                answer: "Yes, you can upgrade from Free to Premium or Premium to Elite at any time. The price difference will be adjusted based on services already used. Many students start with Premium and upgrade to Elite when targeting more competitive universities."
              },
              {
                question: "Do you help with scholarship applications?",
                answer: "Yes! All service levels include scholarship guidance. Premium and Elite services provide dedicated scholarship application support, including scholarship-specific essays and interview preparation. We've helped secure over £25M in scholarships for our students."
              },
              {
                question: "What's included in profile building support?",
                answer: "Profile building includes strategic extracurricular planning, research project guidance, internship placement assistance, competition recommendations, and skill development roadmaps. Elite services include mentorship matching and long-term strategic planning."
              },
              {
                question: "Do you provide visa support?",
                answer: "Yes, all service packages include comprehensive visa guidance. This covers document preparation, application form assistance, interview preparation, and post-arrival support. We have visa experts for all major study destinations."
              },
              {
                question: "How do you select universities for my applications?",
                answer: "We use a data-driven approach considering your academic profile, career goals, budget, and preferences. We categorize universities into 'reach,' 'target,' and 'safety' schools to maximize your chances while ensuring you have excellent options."
              },
              {
                question: "What ongoing support do you provide after admission?",
                answer: "Our support continues with pre-departure guidance, accommodation assistance, course selection advice, and networking opportunities. Elite clients get ongoing mentorship throughout their studies and career guidance upon graduation."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{color: "#1e3a8a"}}>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Application Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation to discuss your goals and find the perfect service package for your needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-consultation">
              <Button size="lg" className="text-navy text-lg px-8 py-4" style={{backgroundColor: "#f59e0b"}}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/destinations">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                <Globe className="mr-2 h-5 w-5" />
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}