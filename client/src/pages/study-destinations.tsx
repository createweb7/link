import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CountrySelector from "@/components/country-selector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe,
  Clock,
  University,
  DollarSign,
  CreditCard,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const popularDestinations = [
  {
    id: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Home of Oxford & Cambridge",
    duration: "1-year Master's programs",
    topUnis: "Oxford, Cambridge, Imperial College",
    fees: "£18K-£35K + £10K living",
    visa: "Student + 2-year Graduate Route",
    highlights: ["Shorter program duration", "Rich academic heritage", "Strong alumni networks", "Research excellence"],
    popular: true,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "680K+ international students",
    workRights: "20 hours/week + 2-year post-study visa"
  },
  {
    id: "united-states",
    name: "United States", 
    flag: "🇺🇸",
    tagline: "Land of Ivy League Universities",
    duration: "2-year Master's programs",
    topUnis: "Harvard, MIT, Stanford",
    fees: "$30K-$80K + $15K living",
    visa: "F1 + Optional Practical Training",
    highlights: ["World's top universities", "Innovation hub", "Diverse programs", "Industry connections"],
    popular: true,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "1.1M+ international students",
    workRights: "On-campus work + OPT up to 3 years"
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦", 
    tagline: "Gateway to Permanent Residency",
    duration: "1-2 year programs",
    topUnis: "University of Toronto, UBC, McGill",
    fees: "CAD 25K-45K + CAD 12K living",
    visa: "Study Permit + PGWP",
    highlights: ["Easy PR pathway", "Affordable education", "Safe environment", "Multicultural society"],
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "640K+ international students",
    workRights: "20 hours/week + 3-year work permit"
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "High Quality of Life",
    duration: "1.5-2 year programs",
    topUnis: "University of Melbourne, ANU, UNSW",
    fees: "AUD 35K-50K + AUD 15K living",
    visa: "Student Visa + Temporary Graduate",
    highlights: ["Excellent work-life balance", "Strong job market", "Beautiful environment", "Friendly culture"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "715K+ international students",
    workRights: "24 hours/week + 2-4 year work visa"
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Tuition-Free Education",
    duration: "2-year Master's programs",
    topUnis: "Technical University of Munich, Heidelberg",
    fees: "€0-€350/semester + €10K living",
    visa: "Student Visa + Job Seeker Visa",
    highlights: ["No tuition fees", "Strong engineering programs", "EU work opportunities", "Industrial powerhouse"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "320K+ international students",
    workRights: "120 full days + 18-month job search"
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    tagline: "Asia's Education Hub",
    duration: "1-1.5 year programs",
    topUnis: "National University of Singapore, NTU",
    fees: "SGD 30K-50K + SGD 15K living",
    visa: "Student Pass + Work Visa",
    highlights: ["Strategic location", "Business hub", "Multicultural", "High employment rates"],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    students: "150K+ international students",
    workRights: "16 hours/week + work visa opportunities"
  }
];

const stats = [
  { icon: Globe, metric: "50+", label: "Countries Available" },
  { icon: University, metric: "500+", label: "Partner Universities" },
  { icon: Users, metric: "10K+", label: "Students Placed" },
  { icon: Award, metric: "98%", label: "Success Rate" }
];

export default function StudyDestinations() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Dream Destination Awaits
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Explore the world's top study destinations and find the perfect country for your international education journey
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                    <div className="text-3xl font-bold mb-2" style={{color: "#f59e0b"}}>
                      {stat.metric}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Country Selector */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Find Your Perfect Study Destination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our interactive tool to compare destinations based on your preferences
            </p>
          </div>
          
          <CountrySelector />
        </div>
      </section>

      {/* Popular Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: "#1e3a8a"}}>
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed information about the most sought-after countries for international education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {popularDestinations.map((destination, index) => (
              <Card 
                key={destination.id} 
                className={`hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden ${
                  destination.popular ? 'ring-2 ring-gold' : ''
                }`}
              >
                {destination.popular && (
                  <div className="bg-gradient-to-r from-gold to-yellow-500 text-navy text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular Destination
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{destination.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                        <p className="text-blue-100">{destination.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Quick Facts */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" style={{color: "#f59e0b"}} />
                      <div>
                        <p className="text-xs text-gray-600">Duration</p>
                        <p className="text-sm font-medium">{destination.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <University className="w-5 h-5" style={{color: "#f59e0b"}} />
                      <div>
                        <p className="text-xs text-gray-600">Top Universities</p>
                        <p className="text-sm font-medium">{destination.topUnis}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5" style={{color: "#f59e0b"}} />
                      <div>
                        <p className="text-xs text-gray-600">Fees</p>
                        <p className="text-sm font-medium">{destination.fees}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5" style={{color: "#f59e0b"}} />
                      <div>
                        <p className="text-xs text-gray-600">Visa</p>
                        <p className="text-sm font-medium">{destination.visa}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3" style={{color: "#1e3a8a"}}>Key Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">International Students:</span>
                        <span className="font-medium">{destination.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Work Rights:</span>
                        <span className="font-medium">{destination.workRights}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link href={`/destinations/${destination.id}`} className="flex-1">
                      <Button 
                        className="w-full text-white"
                        style={{backgroundColor: "#1e3a8a"}}
                      >
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/book-consultation">
                      <Button 
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-navy"
                      >
                        Get Guidance
                      </Button>
                    </Link>
                  </div>
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
            Ready to Choose Your Destination?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized guidance to select the perfect country and university for your goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-consultation">
              <Button size="lg" className="text-navy text-lg px-8 py-4" style={{backgroundColor: "#f59e0b"}}>
                <Users className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                <Star className="mr-2 h-5 w-5" />
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