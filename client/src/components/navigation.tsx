import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "Study Destinations", href: "/destinations" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-navy" />
            <div className="text-2xl font-bold text-navy">
              Linkuble
              <span className="text-gold text-sm font-normal ml-2">by Lurnable</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-navy transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book-consultation">
              <Button className="bg-gold hover:bg-gold-light text-navy font-semibold px-6">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg text-gray-700 hover:text-navy transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/book-consultation">
                    <Button className="bg-gold hover:bg-gold-light text-navy font-semibold mt-4">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
