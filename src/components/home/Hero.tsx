
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-white -z-10" />

      {/* Animated shape */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10 animate-[pulse_8s_infinite_ease-in-out]" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10 animate-[pulse_12s_infinite_ease-in-out]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 py-12 md:py-24">
        <div className={cn(
          "space-y-8 transition-all duration-1000 transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="space-y-4">
            <div className="chip">
              New Release
            </div>
            <h1 className="headline">
              Simplify Your Calculations with ToDo Calculator!
            </h1>
            <p className="subheadline">
              ToDo Calculator is your go-to tool for hassle-free numerical analysis. From engineering to business, our calculators are designed to save you time and effort.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/sign-up" className="btn-primary">
              Join Us Today!
            </Link>
            <Link to="/calculators" className="btn-outline">
              Explore Calculators
            </Link>
          </div>

          <div className="pt-8">
            <p className="text-sm font-medium text-muted-foreground mb-4">Key Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Free and user-friendly online calculators</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Customizable calculation tools for professionals</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Designed for students and researchers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Internship and job opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "relative flex items-center justify-center transition-all duration-1000 transform",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          {/* Calculator display mockup */}
          <div className="relative w-full max-w-md glass rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            
            <div className="p-6">
              <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Result</span>
                  <span className="chip text-xs py-0.5">Calculator</span>
                </div>
                <div className="text-right text-3xl font-medium">3,845.27</div>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {['C', '÷', '×', '⌫', '7', '8', '9', '−', '4', '5', '6', '+', '1', '2', '3', '=', '%', '0', '.', '='].map((key, index) => (
                  <button
                    key={index}
                    className={cn(
                      "py-3 rounded-lg text-center text-base font-medium transition-all duration-200 hover:bg-primary/5 active:bg-primary/10",
                      key === '=' && index === 15 ? "col-span-1 bg-primary text-white hover:bg-primary/90 hover:text-white row-span-2" : "",
                      key === '=' && index === 19 ? "hidden" : "",
                      ['C', '÷', '×', '⌫', '−', '+', '%'].includes(key) 
                        ? "bg-secondary text-foreground" 
                        : "bg-white text-foreground shadow-sm"
                    )}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/4 right-1/4 w-20 h-20 rounded-full bg-primary/10 animate-[pulse_5s_infinite_ease-in-out]" />
          <div className="absolute -z-10 bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-primary/5 animate-[pulse_7s_infinite_ease-in-out]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
