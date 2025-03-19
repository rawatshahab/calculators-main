
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const jobListings = [
  {
    category: "Development",
    positions: [
      {
        title: "Physics Tool Developer",
        type: "Internship",
        location: "Remote",
        description: "Develop interactive physics calculators and simulation tools for our platform.",
        requirements: ["Knowledge of physics principles", "Basic programming skills", "Experience with JavaScript or TypeScript"],
      },
      {
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        description: "Create responsive and user-friendly interfaces for our calculator tools.",
        requirements: ["Proficiency in React", "Experience with Tailwind CSS", "Strong UI/UX sensibilities"],
      },
      {
        title: "Chemical Engineering Tool Developer",
        type: "Internship",
        location: "Remote",
        description: "Create calculators for chemical engineering processes and reactions.",
        requirements: ["Chemical engineering background", "Basic web development skills", "Attention to detail"],
      }
    ]
  },
  {
    category: "Business & Management",
    positions: [
      {
        title: "Business Development Intern",
        type: "Internship",
        location: "Hybrid",
        description: "Help grow our user base and develop partnerships with educational institutions.",
        requirements: ["Business or marketing background", "Excellent communication skills", "Self-motivated"],
      },
      {
        title: "Team Management Intern",
        type: "Internship",
        location: "Remote",
        description: "Coordinate developers and ensure timely delivery of new calculator tools.",
        requirements: ["Leadership skills", "Organizational abilities", "Basic understanding of web development"],
      }
    ]
  }
];

const benefits = [
  {
    title: "Remote Work",
    description: "Flexible work-from-home opportunities for all positions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22V12H15V22M2 9V22H22V9M2 9L12 2L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Hands-on Experience",
    description: "Work on live projects that impact thousands of users.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 11.5V14.5M12 9V16.5M17 11.5V14.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Skill Development",
    description: "Improve your technical and soft skills with our team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L18 20L22 16M12 15C8.68629 15 6 12.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 9.38448 17.9544 9.7592 17.8682 10.1214M13.5 21H6C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C6.94685 15 7.81846 15.3765 8.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Mentorship",
    description: "Learn from experienced professionals in the field.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8H19M19 8H21M19 8V6M19 8V10M12 21V16C12 15.4477 12.4477 15 13 15H21M12 21H5.2C3.9874 21 3 20.0126 3 18.8V16.5C3 15.9477 3.44772 15.5 4 15.5H7.5M12 21H14.5M7.5 15.5V11M7.5 15.5L14.5 21M7.5 11C8.74264 11 9.75 9.99264 9.75 8.75C9.75 7.50736 8.74264 6.5 7.5 6.5C6.25736 6.5 5.25 7.50736 5.25 8.75C5.25 9.99264 6.25736 11 7.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isJobsVisible, setIsJobsVisible] = useState<number[]>([]);
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const jobsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

    const jobObservers: IntersectionObserver[] = [];

    jobListings.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsJobsVisible(prev => [...prev, index]);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (jobsRefs.current[index]) {
        observer.observe(jobsRefs.current[index]!);
        jobObservers.push(observer);
      }
    });

    const benefitsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBenefitsVisible(true);
          benefitsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      benefitsObserver.observe(benefitsRef.current);
    }

    return () => {
      heroObserver.disconnect();
      jobObservers.forEach(observer => observer.disconnect());
      benefitsObserver.disconnect();
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
            <div className="chip mb-4">Careers</div>
            <h1 className="headline max-w-4xl mx-auto mb-6">
              Join Our Growing Team
            </h1>
            <p className="subheadline mx-auto mb-8">
              Explore exciting internship and job opportunities with ToDo Calculator. Be part of our mission to simplify complex calculations for everyone.
            </p>
            <Button variant="default" size="lg">
              View Open Positions
            </Button>
          </div>
        </div>

        {/* Job Listings */}
        {jobListings.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            ref={el => jobsRefs.current[categoryIndex] = el}
            className={cn(
              "py-20 px-6 md:px-10",
              categoryIndex % 2 === 0 ? "bg-white" : "bg-secondary/20",
              "transition-all duration-1000 transform",
              isJobsVisible.includes(categoryIndex) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">{category.category} Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.positions.map((job, jobIndex) => (
                  <Card key={jobIndex} className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle>{job.title}</CardTitle>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <CardDescription>
                        <div className="flex items-center text-sm mt-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {job.location}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{job.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Benefits Section */}
        <div
          ref={benefitsRef}
          className={cn(
            "py-20 px-6 md:px-10 bg-primary/5 transition-all duration-1000 transform",
            isBenefitsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join a dynamic team passionate about making calculations accessible to everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 px-6 md:px-10 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to help us improve our calculator platform. Apply today and become part of our journey!
            </p>
            <Button variant="default" size="lg">
              View All Positions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
