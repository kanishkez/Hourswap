import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const popularSkills = [
  {
    id: 1,
    name: "Web Development",
    description: "Learn to code websites and web applications",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Technology"
  },
  {
    id: 2,
    name: "Cooking Basics",
    description: "Master fundamental cooking techniques",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1.5,
    category: "Food"
  },
  {
    id: 3,
    name: "Photography",
    description: "Learn professional photography skills",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Arts"
  },
  {
    id: 4,
    name: "Language Tutoring",
    description: "Improve your language skills with native speakers",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Education"
  }
];

const PopularSkillsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Skills</h2>
          <Link to="/explore">
            <Button className="mt-4 md:mt-0">View All Skills</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularSkills.map((skill) => (
            <Link key={skill.id} to={`/explore/${skill.id}`}>
              <div className="rounded-lg border bg-card overflow-hidden shadow card-hover h-full">
                <div className="aspect-[16/9] w-full relative">
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-card px-2 py-1 rounded-md text-xs font-medium">
                    {skill.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                  <div className="flex items-center text-sm font-medium">
                    <Clock size={16} className="mr-1 text-primary" />
                    <span>{skill.hourRate} hour{skill.hourRate > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSkillsSection;
