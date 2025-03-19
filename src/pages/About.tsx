
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isChooseUsVisible, setIsChooseUsVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const chooseUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
          heroObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMissionVisible(true);
          missionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const chooseUsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChooseUsVisible(true);
          chooseUsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (missionRef.current) {
      missionObserver.observe(missionRef.current);
    }
    if (chooseUsRef.current) {
      chooseUsObserver.observe(chooseUsRef.current);
    }

    return () => {
      heroObserver.disconnect();
      missionObserver.disconnect();
      chooseUsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className={cn(
            "relative py-20 px-6 md:px-10 overflow-hidden transition-all duration-1000",
            isHeroVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="chip mb-4">About Us</div>
                <h1 className="headline mb-6">
                  Our Story
                </h1>
                <p className="subheadline mb-8">
                  ToDo Calculator was created with a mission to simplify complex calculations for professionals and students. Our tools are designed to help engineers, business analysts, and researchers perform quick and accurate calculations effortlessly.
                </p>
                <Button variant="default">
                  Learn More
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Team working together"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div
          ref={missionRef}
          className={cn(
            "py-20 px-6 md:px-10 bg-secondary/10 transition-all duration-1000 transform",
            isMissionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To provide an intuitive platform for seamless numerical analysis, making complex calculations accessible to everyone regardless of their technical background.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create an ecosystem where users can develop and share custom calculators, fostering a community of innovators committed to solving complex problems through simplified calculations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          ref={chooseUsRef}
          className={cn(
            "py-20 px-6 md:px-10 transition-all duration-1000 transform",
            isChooseUsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're dedicated to making complex calculations simple, intuitive, and accessible for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">User-Friendly Interface</h3>
                <p className="text-muted-foreground">
                  Our calculators are designed with simplicity in mind, making them accessible to users of all technical backgrounds.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Accuracy and Efficiency</h3>
                <p className="text-muted-foreground">
                  Our tools are rigorously tested to ensure accurate results every time, saving you time and effort.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Constantly Evolving Tools</h3>
                <p className="text-muted-foreground">
                  We continuously update and expand our calculator library based on user feedback and emerging needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
