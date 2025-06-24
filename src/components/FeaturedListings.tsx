import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, Star, Clock } from "lucide-react";
import ContactSellerModal from "./ContactSellerModal";

const featuredAds = [
  {
    id: 1,
    title: "أجهزة كمبيوتر محمولة فاخرة - استيراد بالجملة",
    description: "أجهزة محمولة عالية الجودة من الشركات المصنعة الرائدة. الحد الأدنى للطلب 50 وحدة. مثالية لتجار التجزئة والموزعين.",
    price: "45,000$",
    priceNote: "لـ 100 وحدة",
    location: "النزهة الجديدة",
    seller: "تك سورس مصر",
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["مميز", "بائع موثق"],
    timePosted: "منذ ساعتين"
  },
  {
    id: 2,
    title: "لوحات دوائر صناعية ومكونات",
    description: "مكونات إلكترونية للتصنيع. جودة معتمدة مع امتثال للمعايير الدولية.",
    price: "12,500$",
    priceNote: "لكل دفعة",
    location: "المنطقة الصناعية بالقاهرة",
    seller: "شركة إلكترو تريد",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["مميز", "شحن سريع"],
    timePosted: "منذ 5 ساعات"
  },
  {
    id: 3,
    title: "منتجات غذائية فاخرة للتوزيع",
    description: "منتجات غذائية عضوية مستوردة جاهزة للتوزيع. جميع الشهادات متضمنة، معتمدة من وزارة الصحة.",
    price: "8,900$",
    priceNote: "دفعة بالجملة",
    location: "القاهرة الجديدة",
    seller: "مايسترز استيراد الأغذية",
    rating: 4.7,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["معتمد عضوي", "موافق صحياً"],
    timePosted: "منذ يوم"
  },
  {
    id: 4,
    title: "خدمات استشارات الأعمال",
    description: "استشارات مهنية للاستيراد والتصدير. مساعدة في الجمارك والوثائق واللوائح التجارية.",
    price: "150$",
    priceNote: "في الساعة",
    location: "وسط القاهرة",
    seller: "مستشارو التجارة المحترفون",
    rating: 5.0,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["خدمة خبراء", "استجابة سريعة"],
    timePosted: "منذ 3 أيام"
  }
];

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 font-cairo">
            الإعلانات المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-cairo">
            إعلانات مميزة من مستوردين وموزعين موثقين في منطقتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredAds.map((ad, index) => (
            <Card 
              key={ad.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {ad.badges.map((badge) => (
                    <Badge 
                      key={badge}
                      className={`${
                        badge === "مميز" ? "bg-accent" :
                        badge === "مميز" ? "bg-purple-500" :
                        badge === "بائع موثق" ? "bg-green-500" :
                        "bg-primary"
                      } text-white font-medium font-cairo`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1 space-x-reverse">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600 font-cairo">{ad.timePosted}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors line-clamp-2 font-cairo text-right">
                    {ad.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-right font-cairo">
                  {ad.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-1 space-x-reverse mb-1 justify-end">
                      <span className="text-gray-400 text-sm">({ad.reviews})</span>
                      <span className="font-medium text-sm">{ad.rating}</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="text-sm text-gray-600 font-medium font-cairo">
                      {ad.seller}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {ad.price}
                    </div>
                    <div className="text-sm text-gray-500 font-cairo">
                      {ad.priceNote}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <ContactSellerModal sellerName={ad.seller} adTitle={ad.title}>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-cairo">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      تواصل مع البائع
                    </Button>
                  </ContactSellerModal>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="font-cairo">{ad.location}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 font-cairo">
            عرض جميع الإعلانات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
