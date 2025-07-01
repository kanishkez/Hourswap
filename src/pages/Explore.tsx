import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// Placeholder data for skills
const skills = [
  {
    id: 1,
    name: "Web Development",
    description: "Learn to code websites and web applications",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Technology",
    provider: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.9
    }
  },
  {
    id: 2,
    name: "Cooking Basics",
    description: "Master fundamental cooking techniques",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1.5,
    category: "Food",
    provider: {
      name: "Maria Lopez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.7
    }
  },
  {
    id: 3,
    name: "Photography",
    description: "Learn professional photography skills",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Arts",
    provider: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.8
    }
  },
  {
    id: 4,
    name: "Language Tutoring",
    description: "Improve your language skills with native speakers",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Education",
    provider: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.9
    }
  },
  {
    id: 5,
    name: "Graphic Design",
    description: "Learn design principles and tools",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1.5,
    category: "Design",
    provider: {
      name: "Michael Brown",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.6
    }
  },
  {
    id: 6,
    name: "Fitness Training",
    description: "Get in shape with personalized workout routines",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=400&h=250&q=80",
    hourRate: 1,
    category: "Health",
    provider: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.8
    }
  },
];

const categories = ["All", "Technology", "Food", "Arts", "Education", "Design", "Health"];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter skills based on search query and selected category
  const filteredSkills = skills.filter(skill => {
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    
    return matchesQuery && matchesCategory;
  });
  
  return (
    <div className="py-10 md:py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <img 
            src="/lovable-uploads/68be656a-446f-49ea-89a2-0902fc62fe85.png" 
            alt="HourSwap Logo" 
            className="h-16 mx-auto mb-4" 
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Skills on HourSwap</h1>
          <p className="text-muted-foreground">
            Discover skills taught by our community members and exchange time, enrich lives with HourSwap.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for skills or teachers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button key={category} className="" onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="rounded-lg border bg-card overflow-hidden shadow card-hover">
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
                <h2 className="font-semibold text-lg mb-1">{skill.name}</h2>
                <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                      <img 
                        src={skill.provider.avatar} 
                        alt={skill.provider.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{skill.provider.name}</span>
                  </div>
                  <div className="text-sm font-medium">
                    {skill.hourRate} hour{skill.hourRate > 1 ? 's' : ''}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full">Request Service</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
