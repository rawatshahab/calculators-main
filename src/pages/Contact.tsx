
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const faqs = [
  {
    question: "How do I report a bug or calculation error?",
    answer: "If you encounter a bug or calculation error, please send us an email at support@todocalculator.com with details about the issue, including the calculator used and the inputs provided."
  },
  {
    question: "Are the calculators free to use?",
    answer: "Yes, all of our standard calculators are completely free to use. We may offer premium calculators with advanced features in the future, but our core tools will always remain free."
  },
  {
    question: "Can I suggest a new calculator?",
    answer: "Absolutely! We welcome suggestions for new calculators. Please use our contact form or email us at ideas@todocalculator.com with your suggestion."
  },
  {
    question: "Do you offer API access to your calculators?",
    answer: "We are currently developing an API for businesses and developers who want to integrate our calculators into their applications. Contact us for more information."
  },
  {
    question: "How accurate are your calculators?",
    answer: "Our calculators are designed to provide high accuracy results. We regularly verify our formulas and algorithms against industry standards to ensure reliability."
  }
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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

    const faqObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFaqVisible(true);
          faqObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (faqRef.current) {
      faqObserver.observe(faqRef.current);
    }

    return () => {
      heroObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, message });
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary/10 px-6 md:px-10 py-4">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <div
          ref={heroRef}
          className={cn(
            "relative py-20 px-6 md:px-10 overflow-hidden transition-all duration-1000",
            isHeroVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="chip mb-4">Get In Touch</div>
                <h1 className="headline mb-6">
                  Have Questions? <br />
                  Reach Out to Us!
                </h1>
                <p className="subheadline mb-8">
                  Whether you have a question about our calculators, feedback on our services, or want to join our team, we'd love to hear from you.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92893C18.1425 4.00043 17.04 3.26392 15.8269 2.7614C14.6138 2.25889 13.3132 2 12 2C10.6868 2 9.38647 2.25889 8.1731 2.7614C6.95996 3.26392 5.85742 4.00043 4.92893 4.92893C3.26633 6.59153 2.25904 8.795 2.0383 11.1537M22 12C22 13.3132 21.7413 14.6135 21.2388 15.8269C20.7362 17.04 19.9997 18.1426 19.0711 19.0711C18.1425 19.9996 17.04 20.7361 15.8269 21.2386C14.6138 21.7411 13.3132 22 12 22C7.28595 22 3.2644 18.7333 2.23498 14.25M22 12C22 16.714 18.7333 20.7355 14.25 21.765M2 15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18C5.79565 18 6.55871 17.6839 7.12132 17.1213C7.68393 16.5587 8 15.7956 8 15C8 14.2044 7.68393 13.4413 7.12132 12.8787C6.55871 12.3161 5.79565 12 5 12C4.20435 12 3.44129 12.3161 2.87868 12.8787C2.31607 13.4413 2 14.2044 2 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@todocalculator.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10C20 14.4183 16.4183 18 12 18M20 10C20 5.58172 16.4183 2 12 2M20 10H22M12 18C7.58172 18 4 14.4183 4 10M12 18V20M4 10C4 5.58172 7.58172 2 12 2M4 10H2M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Social Media</h3>
                      <p className="text-muted-foreground">@todocalculator</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 3.99999C22 3.99999 21.3 6.09999 20 7.39999C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.59999 3 4.99999C5.2 7.59999 8.6 9.09999 12 8.99999C11.1 4.79999 16 1.79999 19 5.19999C20.1 5.19999 22 3.99999 22 3.99999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8V8.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[150px]"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="default" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          ref={faqRef}
          className={cn(
            "py-20 px-6 md:px-10 bg-secondary/10 transition-all duration-1000 transform",
            isFaqVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to the most common questions about our calculators and services.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-muted/20 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "transform transition-transform",
                        expandedFaq === index ? "rotate-180" : ""
                      )}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div 
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-300",
                      expandedFaq === index ? "py-4 max-h-40" : "max-h-0 py-0"
                    )}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
