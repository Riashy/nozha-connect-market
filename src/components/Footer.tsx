
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
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Stay Updated with Latest Opportunities
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified about new import-export opportunities in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8">
                Subscribe
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
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  EN
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl font-poppins">El Nozha</h3>
                <p className="text-sm text-gray-300">Classifieds</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The premier marketplace connecting importers and distributors in El Nozha El Gedida, Cairo. Building trade relationships since 2020.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Browse Listings",
                "Post an Ad",
                "Premium Membership",
                "Seller Guidelines",
                "Success Stories",
                "Help Center"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {[
                "Electronics",
                "Appliances", 
                "Foodstuff",
                "Textiles",
                "Automotive",
                "Construction"
              ].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 El Nozha Street<br />
                    El Nozha El Gedida<br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+20 123 456 789</p>
                  <p className="text-gray-400 text-sm">9 AM - 6 PM, Mon-Sat</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">info@elnozhaclassifieds.com</p>
              </div>

              <div className="pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
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
            <div className="text-gray-400 text-sm">
              © 2024 El Nozha Classifieds. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
