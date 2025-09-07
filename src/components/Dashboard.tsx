import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProjectCard from "./ProjectCard";
import { Search, Filter, TrendingUp, FileText, Edit, DollarSign } from "lucide-react";

// Mock data - in real app this would come from API
const mockProjects = [
  {
    id: '1',
    name: 'Luxury Home Trim Package',
    client: 'Johnson Residence',
    address: '123 Oak Street, Beverly Hills, CA',
    status: 'in-progress' as const,
    totalValue: 45000,
    estimatesCount: 3,
    changeOrdersCount: 2,
    lastActivity: '2 hours ago',
  },
  {
    id: '2',
    name: 'Office Building Crown Molding',
    client: 'Metro Construction',
    address: '456 Business Blvd, Downtown LA',
    status: 'draft' as const,
    totalValue: 28500,
    estimatesCount: 1,
    changeOrdersCount: 0,
    lastActivity: '1 day ago',
  },
  {
    id: '3',
    name: 'Restaurant Millwork',
    client: 'Bella Vista Restaurant',
    address: '789 Main St, Santa Monica, CA',
    status: 'completed' as const,
    totalValue: 62000,
    estimatesCount: 2,
    changeOrdersCount: 4,
    lastActivity: '3 days ago',
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-0 shadow-md bg-gradient-subtle">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-construction-navy">12</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md bg-gradient-subtle">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-construction-navy">$485K</p>
                <p className="text-sm text-muted-foreground">Pipeline Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md bg-gradient-subtle">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-construction-navy">87%</p>
                <p className="text-sm text-muted-foreground">Win Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md bg-gradient-subtle">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Edit className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-construction-navy">24</p>
                <p className="text-sm text-muted-foreground">Change Orders</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Section */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-xl text-construction-navy">Recent Projects</CardTitle>
            
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-10"
                />
              </div>
              
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              
              <Button variant="hero" size="sm">
                <FileText className="h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;