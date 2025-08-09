import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Quote } from "lucide-react";

const testimonials = [
  {
    id: "hU4IVVm98po",
    url: "https://youtu.be/hU4IVVm98po?si=PVHCs4Nsn1A1H9zS",
    title: "Priya's Journey to Oxford",
    description: "Linkuble's expert guidance helped me secure admission to Oxford University with a full scholarship. Their personalized approach made all the difference.",
    student: {
      name: "Priya Sharma",
      university: "Oxford University",
      program: "PPE"
    },
    thumbnail: "https://img.youtube.com/vi/hU4IVVm98po/maxresdefault.jpg"
  },
  {
    id: "-7Pr0ZV5Zxc", 
    url: "https://youtu.be/-7Pr0ZV5Zxc?si=FFfGbmv4Nh2EWRzN",
    title: "Rahul's MIT Success",
    description: "From average scores to MIT admission - Linkuble transformed my profile and helped me achieve what seemed impossible.",
    student: {
      name: "Rahul Patel", 
      university: "MIT",
      program: "Computer Science"
    },
    thumbnail: "https://img.youtube.com/vi/-7Pr0ZV5Zxc/maxresdefault.jpg"
  },
  {
    id: "KIINhV8fZgk",
    url: "https://youtu.be/KIINhV8fZgk?si=sqloQS7Ti1fGrIHF", 
    title: "Anjali's Cambridge Dream",
    description: "The structured approach and continuous support from Linkuble made my Cambridge application journey smooth and successful.",
    student: {
      name: "Anjali Mehta",
      university: "Cambridge",
      program: "Engineering"
    },
    thumbnail: "https://img.youtube.com/vi/KIINhV8fZgk/maxresdefault.jpg"
  }
];

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-shadow group">
            <CardContent className="p-6">
              <div className="relative mb-4 cursor-pointer" onClick={() => openVideoModal(testimonial.id)}>
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.title}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to a placeholder if YouTube thumbnail fails
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="lg"
                    className="bg-gold text-navy hover:bg-gold-light rounded-full w-16 h-16 p-0"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge className="bg-red-600 text-white">
                    <Play className="w-3 h-3 mr-1" />
                    VIDEO
                  </Badge>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-navy mb-2">{testimonial.title}</h4>
              
              <div className="flex items-start mb-4">
                <Quote className="w-4 h-4 text-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm italic">{testimonial.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-navy">{testimonial.student.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.student.university}, {testimonial.student.program}</div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(testimonial.url, '_blank')}
                  className="text-navy border-navy hover:bg-navy hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-gold z-10 text-2xl font-bold"
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Student Testimonial"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
