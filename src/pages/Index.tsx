import Dashboard from "@/components/Dashboard";
import NewProjectModal from "@/components/NewProjectModal";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Professional finish carpentry work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Estimating for Finish Carpenters
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Generate professional quotes in minutes, not hours. Turn change requests into approved orders with photos and e-signatures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => navigate("/estimate")}
            >
              Start New Estimate
            </Button>
            <NewProjectModal />
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <Dashboard />
    </div>
  );
};

export default Index;
