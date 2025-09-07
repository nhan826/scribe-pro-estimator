import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, MapPin, User, Home } from "lucide-react";

const NewProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    address: "",
    projectType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating project:", formData);
    // Here you would normally call your API
    setIsOpen(false);
    setFormData({
      projectName: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      address: "",
      projectType: "",
      description: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg">
          <PlusCircle className="h-5 w-5" />
          New Project
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl text-construction-navy flex items-center gap-2">
            <Home className="h-5 w-5" />
            Create New Project
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-construction-navy border-b pb-2">Project Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange("projectName", e.target.value)}
                  placeholder="e.g., Johnson Residence Trim Package"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="new-construction">New Construction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Brief description of the work to be performed..."
                rows={3}
              />
            </div>
          </div>

          {/* Client Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-construction-navy border-b pb-2 flex items-center gap-2">
              <User className="h-4 w-4" />
              Client Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange("clientName", e.target.value)}
                  placeholder="Client or company name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="clientEmail">Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => handleInputChange("clientEmail", e.target.value)}
                  placeholder="client@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="clientPhone">Phone Number</Label>
              <Input
                id="clientPhone"
                type="tel"
                value={formData.clientPhone}
                onChange={(e) => handleInputChange("clientPhone", e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Project Location */}
          <div className="space-y-4">
            <h3 className="font-semibold text-construction-navy border-b pb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Project Location
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street, City, State 12345"
                rows={2}
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="construction">
              Create Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectModal;