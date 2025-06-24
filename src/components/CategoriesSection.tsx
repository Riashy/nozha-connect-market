
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Zap, 
  ShoppingBag, 
  Shirt, 
  Car, 
  Home,
  Wrench,
  Heart
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    nameAr: "إلكترونيات",
    icon: Smartphone,
    count: "250+ ads",
    color: "bg-blue-500"
  },
  {
    name: "Appliances",
    nameAr: "أجهزة منزلية",
    icon: Zap,
    count: "180+ ads",
    color: "bg-purple-500"
  },
  {
    name: "Foodstuff",
    nameAr: "مواد غذائية",
    icon: ShoppingBag,
    count: "320+ ads",
    color: "bg-green-500"
  },
  {
    name: "Textiles",
    nameAr: "منسوجات",
    icon: Shirt,
    count: "150+ ads",
    color: "bg-pink-500"
  },
  {
    name: "Automotive",
    nameAr: "قطع غيار",
    icon: Car,
    count: "120+ ads",
    color: "bg-red-500"
  },
  {
    name: "Construction",
    nameAr: "مواد بناء",
    icon: Home,
    count: "90+ ads",
    color: "bg-orange-500"
  },
  {
    name: "Machinery",
    nameAr: "معدات",
    icon: Wrench,
    count: "75+ ads",
    color: "bg-gray-600"
  },
  {
    name: "Healthcare",
    nameAr: "منتجات طبية",
    icon: Heart,
    count: "60+ ads",
    color: "bg-teal-500"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 font-poppins">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right products and suppliers across all major import-export categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-semibold text-lg text-secondary mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-500 mb-2 font-cairo">
                  {category.nameAr}
                </p>
                
                <p className="text-sm text-primary font-medium">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary hover:text-secondary font-medium text-lg transition-colors duration-200 hover:underline">
            View All Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
