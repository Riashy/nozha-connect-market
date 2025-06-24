
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, Star, Clock } from "lucide-react";

const featuredAds = [
  {
    id: 1,
    title: "Premium Laptop Computers - Bulk Import",
    description: "High-quality laptops from leading manufacturers. Minimum order 50 units. Perfect for retailers and distributors.",
    price: "$45,000",
    priceNote: "for 100 units",
    location: "El Nozha El Gedida",
    seller: "TechSource Egypt",
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["Featured", "Verified Seller"],
    timePosted: "2 hours ago"
  },
  {
    id: 2,
    title: "Industrial Circuit Boards & Components",
    description: "Electronic components for manufacturing. Certified quality with international standards compliance.",
    price: "$12,500",
    priceNote: "per batch",
    location: "Cairo Industrial Zone",
    seller: "ElectroTrade Co.",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["Premium", "Fast Shipping"],
    timePosted: "5 hours ago"
  },
  {
    id: 3,
    title: "Premium Food Products for Distribution",
    description: "Imported organic food products ready for distribution. All certificates included, health ministry approved.",
    price: "$8,900",
    priceNote: "wholesale lot",
    location: "New Cairo",
    seller: "FoodImport Masters",
    rating: 4.7,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["Organic Certified", "Health Approved"],
    timePosted: "1 day ago"
  },
  {
    id: 4,
    title: "Business Consultation Services",
    description: "Professional import-export consultation. Help with customs, documentation, and trade regulations.",
    price: "$150",
    priceNote: "per hour",
    location: "Downtown Cairo",
    seller: "Trade Consultants Pro",
    rating: 5.0,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badges: ["Expert Service", "Quick Response"],
    timePosted: "3 days ago"
  }
];

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 font-poppins">
            Featured Listings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium ads from verified importers and distributors in your area
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
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {ad.badges.map((badge) => (
                    <Badge 
                      key={badge}
                      className={`${
                        badge === "Featured" ? "bg-accent" :
                        badge === "Premium" ? "bg-purple-500" :
                        badge === "Verified Seller" ? "bg-green-500" :
                        "bg-primary"
                      } text-white font-medium`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{ad.timePosted}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors line-clamp-2">
                    {ad.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {ad.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {ad.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {ad.priceNote}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{ad.rating}</span>
                      <span className="text-gray-400 text-sm">({ad.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {ad.seller}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {ad.location}
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
