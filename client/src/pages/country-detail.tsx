import { useParams, Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Clock, 
  University, 
  DollarSign, 
  CreditCard, 
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Globe,
  CheckCircle
} from "lucide-react";

const countryData: Record<string, any> = {
  "united-kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Home to world-renowned universities like Oxford and Cambridge, the UK offers exceptional education quality with shorter program durations and strong research opportunities.",
    hero_image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    quick_facts: {
      duration: "1-year Master's programs",
      top_unis: "Oxford, Cambridge, Imperial College London",
      fees: "£18K-£35K + £10K living",
      visa: "Student + 2-year Graduate Route"
    },
    universities: [
      { 
        name: "University of Oxford", 
        ranking: "#2 World, #1 UK", 
        programs: ["PPE", "Medicine", "Law", "Engineering", "Computer Science", "MBA"],
        tuition: "£25K-35K",
        acceptance: "17%",
        requirements: "First-class degree, IELTS 7.5, Strong personal statement"
      },
      { 
        name: "University of Cambridge", 
        ranking: "#3 World, #2 UK", 
        programs: ["Natural Sciences", "Mathematics", "Engineering", "Computer Science", "Medicine", "MBA"],
        tuition: "£24K-34K",
        acceptance: "21%",
        requirements: "First-class degree, IELTS 7.5, Research proposal"
      },
      { 
        name: "Imperial College London", 
        ranking: "#6 World, #3 UK", 
        programs: ["Engineering", "Medicine", "Business", "Computing", "Data Science"],
        tuition: "£32K-40K",
        acceptance: "14%",
        requirements: "2:1 degree, IELTS 7.0, STEM background"
      },
      { 
        name: "London School of Economics", 
        ranking: "#45 World, #4 UK", 
        programs: ["Economics", "Politics", "Social Sciences", "Management", "Finance"],
        tuition: "£25K-40K",
        acceptance: "25%",
        requirements: "2:1 degree, IELTS 7.0, Strong quantitative background"
      },
      { 
        name: "University College London", 
        ranking: "#8 World, #5 UK", 
        programs: ["Medicine", "Law", "Architecture", "Psychology", "Engineering"],
        tuition: "£24K-38K",
        acceptance: "30%",
        requirements: "2:1 degree, IELTS 6.5-7.0, Subject-specific requirements"
      }
    ],
    popular_programs: [
      { name: "Master of Business Administration (MBA)", duration: "1 year", avg_salary: "£85K" },
      { name: "MSc Computer Science", duration: "1 year", avg_salary: "£55K" },
      { name: "MSc Data Science", duration: "1 year", avg_salary: "£50K" },
      { name: "MSc Finance", duration: "1 year", avg_salary: "£65K" },
      { name: "MSc Engineering", duration: "1 year", avg_salary: "£48K" },
      { name: "LLM (Master of Laws)", duration: "1 year", avg_salary: "£60K" }
    ],
    admission_requirements: {
      undergraduate: ["A-levels AAA-A*A*A*", "IELTS 6.0-7.0", "Personal statement", "Academic references", "UCAS application"],
      postgraduate: ["Bachelor's degree (2:1 or above)", "IELTS 6.5-7.5", "Statement of purpose", "2 Academic references", "CV/Resume"]
    },
    living_costs: {
      london: {
        accommodation: "£600-1200/month",
        food: "£250-400/month", 
        transport: "£150-200/month",
        miscellaneous: "£200-350/month",
        total: "£1200-2150/month"
      },
      outside_london: {
        accommodation: "£400-800/month",
        food: "£200-300/month", 
        transport: "£50-100/month",
        miscellaneous: "£150-250/month",
        total: "£800-1450/month"
      }
    },
    work_opportunities: {
      during_study: "20 hours/week during term, unlimited during holidays",
      after_graduation: "2-year Graduate Route visa for all degree levels",
      popular_sectors: ["Financial Services", "Technology", "Healthcare", "Research", "Consulting", "Energy"],
      avg_starting_salary: "£25K-45K depending on field and location"
    },
    application_timeline: {
      undergraduate: "Apply by January 15 via UCAS for most courses",
      postgraduate: "Applications open October, deadlines vary by university (Jan-July)",
      intakes: "September (main), January (limited programs)"
    },
    scholarships: [
      { name: "Chevening Scholarships", value: "Full funding", eligibility: "Leadership potential, academic excellence" },
      { name: "Commonwealth Scholarships", value: "Full funding", eligibility: "Commonwealth citizens" },
      { name: "University-specific scholarships", value: "£5K-25K", eligibility: "Academic merit, need-based" },
      { name: "GREAT Scholarships", value: "£10K", eligibility: "Students from specific countries" }
    ]
  }
};

export default function CountryDetail() {
  const { country } = useParams();
  const data = countryData[country as string];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Country Not Found</h1>
          <Link href="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${data.hero_image})`}}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
          <div className="flex items-center mb-6">
            <span className="text-6xl mr-4">{data.flag}</span>
            <h1 className="text-5xl font-bold">Study in {data.name}</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                <h3 className="font-semibold mb-2" style={{color: "#1e3a8a"}}>Duration</h3>
                <p className="text-gray-600 text-sm">{data.quick_facts.duration}</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0">
              <CardContent className="p-6">
                <University className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                <h3 className="font-semibold mb-2" style={{color: "#1e3a8a"}}>Top Universities</h3>
                <p className="text-gray-600 text-sm">{data.quick_facts.top_unis}</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                <h3 className="font-semibold mb-2" style={{color: "#1e3a8a"}}>Fees</h3>
                <p className="text-gray-600 text-sm">{data.quick_facts.fees}</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0">
              <CardContent className="p-6">
                <CreditCard className="w-8 h-8 mx-auto mb-3" style={{color: "#f59e0b"}} />
                <h3 className="font-semibold mb-2" style={{color: "#1e3a8a"}}>Visa</h3>
                <p className="text-gray-600 text-sm">{data.quick_facts.visa}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: "#1e3a8a"}}>
            Top Universities in {data.name}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {data.universities.map((uni: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span style={{color: "#1e3a8a"}}>{uni.name}</span>
                    <Badge style={{backgroundColor: "#f59e0b", color: "#1e3a8a"}}>
                      {uni.ranking}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Tuition:</span>
                      <div className="text-gray-600">{uni.tuition}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Acceptance Rate:</span>
                      <div className="text-gray-600">{uni.acceptance}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Popular Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.map((program: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-700 text-sm">Requirements:</span>
                    <p className="text-gray-600 text-sm mt-1">{uni.requirements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: "#1e3a8a"}}>
            Popular Programs & Career Outcomes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.popular_programs?.map((program: any, index: number) => (
              <Card key={index} className="border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{color: "#1e3a8a"}}>
                    {program.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Starting Salary:</span>
                      <span className="font-medium" style={{color: "#f59e0b"}}>{program.avg_salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{color: "#1e3a8a"}}>
            Admission Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="flex items-center" style={{color: "#1e3a8a"}}>
                  <GraduationCap className="mr-2 h-6 w-6" />
                  Undergraduate Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.admission_requirements.undergraduate.map((req: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="flex items-center" style={{color: "#1e3a8a"}}>
                  <BookOpen className="mr-2 h-6 w-6" />
                  Postgraduate Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.admission_requirements.postgraduate.map((req: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance to navigate the application process and secure admission to top universities
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
                <Award className="mr-2 h-5 w-5" />
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