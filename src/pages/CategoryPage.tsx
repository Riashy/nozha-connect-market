
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Zap, 
  ShoppingBag, 
  Shirt, 
  Car, 
  Home,
  Wrench,
  Heart,
  MapPin,
  Calendar,
  Eye,
  Star
} from "lucide-react";

const categories = {
  "electronics": {
    name: "إلكترونيات",
    nameEn: "Electronics",
    icon: Smartphone,
    count: "+250 إعلان",
    color: "bg-blue-500",
    description: "أحدث الأجهزة الإلكترونية والتكنولوجيا من موردين موثوقين"
  },
  "appliances": {
    name: "أجهزة منزلية",
    nameEn: "Appliances", 
    icon: Zap,
    count: "+180 إعلان",
    color: "bg-purple-500",
    description: "أجهزة منزلية عالية الجودة للمنازل والمكاتب"
  },
  "foodstuff": {
    name: "مواد غذائية",
    nameEn: "Foodstuff",
    icon: ShoppingBag,
    count: "+320 إعلان", 
    color: "bg-green-500",
    description: "مواد غذائية طازجة ومنتجات استهلاكية من مصادر موثوقة"
  },
  "textiles": {
    name: "منسوجات",
    nameEn: "Textiles",
    icon: Shirt,
    count: "+150 إعلان",
    color: "bg-pink-500",
    description: "أقمشة ومنسوجات عالية الجودة بأسعار تنافسية"
  },
  "automotive": {
    name: "قطع غيار",
    nameEn: "Automotive",
    icon: Car,
    count: "+120 إعلان",
    color: "bg-red-500",
    description: "قطع غيار أصلية ومعدات سيارات من موردين معتمدين"
  },
  "construction": {
    name: "مواد بناء",
    nameEn: "Construction",
    icon: Home,
    count: "+90 إعلان",
    color: "bg-orange-500",
    description: "مواد بناء وإنشاءات عالية الجودة لجميع المشاريع"
  },
  "machinery": {
    name: "معدات",
    nameEn: "Machinery",
    icon: Wrench,
    count: "+75 إعلان",
    color: "bg-gray-600",
    description: "معدات صناعية ومهنية للشركات والمصانع"
  },
  "healthcare": {
    name: "منتجات طبية",
    nameEn: "Healthcare",
    icon: Heart,
    count: "+60 إعلان",
    color: "bg-teal-500",
    description: "منتجات ومعدات طبية معتمدة من موردين موثوقين"
  }
};

const sampleListings = [
  {
    id: 1,
    title: "هواتف ذكية مستوردة من الصين",
    price: "15,000 ج.م",
    location: "النزهة الجديدة",
    date: "منذ يومين",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 245,
    rating: 4.8
  },
  {
    id: 2,
    title: "أجهزة لابتوب للشركات",
    price: "25,000 ج.م",
    location: "مدينة نصر",
    date: "منذ 3 أيام",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 180,
    rating: 4.5
  },
  {
    id: 3,
    title: "معدات شبكات واي فاي",
    price: "8,500 ج.م",
    location: "القاهرة الجديدة",
    date: "منذ أسبوع",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 156,
    rating: 4.2
  },
  {
    id: 4,
    title: "كاميرات مراقبة للمحلات",
    price: "12,000 ج.م",
    location: "مصر الجديدة",
    date: "منذ 4 أيام",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 198,
    rating: 4.7
  },
  {
    id: 5,
    title: "أجهزة تابلت تعليمية",
    price: "18,000 ج.م",
    location: "النزهة الجديدة",
    date: "منذ 5 أيام",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 167,
    rating: 4.4
  },
  {
    id: 6,
    title: "سماعات بلوتوث عالية الجودة",
    price: "3,500 ج.م",
    location: "الرحاب",
    date: "منذ 6 أيام",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: 134,
    rating: 4.6
  }
];

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories[categoryId as keyof typeof categories];

  if (!category) {
    return (
      <div className="min-h-screen bg-white font-cairo" dir="rtl">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">الفئة غير موجودة</h1>
          <Link to="/">
            <Button>العودة للرئيسية</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = category.icon;

  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      <Header />
      
      {/* Category Header */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
              {category.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {category.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 space-x-reverse text-lg">
              <span className="text-primary font-semibold">{category.count}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">النزهة الجديدة، القاهرة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm">
                جميع الأسعار
              </Button>
              <Button variant="outline" size="sm">
                المنطقة
              </Button>
              <Button variant="outline" size="sm">
                تاريخ النشر
              </Button>
              <Button variant="outline" size="sm">
                التقييم
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">ترتيب حسب:</span>
              <Button variant="outline" size="sm">
                الأحدث
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleListings.map((listing) => (
              <Card key={listing.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-secondary">
                    {listing.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 ml-1" />
                      {listing.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-1" />
                      {listing.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                        <span className="text-sm font-medium">{listing.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Eye className="w-4 h-4 ml-1" />
                        <span className="text-sm">{listing.views}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white">
                      عرض التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              عرض المزيد من الإعلانات
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
