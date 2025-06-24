
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Phone, User, PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              +20 123 456 789
            </span>
            <span>El Nozha El Gedida, Cairo</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">العربية</span>
            <span className="text-gray-400">|</span>
            <span className="text-primary font-medium">English</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary text-white p-2 rounded-lg mr-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                EN
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl text-secondary font-poppins">El Nozha</h1>
              <p className="text-sm text-gray-600">Classifieds</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, suppliers, importers..."
                className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-primary rounded-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden lg:flex items-center border-primary text-primary hover:bg-primary hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium">
              <PlusCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Post Ad</span>
              <span className="sm:hidden">Post</span>
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
              placeholder="Search products, suppliers..."
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 focus:border-primary rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
