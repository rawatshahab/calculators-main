import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const calculators = [
  {
    category: "Engineering",
    items: [
      {
        title: "Physics Calculator",
        description: "Calculate velocity, acceleration, force, and other physics-related parameters.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 6V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Mechanical Engineering Tools",
        description: "Calculate stress, strain, torque, and other mechanical parameters.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7 6.3C14.3 6.7 14.3 7.3 14.7 7.7L16.3 9.3L7.70001 17.9C7.30001 18.3 7.30001 18.9 7.70001 19.3C8.10001 19.7 8.70001 19.7 9.10001 19.3L17.7 10.7L19.3 12.3C19.7 12.7 20.3 12.7 20.7 12.3C21.1 11.9 21.1 11.3 20.7 10.9L15.1 5.3C14.7 4.9 14.1 4.9 13.7 5.3L14.7 6.3Z" fill="currentColor" />
            <path d="M9.9 7C9.5 6.6 8.9 6.6 8.5 7C8.1 7.4 8.1 8 8.5 8.4L15.6 15.5C16 15.9 16.6 15.9 17 15.5C17.4 15.1 17.4 14.5 17 14.1L9.9 7Z" fill="currentColor" />
            <path d="M10.1 11.8C10.1 11.2 9.60001 10.7 9.00001 10.7C8.40001 10.7 7.90001 11.2 7.90001 11.8V12.2C7.90001 12.8 8.40001 13.3 9.00001 13.3C9.60001 13.3 10.1 12.8 10.1 12.2V11.8Z" fill="currentColor" />
            <path d="M4 4L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Civil Engineering Tools",
        description: "Beam analysis, structural design, and more for civil engineers.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: true
      }
    ]
  },
  {
    category: "Finance",
    items: [
      {
        title: "EMI Calculator",
        description: "Calculate EMI payments for loans based on principal, interest rate, and tenure.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Tax Calculator",
        description: "Calculate income tax, capital gains tax, and other taxes based on your income.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Investment Calculator",
        description: "Plan your investments and calculate returns based on different strategies.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 14L12 9L16 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: true
      }
    ]
  },
  {
    category: "Scientific & Statistical",
    items: [
      {
        title: "Scientific Calculator",
        description: "Perform complex mathematical calculations with this advanced scientific calculator.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Statistical Tools",
        description: "Calculate mean, median, standard deviation, and other statistical parameters.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12L10 18L8 16M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: false
      },
      {
        title: "Data Analysis Tools",
        description: "Analyze data sets with regression analysis, hypothesis testing, and other techniques.",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21H3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 8L13 13L9 9L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        comingSoon: true
      }
    ]
  }
];

const Calculators = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    const categoryObservers: IntersectionObserver[] = [];

    calculators.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCategories(prev => [...prev, index]);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (categoryRefs.current[index]) {
        observer.observe(categoryRefs.current[index]!);
        categoryObservers.push(observer);
      }
    });

    return () => {
      heroObserver.disconnect();
      categoryObservers.forEach(observer => observer.disconnect());
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

          <div className="max-w-7xl mx-auto text-center">
            <div className="chip mb-4">Our Tools</div>
            <h1 className="headline max-w-4xl mx-auto mb-6">
              Explore Our Range of Calculators
            </h1>
            <p className="subheadline mx-auto">
              Discover our powerful and easy-to-use calculators tailored for various fields. From engineering to finance, we've got you covered with precision tools.
            </p>
          </div>
        </div>

        {/* Calculators Sections */}
        {calculators.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            ref={el => categoryRefs.current[categoryIndex] = el}
            className={cn(
              "py-20 px-6 md:px-10",
              categoryIndex % 2 === 0 ? "bg-white" : "bg-secondary/30",
              "transition-all duration-1000 transform",
              visibleCategories.includes(categoryIndex) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">{category.category} Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((calculator, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className={cn(
                      "transition-all duration-500 transform",
                      visibleCategories.includes(categoryIndex) ? "animate-fade-in" : "opacity-0"
                    )}
                    style={{
                      animationDelay: `${itemIndex * 100 + 200}ms`,
                      animationFillMode: "both"
                    }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {calculator.icon}
                      </div>
                      <CardTitle>{calculator.title}</CardTitle>
                      <CardDescription>{calculator.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      {calculator.comingSoon ? (
                        <span className="text-sm font-medium text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                          Coming Soon
                        </span>
                      ) : (
                        <Button variant="default" size="sm">
                          Try Now
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Custom Calculator Section */}
        <div className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Calculator?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see what you're looking for? Let us know about your specific calculation needs, and we'll work to develop a custom solution for you.
            </p>
            <Button variant="default" size="lg">
              Request a Custom Calculator
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculators;
