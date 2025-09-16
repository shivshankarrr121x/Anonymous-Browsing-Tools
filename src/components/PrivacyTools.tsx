import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Download, Shield, Globe, Key, Zap } from "lucide-react";

const PrivacyTools = () => {
  const tools = [
    {
      name: "Tor Browser",
      description: "Anonymous browsing through the Tor network",
      url: "https://www.torproject.org/download/",
      icon: Globe,
      category: "Browser"
    },
    {
      name: "Signal",
      description: "Encrypted messaging and calls",
      url: "https://signal.org/download/",
      icon: Shield,
      category: "Communication"
    },
    {
      name: "ProtonVPN",
      description: "Secure VPN with no-logs policy",
      url: "https://protonvpn.com/",
      icon: Key,
      category: "VPN"
    },
    {
      name: "uBlock Origin",
      description: "Advanced ad and tracker blocker",
      url: "https://ublockorigin.com/",
      icon: Zap,
      category: "Extension"
    },
    {
      name: "Brave Browser",
      description: "Privacy-focused browser with built-in ad blocking",
      url: "https://brave.com/download/",
      icon: Shield,
      category: "Browser"
    },
    {
      name: "Firefox",
      description: "Open-source browser with privacy features",
      url: "https://www.mozilla.org/firefox/",
      icon: Globe,
      category: "Browser"
    }
  ];

  const categories = ["All", "Browser", "VPN", "Communication", "Extension"];
  
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Essential Privacy Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download and use these trusted tools to enhance your online privacy and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.name} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg">{tool.name}</h3>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full w-fit">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 group"
                  asChild
                >
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Get {tool.name}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Privacy Tip</h3>
            <p className="text-muted-foreground">
              Use multiple privacy tools together for layered protection. Combine a privacy-focused browser with a VPN, 
              secure messaging, and ad blockers for maximum security.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivacyTools;