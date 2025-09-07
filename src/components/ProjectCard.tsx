import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, FileText, Edit } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    client: string;
    address: string;
    status: 'draft' | 'in-progress' | 'completed' | 'on-hold';
    totalValue: number;
    estimatesCount: number;
    changeOrdersCount: number;
    lastActivity: string;
  };
}

const statusConfig = {
  draft: { label: 'Draft', className: 'bg-muted text-muted-foreground' },
  'in-progress': { label: 'In Progress', className: 'bg-primary/10 text-primary' },
  completed: { label: 'Completed', className: 'bg-green-100 text-green-800' },
  'on-hold': { label: 'On Hold', className: 'bg-accent/20 text-accent' },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-construction transition-all duration-300 border-0 shadow-md bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-construction-navy group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{project.client}</p>
          </div>
          <Badge className={statusConfig[project.status].className}>
            {statusConfig[project.status].label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="truncate">{project.address}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold text-foreground">
                ${project.totalValue.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">Total Value</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold text-foreground">{project.estimatesCount}</p>
              <p className="text-xs text-muted-foreground">Estimates</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Edit className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold text-foreground">{project.changeOrdersCount}</p>
              <p className="text-xs text-muted-foreground">Change Orders</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Updated {project.lastActivity}</span>
          </div>
          
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;