
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedListings from "@/components/FeaturedListings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedListings />
      <Footer />
    </div>
  );
};

export default Index;
