import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from 'lucide-react';

const categories = ["Technology", "Food", "Arts", "Education", "Design", "Health", "Other"];

const Teach = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    category: '',
    hours: 1,
    image: null,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCategoryChange = (value) => {
    setFormState(prev => ({ ...prev, category: value }));
  };
  
  const handleHoursChange = (value) => {
    setFormState(prev => ({ ...prev, hours: parseInt(value) || 1 }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log('Submitting skill:', formState);
    alert('Your skill has been submitted successfully!');
  };
  
  return (
    <div className="py-10 md:py-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Share Your Skills on HourSwap</h1>
            <p className="text-muted-foreground">
              Offer your expertise and help others learn while earning time credits on HourSwap.
            </p>
          </div>
          
          <div className="bg-card rounded-lg border shadow-sm p-6 mb-10">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Skill Title</Label>
                  <Input 
                    id="title"
                    name="title"
                    placeholder="e.g., Web Development Basics"
                    required
                    value={formState.title}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formState.category} 
                    onValueChange={handleCategoryChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe what you'll teach and your expertise..."
                    required
                    rows={5}
                    value={formState.description}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hours">Hours Required</Label>
                  <div className="flex items-center">
                    <Select 
                      value={formState.hours.toString()} 
                      onValueChange={handleHoursChange}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Hours" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4].map(value => (
                          <SelectItem key={value} value={value.toString()}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="ml-2 text-muted-foreground flex items-center">
                      <Clock size={16} className="mr-1" />
                      hour{formState.hours !== 1 && 's'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">This is how many hours someone will need to spend to learn from you.</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Upload Cover Image (Optional)</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                  />
                  <p className="text-sm text-muted-foreground">Recommended image size: 1200x800 pixels</p>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit Skill Offer
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Tips for Great Skill Listings</h2>
            <ul className="space-y-2">
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Be specific about what people will learn from you</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Mention your experience and qualifications</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Set realistic time expectations for your teaching</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-2">•</span>
                <span>Upload a clear, relevant image to attract more interest</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teach;
