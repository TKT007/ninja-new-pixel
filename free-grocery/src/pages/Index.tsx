import { GroceryQuiz } from "@/components/GroceryQuiz";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustIcons } from "@/components/TrustIcons";
import elderlyManGroceries from "@/assets/elderly-man-groceries.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Do You Qualify for Free Groceries?
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-6">
            Answer 3 quick questions to find out.
          </p>
          <div className="max-w-md mx-auto">
            <img 
              src={elderlyManGroceries} 
              alt="Elderly man with grocery bag" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Trust Icons */}
        <TrustIcons />

        {/* Quiz Section */}
        <div className="mb-12">
          <GroceryQuiz />
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This offer is for informational purposes only. 
                Eligibility requirements may apply. We are not affiliated with any government programs.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
