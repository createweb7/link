import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team for personalized guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 mx-auto mb-4" style={{color: "#f59e0b"}} />
                <h3 className="text-xl font-semibold mb-4" style={{color: "#1e3a8a"}}>Phone</h3>
                <p className="text-gray-600">+44 20 1234 5678</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 mx-auto mb-4" style={{color: "#f59e0b"}} />
                <h3 className="text-xl font-semibold mb-4" style={{color: "#1e3a8a"}}>Email</h3>
                <p className="text-gray-600">hello@linkuble.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{color: "#f59e0b"}} />
                <h3 className="text-xl font-semibold mb-4" style={{color: "#1e3a8a"}}>Location</h3>
                <p className="text-gray-600">London, UK</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}