
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, Upload } from "lucide-react";

interface PostAdModalProps {
  children: React.ReactNode;
}

const categories = [
  { value: "electronics", label: "إلكترونيات" },
  { value: "appliances", label: "أجهزة منزلية" },
  { value: "foodstuff", label: "مواد غذائية" },
  { value: "textiles", label: "منسوجات" },
  { value: "automotive", label: "قطع غيار" },
  { value: "construction", label: "مواد بناء" },
  { value: "machinery", label: "معدات" },
  { value: "healthcare", label: "منتجات طبية" }
];

const PostAdModal = ({ children }: PostAdModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    currency: "USD",
    location: "",
    contactPhone: "",
    contactEmail: "",
    companyName: "",
    minOrder: "",
    images: [] as string[]
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New ad submission:", adData);
    toast({
      title: "تم نشر الإعلان بنجاح",
      description: "سيتم مراجعة إعلانك وسيظهر في الموقع قريباً"
    });
    setIsOpen(false);
    setAdData({
      title: "",
      description: "",
      category: "",
      price: "",
      currency: "USD",
      location: "",
      contactPhone: "",
      contactEmail: "",
      companyName: "",
      minOrder: "",
      images: []
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you'd upload these to a server
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setAdData({...adData, images: [...adData.images, ...newImages]});
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center font-cairo text-xl">
            نشر إعلان جديد
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title" className="font-cairo">عنوان الإعلان *</Label>
              <Input
                id="title"
                placeholder="مثال: أجهزة كمبيوتر محمولة للاستيراد بالجملة"
                value={adData.title}
                onChange={(e) => setAdData({...adData, title: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="font-cairo">الفئة *</Label>
              <Select value={adData.category} onValueChange={(value) => setAdData({...adData, category: value})}>
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
              <Label htmlFor="companyName" className="font-cairo">اسم الشركة</Label>
              <Input
                id="companyName"
                placeholder="اسم شركتك أو متجرك"
                value={adData.companyName}
                onChange={(e) => setAdData({...adData, companyName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="font-cairo">السعر *</Label>
              <div className="flex gap-2">
                <Input
                  id="price"
                  placeholder="1000"
                  value={adData.price}
                  onChange={(e) => setAdData({...adData, price: e.target.value})}
                  required
                  className="flex-1"
                />
                <Select value={adData.currency} onValueChange={(value) => setAdData({...adData, currency: value})}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">$</SelectItem>
                    <SelectItem value="EGP">ج.م</SelectItem>
                    <SelectItem value="EUR">€</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="minOrder" className="font-cairo">الحد الأدنى للطلب</Label>
              <Input
                id="minOrder"
                placeholder="100 وحدة"
                value={adData.minOrder}
                onChange={(e) => setAdData({...adData, minOrder: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="font-cairo">الموقع *</Label>
              <Input
                id="location"
                placeholder="النزهة الجديدة، القاهرة"
                value={adData.location}
                onChange={(e) => setAdData({...adData, location: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="font-cairo">رقم الهاتف *</Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+20 123 456 789"
                value={adData.contactPhone}
                onChange={(e) => setAdData({...adData, contactPhone: e.target.value})}
                required
                dir="ltr"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="font-cairo">البريد الإلكتروني</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="contact@company.com"
                value={adData.contactEmail}
                onChange={(e) => setAdData({...adData, contactEmail: e.target.value})}
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-cairo">وصف المنتج *</Label>
            <Textarea
              id="description"
              placeholder="اكتب وصفاً مفصلاً للمنتج، المواصفات، شروط التوريد، إلخ..."
              value={adData.description}
              onChange={(e) => setAdData({...adData, description: e.target.value})}
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images" className="font-cairo">صور المنتج</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                id="images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Label htmlFor="images" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 font-cairo">انقر لرفع الصور</p>
                <p className="text-xs text-gray-500 font-cairo">يمكنك رفع عدة صور</p>
              </Label>
            </div>
            {adData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-2">
                {adData.images.map((img, index) => (
                  <img key={index} src={img} alt={`Preview ${index}`} className="w-full h-20 object-cover rounded" />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="font-cairo">
              إلغاء
            </Button>
            <Button type="submit" className="font-cairo">
              <PlusCircle className="w-4 h-4 ml-2" />
              نشر الإعلان
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostAdModal;
