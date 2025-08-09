import { Button } from "@/components/ui/button";
import UniversityMatchingTool from "@/components/university-matching-tool"; 
import { GraduationCap, Play, Users, Target, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-white min-h-screen flex items-center" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to{" "}
                <span style={{color: "#f59e0b"}}>World's Top Universities</span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                Join 10,000+ students who secured admissions to Oxbridge, Ivy League, and elite universities worldwide with our expert guidance and proven strategies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold px-8 py-4"
                style={{backgroundColor: "#f59e0b", color: "#1e3a8a"}}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy text-lg font-semibold px-8 py-4"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" style={{color: "#f59e0b"}} />
                  <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>500+</div>
                </div>
                <div className="text-blue-200 text-sm">University Partners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 mr-2" style={{color: "#f59e0b"}} />
                  <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>98%</div>
                </div>
                <div className="text-blue-200 text-sm">Admission Success</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 mr-2" style={{color: "#f59e0b"}} />
                  <div className="text-3xl font-bold" style={{color: "#f59e0b"}}>15+</div>
                </div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - University Matching Tool */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative">
              <UniversityMatchingTool />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
