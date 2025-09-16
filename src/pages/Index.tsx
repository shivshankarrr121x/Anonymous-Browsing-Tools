import PrivacyHero from "@/components/PrivacyHero";
import PrivacyTools from "@/components/PrivacyTools";
import PrivacyChecklist from "@/components/PrivacyChecklist";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PrivacyHero />
      <PrivacyTools />
      <PrivacyChecklist />
    </div>
  );
};

export default Index;
