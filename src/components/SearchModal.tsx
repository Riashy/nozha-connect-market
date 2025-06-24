
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchModalProps {
  children: React.ReactNode;
}

const categories = [
  { value: "all", label: "جميع الفئات" },
  { value: "electronics", label: "إلكترونيات" },
  { value: "appliances", label: "أجهزة منزلية" },
  { value: "foodstuff", label: "مواد غذائية" },
  { value: "textiles", label: "منسوجات" },
  { value: "automotive", label: "قطع غيار" },
  { value: "construction", label: "مواد بناء" },
  { value: "machinery", label: "معدات" },
  { value: "healthcare", label: "منتجات طبية" }
];

const locations = [
  "جميع المناطق",
  "النزهة الجديدة",
  "مدينة نصر",
  "هليوبوليس",
  "القاهرة الجديدة",
  "وسط القاهرة",
  "المنطقة الصناعية"
];

const SearchModal = ({ children }: SearchModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    keyword: "",
    category: "all",
    location: "",
    priceRange: [0, 100000],
    currency: "USD",
    sortBy: "newest"
  });
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search with filters:", searchFilters);
    // Update active filters for display
    const filters = [];
    if (searchFilters.keyword) filters.push(`البحث: ${searchFilters.keyword}`);
    if (searchFilters.category !== "all") {
      const catLabel = categories.find(c => c.value === searchFilters.category)?.label;
      if (catLabel) filters.push(`الفئة: ${catLabel}`);
    }
    if (searchFilters.location) filters.push(`الموقع: ${searchFilters.location}`);
    filters.push(`السعر: ${searchFilters.priceRange[0]} - ${searchFilters.priceRange[1]} ${searchFilters.currency}`);
    
    setActiveFilters(filters);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setSearchFilters({
      keyword: "",
      category: "all",
      location: "",
      priceRange: [0, 100000],
      currency: "USD",
      sortBy: "newest"
    });
    setActiveFilters([]);
  };

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters(activeFilters.filter(filter => filter !== filterToRemove));
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-center font-cairo text-xl">
              بحث متقدم
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="keyword" className="font-cairo">كلمة البحث</Label>
              <Input
                id="keyword"
                placeholder="ابحث عن المنتجات، الموردين، المستوردين..."
                value={searchFilters.keyword}
                onChange={(e) => setSearchFilters({...searchFilters, keyword: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category" className="font-cairo">الفئة</Label>
                <Select 
                  value={searchFilters.category} 
                  onValueChange={(value) => setSearchFilters({...searchFilters, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الفئة" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="font-cairo">الموقع</Label>
                <Select 
                  value={searchFilters.location} 
                  onValueChange={(value) => setSearchFilters({...searchFilters, location: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الموقع" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="font-cairo">نطاق السعر</Label>
              <div className="px-4">
                <Slider
                  value={searchFilters.priceRange}
                  onValueChange={(value) => setSearchFilters({...searchFilters, priceRange: value})}
                  max={100000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{searchFilters.priceRange[0]} {searchFilters.currency}</span>
                  <span>{searchFilters.priceRange[1]} {searchFilters.currency}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currency" className="font-cairo">العملة</Label>
                <Select 
                  value={searchFilters.currency} 
                  onValueChange={(value) => setSearchFilters({...searchFilters, currency: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">دولار أمريكي (USD)</SelectItem>
                    <SelectItem value="EGP">جنيه مصري (EGP)</SelectItem>
                    <SelectItem value="EUR">يورو (EUR)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sortBy" className="font-cairo">ترتيب النتائج</Label>
                <Select 
                  value={searchFilters.sortBy} 
                  onValueChange={(value) => setSearchFilters({...searchFilters, sortBy: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">الأحدث</SelectItem>
                    <SelectItem value="oldest">الأقدم</SelectItem>
                    <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                    <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={clearFilters} className="font-cairo">
                مسح الفلاتر
              </Button>
              <Button type="submit" className="font-cairo">
                <Search className="w-4 h-4 ml-2" />
                بحث
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Active Filters Display */}
      {activeFilters.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700 font-cairo">الفلاتر النشطة:</span>
            <Button variant="ghost" size="sm" onClick={() => setActiveFilters([])} className="font-cairo">
              مسح الكل
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <Badge key={index} variant="secondary" className="font-cairo">
                {filter}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 p-0 h-auto"
                  onClick={() => removeFilter(filter)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
