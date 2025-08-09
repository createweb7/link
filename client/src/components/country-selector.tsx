import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  University, 
  DollarSign, 
  CreditCard, 
  MapPin,
  ArrowRight,
  GraduationCap
} from "lucide-react";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧", 
    duration: "1-year Master's programs",
    topUnis: "Oxford, Cambridge, Imperial College",
    fees: "£18K-£35K + £10K living",
    visa: "Student + 2-year Graduate Route",
    benefits: "Shorter program duration, rich academic heritage, strong alumni networks"
  },
  {
    name: "United States",
    flag: "🇺🇸",
    duration: "2-year Master's programs", 
    topUnis: "Harvard, MIT, Stanford",
    fees: "$30K-$80K + $15K living",
    visa: "F1 + Optional Practical Training",
    benefits: "World's top universities, innovation hub, diverse programs, industry connections"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    duration: "1-2 year programs",
    topUnis: "University of Toronto, UBC, McGill",
    fees: "CAD 25K-45K + CAD 12K living",
    visa: "Study Permit + PGWP",
    benefits: "Easy PR pathway, affordable education, safe environment, multicultural society"
  },
  {
    name: "Australia", 
    flag: "🇦🇺",
    duration: "1.5-2 year programs",
    topUnis: "University of Melbourne, ANU, UNSW",
    fees: "AUD 35K-50K + AUD 15K living", 
    visa: "Student Visa + Temporary Graduate",
    benefits: "Excellent work-life balance, strong job market, beautiful environment"
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    duration: "2-year Master's programs",
    topUnis: "TUM, Heidelberg, Humboldt",
    fees: "€0-€20K (many free programs)",
    visa: "Student + 18-month job search",
    benefits: "Tuition-free education, strong economy, engineering excellence"
  },
  {
    name: "Singapore",
    flag: "🇸🇬", 
    duration: "1-1.5 year programs",
    topUnis: "NUS, NTU, SMU",
    fees: "S$20K-$50K + living",
    visa: "Student + work opportunities",
    benefits: "Asian financial hub, multicultural environment, strategic location"
  }
];

export default function CountrySelector() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Choose Your Dream Study Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore study opportunities across the globe with our comprehensive country guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{country.name}</h3>
                    <Badge variant="outline" className="mt-1 text-xs">Popular Destination</Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <p className="flex items-start">
                    <Clock className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> {country.duration}</span>
                  </p>
                  <p className="flex items-start">
                    <University className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Top Unis:</strong> {country.topUnis}</span>
                  </p>
                  <p className="flex items-start">
                    <DollarSign className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Fees:</strong> {country.fees}</span>
                  </p>
                  <p className="flex items-start">
                    <CreditCard className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Visa:</strong> {country.visa}</span>
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-navy">
                    <strong>Key Benefits:</strong> {country.benefits}
                  </p>
                </div>

                <Link href={`/destinations/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="w-full mt-4 bg-navy hover:bg-navy-dark text-white transition-colors">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    View Complete Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/destinations">
            <Button className="bg-gold hover:bg-gold-light text-navy px-8 py-3 text-lg font-semibold">
              <MapPin className="mr-2 h-5 w-5" />
              View All Study Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}