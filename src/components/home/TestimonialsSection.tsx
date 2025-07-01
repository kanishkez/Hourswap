const testimonials = [
  {
    quote: "HourSwap has transformed the way I connect with my neighbors! The gardening service helped me create a beautiful garden.",
    name: "Sarah T.",
    title: "Community Member",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "I was able to find a tech expert in my neighborhood to help me with my website. It was an amazing experience!",
    name: "David M.",
    title: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "The childcare services are a lifesaver! I found a reliable neighbor who watches my kids while I work.",
    name: "Lisa K.",
    title: "Parent & Freelancer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    quote: "HourSwap has made sharing skills so easy. I learned new tech skills while helping others!",
    name: "Mark R.",
    title: "Tech Enthusiast",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 border shadow-sm card-hover relative"
            >
              <div className="absolute -top-4 left-6">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.76 25.76H7.24L14 14.24H9.64L2.6 25.76V31H12.76V25.76ZM30.36 25.76H24.84L31.6 14.24H27.24L20.2 25.76V31H30.36V25.76Z" fill="currentColor" className="text-primary/20"/>
                </svg>
              </div>
              
              <blockquote className="mt-6 mb-4 text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mt-6">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
