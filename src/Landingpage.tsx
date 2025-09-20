import React from "react";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ValuesSection from "./components/ValuesSection";
import PhilosophySection from "./components/PhilosophySection";
import Footer from "./components/Footer";


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden~">
      <main>
        <HeroSection
          showIcons={true}
          showSearchBar={true}
          bgImage="/back2.svg"
          highlightedText="Transforming"
          titleImage="/africa.png"
          titleParts=" Future Through Innovation"
          subtitle="Redefining Africa's Business Industry, One Step at a Time"
        />
        <ProductsSection />
        <ValuesSection />
        <PhilosophySection />
      </main>
    </div>
  );
};

export default LandingPage;
