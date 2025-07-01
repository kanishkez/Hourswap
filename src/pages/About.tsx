const About = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About HourSwap</h1>
            <p className="text-lg text-muted-foreground">
              Exchanging knowledge and skills through community collaboration.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              HourSwap was founded on a simple yet powerful idea: everyone has valuable skills to share, and everyone has something they want to learn. 
              We believe that by creating a platform where people can exchange knowledge based on time rather than money, we can foster a more 
              inclusive, collaborative learning environment where everyone can participate regardless of their financial situation.
            </p>
            
            <h2>How Time Banking Works</h2>
            <p>
              Our platform uses a time-based currency system where one hour equals one hour, regardless of the service provided. 
              When you help someone for an hour, you earn an hour credit. You can then spend that credit to learn from someone else.
              This simple but revolutionary approach values everyone's time equally and creates a fair exchange system.
            </p>
            
            <h3>Key Benefits:</h3>
            <ul>
              <li>No monetary barriers to learning new skills</li>
              <li>Everyone's time and knowledge is valued equally</li>
              <li>Build community connections while learning</li>
              <li>Discover and develop skills you might never have considered</li>
              <li>Share your expertise with others who truly appreciate it</li>
            </ul>
            
            <h2>Our Community</h2>
            <p>
              HourSwap is home to a diverse community of individuals who are passionate about both teaching and learning. 
              From professionals sharing specialized knowledge to hobbyists teaching creative skills, our platform welcomes all kinds of expertise.
            </p>
            <p>
              We foster a respectful, inclusive environment where learning happens through direct human connection. 
              Every interaction helps build stronger community bonds while expanding individual capabilities.
            </p>
            
            <h2>Join the Knowledge Exchange</h2>
            <p>
              Whether you're looking to learn something new or share your skills with others, HourSwap provides the platform to make it happen.
              Sign up today to start your journey of collaborative learning and teaching.
            </p>
            
            <div className="bg-muted/30 p-6 rounded-lg my-8">
              <h3 className="font-semibold mb-2">Our Values</h3>
              <ul>
                <li><strong>Equality:</strong> Everyone's time has equal value</li>
                <li><strong>Community:</strong> Building connections through sharing knowledge</li>
                <li><strong>Accessibility:</strong> Making learning available to all</li>
                <li><strong>Reciprocity:</strong> Creating a balanced exchange of skills</li>
                <li><strong>Growth:</strong> Continuous personal and collective development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
