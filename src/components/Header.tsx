
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Phone, User, PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4 text-gray-600 space-x-reverse">
            <span className="flex items-center">
              <Phone className="w-4 h-4 ml-1" />
              +20 123 456 789
            </span>
            <span>النزهة الجديدة، القاهرة</span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-primary font-medium">العربية</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">English</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary text-white p-2 rounded-lg ml-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                ن ج
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl text-secondary font-cairo">النزهة</h1>
              <p className="text-sm text-gray-600">الإعلانات المبوبة</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن المنتجات، الموردين، المستوردين..."
                className="w-full pr-12 pl-4 py-3 text-lg border-2 border-gray-200 focus:border-primary rounded-lg text-right"
                dir="rtl"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90">
                بحث
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <Button variant="outline" className="hidden lg:flex items-center border-primary text-primary hover:bg-primary hover:text-white">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
            
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium">
              <PlusCircle className="w-4 h-4 ml-2" />
              <span className="hidden sm:inline">نشر إعلان</span>
              <span className="sm:hidden">نشر</span>
            </Button>

            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="ابحث عن المنتجات، الموردين..."
              className="w-full pr-10 pl-4 py-2 border-2 border-gray-200 focus:border-primary rounded-lg text-right"
              dir="rtl"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
