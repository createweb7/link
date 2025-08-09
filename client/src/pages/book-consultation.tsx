import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Calendar, CheckCircle, Clock, GraduationCap } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select your preferred date"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().optional(),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

export default function BookConsultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      serviceType: "",
      message: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: ConsultationForm) => {
      const response = await apiRequest("POST", "/api/consultation-bookings", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Consultation booked successfully!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ConsultationForm) => {
    bookingMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: "#16a34a"}}>
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-4" style={{color: "#1e3a8a"}}>
                  Consultation Booked Successfully!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for booking a consultation with us. Our expert team will contact you within 24 hours to confirm your appointment details.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                  <h3 className="font-semibold mb-2" style={{color: "#1e3a8a"}}>What happens next?</h3>
                  <ul className="text-sm text-gray-700 space-y-1 text-left">
                    <li>• You'll receive a confirmation email within 1 hour</li>
                    <li>• Our counselor will call you to schedule the meeting</li>
                    <li>• We'll send you a preparation guide</li>
                    <li>• Your personalized consultation session</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => window.location.href = "/"}
                  className="text-white px-8 py-3"
                  style={{backgroundColor: "#1e3a8a"}}
                >
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white py-20" style={{background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get personalized guidance from our expert counselors to plan your study abroad journey
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader style={{background: "linear-gradient(to right, #1e3a8a, #2563eb)"}} className="text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Schedule Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+44 12345 67890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="free-pg">Free PG Services</SelectItem>
                              <SelectItem value="premium">Premium Services</SelectItem>
                              <SelectItem value="elite">Elite Services</SelectItem>
                              <SelectItem value="general">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your goals and any specific questions you have..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full text-white py-3 text-lg"
                      style={{backgroundColor: "#1e3a8a"}}
                      disabled={bookingMutation.isPending}
                    >
                      {bookingMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Booking Consultation...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Free Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{color: "#1e3a8a"}}>
                  What to Expect
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: GraduationCap,
                      title: "Personalized Assessment",
                      description: "Complete evaluation of your academic background and career goals"
                    },
                    {
                      icon: Clock,
                      title: "45-Minute Session",
                      description: "Comprehensive discussion about your study abroad plans and options"
                    },
                    {
                      icon: CheckCircle,
                      title: "Expert Guidance",
                      description: "Professional advice from experienced education consultants"
                    }
                  ].map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: "#f59e0b"}}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2" style={{color: "#1e3a8a"}}>
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Card className="bg-blue-50 border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3" style={{color: "#1e3a8a"}}>
                    Completely Free & No Obligations
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Our initial consultation is completely free with no strings attached. 
                    We'll provide valuable insights regardless of whether you choose to proceed with our services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}