import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { ArrowRight } from "lucide-react";

const steps = [
  "Job Posting & Eligibility Criteria",
  "Student Registration & Application",
  "Online Assessment",
  "Group Discussion (Optional)",
  "TR/MR Interview",
  "HR Interview",
  "Final Selection & Offer Rollout",
];

const PlacementFlowchart = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === steps.length - 1) {
          setShowConfetti(true); // 🎉 Instant confetti
          setIsPaused(true); // Pause animation

          setTimeout(() => {
            setShowConfetti(false);
            setCurrentStep(0);
            setIsPaused(false);
          }, 4000); // Wait before restart

          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {showConfetti && <Confetti />}

      <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
        Campus Placement Hiring Process
      </h1>

      <div className="flex items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`w-36 h-36 flex items-center justify-center rounded-full border-4 text-center p-4 font-semibold text-lg transition-all duration-500
                ${
                  index === currentStep
                    ? index === steps.length - 1
                      ? "bg-yellow-500 text-white scale-125 shadow-glow border-yellow-700 animate-pulse" // 🏆 Gold Effect on Last Step
                      : "bg-blue-500 text-white scale-110 shadow-xl border-blue-700 animate-bounce"
                    : "bg-gray-300 text-gray-800 border-gray-400"
                }
              `}
            >
              {step}
            </div>

            {/* Forward Arrow (Except Last Step) */}
            {index < steps.length - 1 && (
              <ArrowRight className="w-10 h-10 text-gray-700 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Glow Effect for Celebration 🎉 */}
      <style>
        {`
          .shadow-glow {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 223, 0, 0.6);
          }
        `}
      </style>
    </div>
  );
};

export default PlacementFlowchart;