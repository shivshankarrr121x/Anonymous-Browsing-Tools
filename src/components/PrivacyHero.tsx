import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Search, Eye, Lock } from "lucide-react";
import heroImage from "@/assets/privacy-hero.jpg";

const PrivacyHero = () => {
  const searchEngines = [
    { name: "DuckDuckGo", url: "https://duckduckgo.com", description: "No tracking, no ads" },
    { name: "Startpage", url: "https://www.startpage.com", description: "Google results, private" },
    { name: "Searx", url: "https://searx.space", description: "Open source metasearch" },
    { name: "Brave Search", url: "https://search.brave.com", description: "Independent index" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full shadow-glow">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Privacy-First
            <span className="block text-primary">Web Browsing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take control of your digital privacy with secure search engines, educational resources, and privacy tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
              <Search className="w-5 h-5 mr-2" />
              Start Private Search
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Eye className="w-5 h-5 mr-2" />
              Learn Privacy Tips
            </Button>
          </div>
        </div>
      </section>

      {/* Search Engines */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Private Search Engines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchEngines.map((engine) => (
              <Card key={engine.name} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{engine.name}</h3>
                  <p className="text-muted-foreground mb-4">{engine.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    asChild
                  >
                    <a href={engine.url} target="_blank" rel="noopener noreferrer">
                      Search Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16 px-6 bg-privacy-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Privacy Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-muted-foreground">Keep your personal information safe from trackers and data brokers.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Anonymous Browsing</h3>
              <p className="text-muted-foreground">Browse the web without leaving digital footprints or being tracked.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-privacy-secondary/20 rounded-full">
                <Lock className="w-8 h-8 text-privacy-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Communications</h3>
              <p className="text-muted-foreground">Protect your communications from surveillance and interception.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyHero;