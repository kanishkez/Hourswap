
import { Clock, Users, Award } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Time-Based Exchange",
    description: "No money involved. Exchange services based purely on time. One hour of your skill equals one hour of someone else's skill."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Building",
    description: "Connect with skilled individuals in your community. Build relationships while learning and teaching valuable skills."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Skill Development",
    description: "Learn new skills from real experts. Share your expertise with others who value your knowledge."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How SkillSwap Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-lg border bg-card p-6 text-card-foreground shadow card-hover"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
