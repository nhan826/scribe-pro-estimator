import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EstimateChat from "@/components/EstimateChat";
import { ArrowLeft, FileText, Share, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Estimate = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-construction-navy">New Estimate</h1>
            <p className="text-muted-foreground">Johnson Residence - Living Room Trim</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge className="bg-accent/10 text-accent">Draft</Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="construction" size="sm">
            <FileText className="h-4 w-4" />
            Preview Quote
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-construction">
            <CardContent className="p-0">
              <EstimateChat />
            </CardContent>
          </Card>
        </div>

        {/* Live Preview */}
        <div className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-construction-navy">Live Quote Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Crown Molding (72 LF)</span>
                  <span className="font-medium">$2,160</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Baseboard (72 LF)</span>
                  <span className="font-medium">$1,440</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Materials</span>
                  <span>$850</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Labor</span>
                  <span>$2,750</span>
                </div>
                <hr />
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">$4,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Overhead (10%)</span>
                  <span>$445</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Contingency (12%)</span>
                  <span>$534</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-construction-navy">
                  <span>Total</span>
                  <span>$5,429</span>
                </div>
              </div>
              
              <Button variant="accent" className="w-full">
                <Share className="h-4 w-4" />
                Generate PDF
              </Button>
            </CardContent>
          </Card>

          {/* Project Info */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-construction-navy">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium">Client</p>
                <p className="text-sm text-muted-foreground">Johnson Residence</p>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">123 Oak Street, Beverly Hills</p>
              </div>
              <div>
                <p className="text-sm font-medium">Room Type</p>
                <p className="text-sm text-muted-foreground">Living Room</p>
              </div>
              <div>
                <p className="text-sm font-medium">Dimensions</p>
                <p className="text-sm text-muted-foreground">16' x 20' (72 LF perimeter)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Estimate;