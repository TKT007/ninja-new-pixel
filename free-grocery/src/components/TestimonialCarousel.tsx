import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import jasminePic from "@/assets/testimonial-jasmine.jpg";
import mikePic from "@/assets/testimonial-mike.jpg";
import sarahPic from "@/assets/testimonial-sarah.jpg";

interface Testimonial {
  name: string;
  location: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jasmine R.",
    location: "Atlanta, GA",
    message: "I got milk, pasta, and fresh veggies in just 3 days!",
    image: jasminePic
  },
  {
    name: "Mike S.",
    location: "Phoenix, AZ", 
    message: "This saved me over $60 on my weekly grocery bill!",
    image: mikePic
  },
  {
    name: "Sarah L.",
    location: "Denver, CO",
    message: "The quality was amazing and delivery was so fast!",
    image: sarahPic
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-center mb-4 text-foreground">
        What Our Members Say
      </h3>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="bg-card shadow-[var(--shadow-card)] border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="text-foreground italic mb-2">
                        "{testimonial.message}"
                      </p>
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};