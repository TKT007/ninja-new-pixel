import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Do you live in the US?",
    options: ["Yes", "No"]
  },
  {
    id: 2,
    text: "How often do you buy groceries?",
    options: ["Once a week", "Twice a week", "Not sure"]
  },
  {
    id: 3,
    text: "Would you like to receive your free grocery package by mail or pick-up?",
    options: ["Mail delivery", "Local pick-up", "Not sure"]
  }
];

export const GroceryQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleClaim = () => {
    // Redirect to Google
    window.open("https://fb.track-conv.shop/click", "_blank");
  };

  if (isCompleted) {
    return (
      <Card className="w-full max-w-lg mx-auto bg-card shadow-[var(--shadow-card)] border-0">
        <CardContent className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            ✅ Congratulations!
          </h2>
          <p className="text-muted-foreground mb-6">
            You qualify for a Free Grocery Package. Click below to claim your reward.
          </p>
          <Button 
            onClick={handleClaim}
            variant="default"
            className="w-full font-semibold py-3 px-6 rounded-xl shadow-[var(--shadow-soft)] transition-all duration-300 transform hover:scale-105"
          >
            Claim My Free Groceries
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentStep - 1];
  const progress = (currentStep / questions.length) * 100;

  return (
    <Card className="w-full max-w-lg mx-auto bg-card shadow-[var(--shadow-card)] border-0">
      <CardContent className="p-8">
        {/* Progress Indicator */}
        <div className="mb-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Step {currentStep} of {questions.length}
          </p>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {currentQuestion.text}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option)}
              variant="outline"
              className="w-full py-4 px-6 text-left justify-start rounded-xl border-2 border-border hover:border-primary hover:bg-accent transition-all duration-300 text-foreground font-medium"
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
