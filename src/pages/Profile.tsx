import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

interface Skill {
  id: string;
  skill: string;
  category: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  hours_cost: number;
  status: string;
}

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/signin');
      return;
    }
    
    fetchProfileData();
  }, [user, navigate]);

  const fetchProfileData = async () => {
    setIsLoading(true);
    
    try {
      // Fetch profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();
      
      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('user_skills')
        .select('*')
        .eq('user_id', user?.id);
      
      if (skillsError) throw skillsError;
      setSkills(skillsData || []);

      // Fetch services
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('*')
        .eq('user_id', user?.id);
      
      if (servicesError) throw servicesError;
      setServices(servicesData || []);

    } catch (error) {
      console.error('Error fetching profile data:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="container flex justify-center items-center min-h-[70vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container flex justify-center items-center min-h-[70vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Profile Not Found</CardTitle>
            <CardDescription>We couldn't find your HourSwap profile information.</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button onClick={() => navigate('/')}>Go Home</Button>
            <Button onClick={() => navigate('/create-profile')}>Create Profile</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile.avatar_url || undefined} />
                <AvatarFallback>{profile.full_name?.charAt(0) || profile.username?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle>{profile.full_name || profile.username}</CardTitle>
            <CardDescription>@{profile.username}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {profile.bio && (
              <div>
                <h4 className="font-medium mb-2">About</h4>
                <p className="text-sm text-muted-foreground">{profile.bio}</p>
              </div>
            )}
            
            <div>
              <h4 className="font-medium mb-2">Hour Balance</h4>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Hours earned: {profile.hours_earned || 0}</span>
                <span className="text-sm">Hours spent: {profile.hours_spent || 0}</span>
              </div>
              <Progress value={profile.hours_earned > 0 ? ((profile.hours_earned - profile.hours_spent) / profile.hours_earned) * 100 : 0} className="h-2" />
            </div>

            <div>
              <h4 className="font-medium mb-2">Skills</h4>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill) => (
                  <Badge key={skill.id} variant="secondary">{skill.skill}</Badge>
                ))}
                {skills.length === 0 && <p className="text-sm text-muted-foreground">No skills added yet</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button asChild className="w-full">
              <Link to="/create-profile">Edit Profile</Link>
            </Button>
            <Button className="w-full" onClick={handleSignOut}>
              Sign Out
            </Button>
          </CardFooter>
        </Card>

        {/* Services and History */}
        <div className="md:col-span-2 space-y-8">
          {/* Services Offered */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Services You Offer</CardTitle>
                <CardDescription>Skills and services you're offering to teach or provide</CardDescription>
              </div>
              <Button asChild>
                <Link to="/create-service">Add New</Link>
              </Button>
            </CardHeader>
            <CardContent>
              {services.length > 0 ? (
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        <Badge>{service.hours_cost} hours</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">You haven't added any services yet</p>
                  <Button className="mt-4" asChild>
                    <Link to="/create-service">Add Your First Service</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardHeader>
              <CardTitle>Hour Transaction History</CardTitle>
              <CardDescription>Record of hours earned and spent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No transaction history yet</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
