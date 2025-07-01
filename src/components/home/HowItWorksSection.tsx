
import { Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account and build your profile with the skills you can offer."
  },
  {
    number: "02",
    title: "Explore or Teach",
    description: "Browse available skills or post your own to start teaching others."
  },
  {
    number: "03",
    title: "Connect",
    description: "Request services or respond to requests through our real-time chat system."
  },
  {
    number: "04",
    title: "Exchange Hours",
    description: "Complete the skill exchange and earn or spend hours in your time bank."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Our platform makes it easy to exchange skills and knowledge with others in a time-based economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-16 w-[calc(100%-4rem)] h-0.5">
                  <div className="w-full h-full bg-primary/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Start Trading Time Today</h3>
              <p className="text-muted-foreground mb-6">
                Join our community and discover the power of skill sharing without monetary exchange.
              </p>
              
              <ul className="space-y-2">
                {[
                  "No money needed - just trade your time",
                  "Learn from experts in various fields",
                  "Share your knowledge and help others",
                  "Build meaningful connections"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary/20 rounded-full p-0.5">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="aspect-square max-w-xs mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full animate-float"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-secondary/20 via-accent/20 to-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-8 bg-gradient-to-bl from-accent/20 via-primary/20 to-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">1:1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
