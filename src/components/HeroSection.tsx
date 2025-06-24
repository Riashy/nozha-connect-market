
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-right animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-6 font-cairo leading-tight">
                تواصل مع
                <span className="text-primary"> المستوردين</span>
                <br />
                في النزهة الجديدة
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-cairo">
                السوق الرائد لأعمال الاستيراد والتصدير في القاهرة. 
                اعثر على الموردين، تواصل مع الموزعين، وانمِ شبكة تجارتك.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium font-cairo">
                  تصفح الإعلانات
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg font-cairo">
                  اعرف المزيد
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-bold text-2xl text-secondary">+500</div>
                  <div className="text-sm text-gray-600 font-cairo">تاجر نشط</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div className="font-bold text-2xl text-secondary">+1200</div>
                  <div className="text-sm text-gray-600 font-cairo">منتج مدرج</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-2">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="font-bold text-2xl text-secondary">+50</div>
                  <div className="text-sm text-gray-600 font-cairo">دولة</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="محترفون في الأعمال"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-accent text-white p-4 rounded-xl shadow-lg">
                <div className="font-bold text-lg font-cairo">24/7</div>
                <div className="text-sm font-cairo">دعم</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium font-cairo">تداول مباشر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
