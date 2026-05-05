import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ProductPreview } from "@/components/site/ProductPreview";
import { Features } from "@/components/site/Features";
import { TargetUsers } from "@/components/site/TargetUsers";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ProductPreview />
      <Features />
      <TargetUsers />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
