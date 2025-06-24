
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail } from "lucide-react";

interface ContactSellerModalProps {
  children: React.ReactNode;
  sellerName: string;
  adTitle: string;
}

const ContactSellerModal = ({ children, sellerName, adTitle }: ContactSellerModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact seller:", { ...contactData, sellerName, adTitle });
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سيتم التواصل معك قريباً من قبل البائع"
    });
    setIsOpen(false);
    setContactData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center font-cairo text-xl">
            تواصل مع {sellerName}
          </DialogTitle>
          <p className="text-sm text-gray-600 text-center font-cairo">
            بخصوص: {adTitle}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-cairo">اسمك الكامل *</Label>
            <Input
              id="name"
              placeholder="الاسم الكامل"
              value={contactData.name}
              onChange={(e) => setContactData({...contactData, name: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-cairo">البريد الإلكتروني *</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@domain.com"
              value={contactData.email}
              onChange={(e) => setContactData({...contactData, email: e.target.value})}
              required
              dir="ltr"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-cairo">رقم الهاتف *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+20 123 456 789"
              value={contactData.phone}
              onChange={(e) => setContactData({...contactData, phone: e.target.value})}
              required
              dir="ltr"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-cairo">رسالتك *</Label>
            <Textarea
              id="message"
              placeholder="اكتب رسالتك هنا - اذكر الكمية المطلوبة وأي تفاصيل أخرى..."
              value={contactData.message}
              onChange={(e) => setContactData({...contactData, message: e.target.value})}
              required
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="font-cairo">
              إلغاء
            </Button>
            <Button type="submit" className="font-cairo">
              <MessageCircle className="w-4 h-4 ml-2" />
              إرسال الرسالة
            </Button>
          </div>
        </form>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 text-center mb-3 font-cairo">أو تواصل مباشرة:</p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" className="font-cairo">
              <Phone className="w-4 h-4 ml-1" />
              اتصال
            </Button>
            <Button variant="outline" size="sm" className="font-cairo">
              <Mail className="w-4 h-4 ml-1" />
              إيميل
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSellerModal;
