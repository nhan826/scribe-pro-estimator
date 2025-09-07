import { Button } from "@/components/ui/button";
import { PlusCircle, Settings, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="h-8 w-8 rounded bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <h1 className="text-xl font-bold text-construction-navy">ScribeFlow</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Estimates</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Change Orders</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Analytics</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="accent" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => navigate("/estimate")}
          >
            <PlusCircle className="h-4 w-4" />
            New Estimate
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;