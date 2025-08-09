import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-gold mb-4">Linkuble</div>
            <p className="text-gray-300 mb-6">
              Part of Lurnable Education Group - Your trusted partner for global education since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              {[
                { name: "United Kingdom", href: "/destinations/united-kingdom" },
                { name: "United States", href: "/destinations/united-states" }, 
                { name: "Canada", href: "/destinations/canada" },
                { name: "Australia", href: "/destinations/australia" },
                { name: "Germany", href: "/destinations/germany" },
                { name: "Singapore", href: "/destinations/singapore" }
              ].map((destination) => (
                <li key={destination.name}>
                  <Link href={destination.href} className="text-gray-300 hover:text-gold transition-colors">
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Free PG Services",
                "Premium Services",
                "Elite Services",
                "Test Preparation",
                "Visa Guidance",
                "Scholarship Support"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gold mr-3" />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gold mr-3" />
                <span className="text-gray-300">hello@linkuble.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gold mr-3 mt-1" />
                <span className="text-gray-300">
                  London, UK<br />
                  Regional offices worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Linkutable - Lurnable Education Group. All rights reserved. | 
            <a href="#" className="hover:text-gold transition-colors ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-gold transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
