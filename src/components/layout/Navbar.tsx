import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/68be656a-446f-49ea-89a2-0902fc62fe85.png" alt="HourSwap Logo" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-lg hidden sm:inline-block">HourSwap</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/explore" className="text-sm font-medium transition-colors hover:text-primary">
            Explore Skills
          </Link>
          <Link to="/teach" className="text-sm font-medium transition-colors hover:text-primary">
            Teach
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <Button className="text-sm">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="text-sm">Sign Up</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-primary hover:bg-primary/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/explore" 
              className="text-sm font-medium px-2 py-1 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Skills
            </Link>
            <Link 
              to="/teach" 
              className="text-sm font-medium px-2 py-1 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Teach
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium px-2 py-1 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
