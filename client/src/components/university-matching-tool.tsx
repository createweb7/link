import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Loader2, Search, GraduationCap, MapPin, Trophy } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const universityMatchSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  academicLevel: z.string().min(1, "Please select your academic level"),
  preferredCountry: z.string().min(1, "Please select your preferred country"),
  fieldOfStudy: z.string().min(1, "Please select your field of study"),
  currentScore: z.string().min(1, "Please enter your academic score"),
});

type UniversityMatchForm = z.infer<typeof universityMatchSchema>;

export default function UniversityMatchingTool() {
  const [matchResults, setMatchResults] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<UniversityMatchForm>({
    resolver: zodResolver(universityMatchSchema),
    defaultValues: {
      email: "",
      academicLevel: "",
      preferredCountry: "",
      fieldOfStudy: "",
      currentScore: "",
    },
  });

  const matchMutation = useMutation({
    mutationFn: async (data: UniversityMatchForm) => {
      const response = await apiRequest("POST", "/api/university-matches", data);
      return response.json();
    },
    onSuccess: (data) => {
      setMatchResults(data);
      toast({
        title: "University matches found!",
        description: "We've found the perfect universities for your profile.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to find university matches. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: UniversityMatchForm) => {
    matchMutation.mutate(data);
  };

  if (matchResults) {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-2xl">
        <CardHeader className="text-white" style={{background: "linear-gradient(to right, #1e3a8a, #2563eb)"}}>
          <CardTitle className="text-2xl flex items-center">
            <Trophy className="mr-2 h-6 w-6" />
            Your University Matches
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {matchResults.matches.map((university: any, index: number) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-gold transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">{university.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          Global Ranking #{university.ranking}
                        </span>
                        <span>{university.fees}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {university.admissionChance}%
                      </div>
                      <div className="text-sm text-gray-600">Admission Chance</div>
                    </div>
                  </div>
                  
                  <Progress value={university.admissionChance} className="mb-4" />
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Requirements:</span>
                      <div className="text-gray-600">{university.requirements}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Potential Scholarship:</span>
                      <div className="text-green-600 font-medium">{university.scholarships}</div>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm" className="bg-navy hover:bg-navy-dark">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setMatchResults(null)} 
              variant="outline"
              className="mr-4"
            >
              Search Again
            </Button>
            <Button className="bg-gold hover:bg-gold-light text-navy">
              Book Consultation for These Universities
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader className="text-white" style={{background: "linear-gradient(to right, #1e3a8a, #2563eb)"}}>
        <CardTitle className="text-2xl flex items-center">
          <GraduationCap className="mr-2 h-6 w-6" />
          University Matching Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              name="academicLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate (Bachelor's)</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate (Master's)</SelectItem>
                      <SelectItem value="doctoral">Doctoral (PhD)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Study Destination</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="Singapore">Singapore</SelectItem>
                      <SelectItem value="Netherlands">Netherlands</SelectItem>
                      <SelectItem value="New Zealand">New Zealand</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fieldOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Study</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Field" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering & Technology</SelectItem>
                      <SelectItem value="business">Business & Management</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="medicine">Medicine & Health</SelectItem>
                      <SelectItem value="social-sciences">Social Sciences</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                      <SelectItem value="sciences">Natural Sciences</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Academic Score</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 85% or 3.5 GPA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full text-white py-3 text-lg"
              style={{backgroundColor: "#1e3a8a"}}
              disabled={matchMutation.isPending}
            >
              {matchMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Finding Your Matches...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Get My University Matches
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Get personalized university recommendations with admission probability scores and specific program matches based on your academic profile
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
