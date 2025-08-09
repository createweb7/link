import { Card, CardContent } from "@/components/ui/card";
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
  Globe
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Our Study Abroad Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support from university selection to visa approval and beyond
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Free PG Services */}
          <Card className="relative bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Free PG Services</h3>
                <p className="text-green-600 font-medium">For postgraduate applicants</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "University shortlisting & application guidance",
                  "Basic SOP & LOR templates",
                  "Visa application support", 
                  "Pre-departure guidance"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Premium Services */}
          <Card className="relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-gold hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gold text-navy px-4 py-1 font-semibold">Most Popular</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Premium Services</h3>
                <p className="text-blue-600 font-medium">For UG & competitive PG applicants</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Profile Building Support",
                  "6-8 university applications (UG & PG)",
                  "2 rounds of SOP/LOR edits",
                  "Mock interview preparation",
                  "Scholarship guidance"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                <Users className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Elite Services */}
          <Card className="relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4">
                  <Crown className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-2">Extensive Profile Building Support</h3>
                <p className="text-purple-600 font-medium">For Oxbridge, Ivy League & UG applicants</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Extensive Profile Building Support",
                  "Strategic mentorship program",
                  "10-12 university applications (UG & PG)",
                  "Unlimited SOP/LOR edits",
                  "Multiple mock interviews",
                  "Application management"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
                <Video className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Service Features */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-full mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-navy mb-2">Document Review</h4>
            <p className="text-sm text-gray-600">Expert review of all application documents</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-full mb-4">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-navy mb-2">Mock Interviews</h4>
            <p className="text-sm text-gray-600">Comprehensive interview preparation</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-full mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-navy mb-2">Visa Guidance</h4>
            <p className="text-sm text-gray-600">End-to-end visa application support</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/10 text-navy rounded-full mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-navy mb-2">Ongoing Support</h4>
            <p className="text-sm text-gray-600">Continuous guidance throughout your journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
