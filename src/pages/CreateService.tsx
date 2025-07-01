import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Constants } from '@/integrations/supabase/types';

const skillCategories = Constants.public.Enums.skill_category;

const CreateService = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Technology');
  const [hoursCost, setHoursCost] = useState(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!imageFile || !user) return null;

    const fileExt = imageFile.name.split('.').pop();
    const filePath = `${user.id}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('services')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('services').getPublicUrl(filePath);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);

    try {
      // Upload image if provided
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      // Create service
      const { data, error } = await supabase
        .from('services')
        .insert({
          user_id: user.id,
          title,
          description,
          category,
          hours_cost: hoursCost,
          image_url: imageUrl,
          status: 'active'
        })
        .select();

      if (error) throw error;

      toast({
        title: 'Service created',
        description: 'Your service has been successfully created.'
      });

      navigate('/profile');
    } catch (error) {
      console.error('Error creating service:', error);
      toast({
        title: 'Error',
        description: 'Failed to create service',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create a New Service</CardTitle>
          <CardDescription>Share your skills and knowledge with others on HourSwap</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                placeholder="e.g., Guitar Lessons, Web Design Help"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                {skillCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what you're offering, your experience, and what people can expect"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hoursCost">Cost in Hours</Label>
              <Input
                id="hoursCost"
                type="number"
                min="0.5"
                step="0.5"
                value={hoursCost}
                onChange={(e) => setHoursCost(Number(e.target.value))}
                required
              />
              <p className="text-sm text-muted-foreground">How many hours should others pay for this service</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Service Image (Optional)</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <p className="text-sm text-muted-foreground">Add an image that represents your service</p>
            </div>

            <div className="pt-4 flex gap-4">
              <Button
                type="button"
                className="flex-1"
                onClick={() => navigate('/profile')}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Service'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateService;
