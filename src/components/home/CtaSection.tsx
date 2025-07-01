import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-lg border shadow-sm p-8 md:p-12 hero-gradient">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Exchanging Skills?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of others who are already sharing their knowledge and learning new skills with HourSwap.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button className="w-full sm:w-auto">
                Create Free Account
              </Button>
            </Link>
            <Link to="/explore">
              <Button className="w-full sm:w-auto">
                Start Teaching
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
