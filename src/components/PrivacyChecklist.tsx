import { Card } from "@/components/ui/card";
import { CheckCircle, Circle, AlertTriangle, Info } from "lucide-react";
import { useState } from "react";

const PrivacyChecklist = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checklistItems = [
    {
      id: 1,
      title: "Use a privacy-focused search engine",
      description: "Switch from Google to DuckDuckGo, Startpage, or similar",
      priority: "high"
    },
    {
      id: 2,
      title: "Install a reliable VPN",
      description: "Use a no-logs VPN to encrypt your internet traffic",
      priority: "high"
    },
    {
      id: 3,
      title: "Enable two-factor authentication",
      description: "Add 2FA (2 Factor Authentication) to all important accounts for extra security",
      priority: "high"
    },
    {
      id: 4,
      title: "Use strong, unique passwords",
      description: "Consider a password manager to generate and store passwords",
      priority: "high"
    },
    {
      id: 5,
      title: "Install ad and tracker blockers",
      description: "Use uBlock Origin or similar extensions",
      priority: "medium"
    },
    {
      id: 6,
      title: "Review app permissions",
      description: "Check what data your apps can access on your devices",
      priority: "medium"
    },
    {
      id: 7,
      title: "Use encrypted messaging",
      description: "Switch to Signal or other encrypted messaging apps",
      priority: "medium"
    },
    {
      id: 8,
      title: "Review privacy settings",
      description: "Check privacy settings on social media and all your online accounts",
      priority: "medium"
    },
    {
      id: 9,
      title: "Clear cookies regularly",
      description: "Remove tracking cookies and browsing data periodically",
      priority: "low"
    },
    {
      id: 10,
      title: "Use privacy-focused DNS",
      description: "Switch to DNS providers like Cloudflare (1.1.1.1) or Quad9",
      priority: "low"
    }
  ];

  const toggleItem = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "medium":
        return <Info className="w-4 h-4 text-accent" />;
      default:
        return <Info className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-destructive";
      case "medium":
        return "border-l-accent";
      default:
        return "border-l-muted-foreground";
    }
  };

  const completedCount = checkedItems.size;
  const totalCount = checklistItems.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <section className="py-16 px-6 bg-privacy-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Privacy Security Checklist</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow this checklist to improve your online privacy and security step by step.
          </p>
        </div>

        {/* Progress Card */}
        <Card className="p-6 mb-8 bg-gradient-card border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Your Progress</h3>
            <span className="text-2xl font-bold text-primary">
              {completedCount}/{totalCount}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {progressPercent.toFixed(0)}% complete - {totalCount - completedCount} items remaining
          </p>
        </Card>

        {/* Checklist Items */}
        <div className="space-y-4">
          {checklistItems.map((item) => (
            <Card 
              key={item.id} 
              className={`p-4 bg-gradient-card border-border/50 border-l-4 ${getPriorityColor(item.priority)} hover:shadow-elegant transition-all duration-300 cursor-pointer ${checkedItems.has(item.id) ? 'opacity-75' : ''}`}
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {checkedItems.has(item.id) ? (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`font-medium ${checkedItems.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>
                      {item.title}
                    </h4>
                    {getPriorityIcon(item.priority)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Completion Message */}
        {completedCount === totalCount && (
          <Card className="p-8 mt-8 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
            <p className="text-muted-foreground">
              You've completed all privacy security steps. Your online privacy is now significantly improved!
            </p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PrivacyChecklist;
