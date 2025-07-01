import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="container px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Time is the new currency – <span className="text-primary">share, save, and grow your community.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            HourSwap is a platform where neighbors exchange skills and services using time as currency, strengthening community connections through shared hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/signup">
              <Button className="w-full sm:w-auto">
                Sign Up
              </Button>
            </Link>
            <Link to="/explore">
              <Button className="w-full sm:w-auto">
                Explore Skills
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
