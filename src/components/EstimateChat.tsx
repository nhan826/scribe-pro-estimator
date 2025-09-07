import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Mic, Calculator, FileText } from "lucide-react";

interface ChatMessage {
  id: string;
  type: 'ai' | 'user' | 'system';
  content: string;
  timestamp: Date;
  data?: any;
}

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'ai',
    content: "Hi! I'm your AI estimating assistant. Let's create a professional quote for your finish carpentry project. What type of room are we working on?",
    timestamp: new Date(),
  },
  {
    id: '2',
    type: 'user',
    content: "Living room with crown molding and baseboards",
    timestamp: new Date(),
  },
  {
    id: '3',
    type: 'ai',
    content: "Perfect! A living room with crown molding and baseboards. Let's get the dimensions. What are the room's length and width?",
    timestamp: new Date(),
  },
  {
    id: '4',
    type: 'system',
    content: "Quick calculation preview: 16' x 20' = 72 linear feet of perimeter",
    timestamp: new Date(),
    data: { calculation: true }
  }
];

const EstimateChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: inputValue,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <Calculator className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-construction-navy">AI Estimator</h3>
            <p className="text-sm text-muted-foreground">Johnson Residence - Living Room</p>
          </div>
        </div>
        <Badge className="bg-green-100 text-green-800">In Progress</Badge>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-gradient-primary text-white'
                  : message.type === 'system'
                  ? 'bg-accent/10 text-accent border border-accent/20'
                  : 'bg-white text-foreground shadow-sm border'
              }`}
            >
              {message.data?.calculation && (
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4" />
                  <span className="font-medium">Quick Calculation</span>
                </div>
              )}
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2 mb-3">
          <Button variant="outline" size="sm">16' x 20'</Button>
          <Button variant="outline" size="sm">Crown + Base</Button>
          <Button variant="outline" size="sm">V-Groove Walls</Button>
          <Button variant="outline" size="sm">Skip to Totals</Button>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type dimensions, materials, or ask a question..."
              className="pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 ${
                isRecording ? 'text-red-500' : 'text-muted-foreground'
              }`}
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          
          <Button 
            variant="construction" 
            size="sm"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
          
          <Button variant="accent" size="sm">
            <FileText className="h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EstimateChat;