
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-cairo">
              ابق على اطلاع بأحدث الفرص
            </h3>
            <p className="text-gray-300 mb-6 font-cairo">
              احصل على إشعارات حول فرص الاستيراد والتصدير الجديدة في منطقتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 text-right"
                dir="rtl"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 font-cairo">
                اشترك
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-2 rounded-lg ml-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  ن ج
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl font-cairo">النزهة</h3>
                <p className="text-sm text-gray-300 font-cairo">الإعلانات المبوبة</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-cairo">
              السوق الرائد الذي يربط المستوردين والموزعين في النزهة الجديدة، القاهرة. نبني العلاقات التجارية منذ 2020.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-cairo">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                "تصفح الإعلانات",
                "نشر إعلان",
                "العضوية المميزة",
                "إرشادات البائع",
                "قصص النجاح",
                "مركز المساعدة"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline font-cairo"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-cairo">الفئات</h4>
            <ul className="space-y-3">
              {[
                "إلكترونيات",
                "أجهزة منزلية", 
                "مواد غذائية",
                "منسوجات",
                "قطع غيار",
                "مواد بناء"
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline font-cairo"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 font-cairo">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-cairo text-right">
                    123 شارع النزهة<br />
                    النزهة الجديدة<br />
                    القاهرة، مصر
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+20 123 456 789</p>
                  <p className="text-gray-400 text-sm font-cairo">9 ص - 6 م، الاثنين-السبت</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">info@elnozhaclassifieds.com</p>
              </div>

              <div className="pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full font-cairo">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  دعم واتساب
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-cairo">
              © 2024 إعلانات النزهة المبوبة. جميع الحقوق محفوظة.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-cairo">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-cairo">
                الشروط والأحكام
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-cairo">
                من نحن
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-cairo">
                تواصل
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
