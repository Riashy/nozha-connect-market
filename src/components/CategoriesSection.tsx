
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
    name: "إلكترونيات",
    nameEn: "Electronics",
    slug: "electronics",
    icon: Smartphone,
    count: "+250 إعلان",
    color: "bg-blue-500"
  },
  {
    name: "أجهزة منزلية",
    nameEn: "Appliances",
    slug: "appliances",
    icon: Zap,
    count: "+180 إعلان",
    color: "bg-purple-500"
  },
  {
    name: "مواد غذائية",
    nameEn: "Foodstuff",
    slug: "foodstuff",
    icon: ShoppingBag,
    count: "+320 إعلان",
    color: "bg-green-500"
  },
  {
    name: "منسوجات",
    nameEn: "Textiles",
    slug: "textiles",
    icon: Shirt,
    count: "+150 إعلان",
    color: "bg-pink-500"
  },
  {
    name: "قطع غيار",
    nameEn: "Automotive",
    slug: "automotive",
    icon: Car,
    count: "+120 إعلان",
    color: "bg-red-500"
  },
  {
    name: "مواد بناء",
    nameEn: "Construction",
    slug: "construction",
    icon: Home,
    count: "+90 إعلان",
    color: "bg-orange-500"
  },
  {
    name: "معدات",
    nameEn: "Machinery",
    slug: "machinery",
    icon: Wrench,
    count: "+75 إعلان",
    color: "bg-gray-600"
  },
  {
    name: "منتجات طبية",
    nameEn: "Healthcare",
    slug: "healthcare",
    icon: Heart,
    count: "+60 إعلان",
    color: "bg-teal-500"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 font-cairo">
            تصفح حسب الفئة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-cairo">
            اعثر على المنتجات والموردين المناسبين في جميع فئات الاستيراد والتصدير الرئيسية
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.name}
              to={`/category/${category.slug}`}
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg text-secondary mb-1 group-hover:text-primary transition-colors font-cairo">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-2">
                    {category.nameEn}
                  </p>
                  
                  <p className="text-sm text-primary font-medium font-cairo">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary hover:text-secondary font-medium text-lg transition-colors duration-200 hover:underline font-cairo">
            عرض جميع الفئات ←
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
